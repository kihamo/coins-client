Ext.define('KihamoCollection.controller.User', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.device.Push',
        'Ext.device.Notification'
    ],
    config: {
        views: [
           'Login'
        ],
        refs: {
            viewport: 'viewport',
            loginView: {
                autoCreate: true,
                selector: 'loginview',
                xtype: 'loginview'
            },
            logInButton: 'menu button[action=login]',
            logOutButton: 'menu button[action=logout]'
        },
        control: {
            logInButton: {
                tap: 'showLoginForm'
            },
            logOutButton: {
                tap: 'onLogOut'
            },
            loginView: {
                logIn: 'onLogIn'
            }
        }
    },
    deviceToken: null,

    init: function() {
        var me = this;

        Ext.device.Push.register({
            senderID: '364344410935',
            type: Ext.device.Push.ALERT|Ext.device.Push.BADGE|Ext.device.Push.SOUND,
            success: function(token) {
                console.log('# Push notification registration successful:');
                console.log('    token: ' + token);
            },
            failure: function(error) {
                console.log('# Push notification registration unsuccessful:');
                console.log('     error: ' + error);
            },
            received: function(notifications) {
                console.log('# Push notification received:');
                console.log('    ' + JSON.stringify(notifications));

                if (notifications.regid) {
                    me.deviceToken = notifications.regid;
                    return;
                }

                // TODO: обработка приходящих сообщений
                if (notifications.message) {
                    Ext.device.Notification.show({
                        title: notifications.title,
                        message: notifications.message
                    });
                }
            }
        });
    },

    showLoginForm: function() {
        var form = this.getLoginView();

        this.getViewport().add(form);
        this.getViewport().setActiveItem(form);
    },

    onLogIn: function (view, username, password) {
        var me = this,
            loginView = me.getLoginView();

        if (username.length === 0 || password.length === 0) {
            loginView.showSignInFailedMessage('Укажите логин и пароль.');
            return;
        }

        loginView.setMasked({
            xtype: 'loadmask',
            message: 'Авторизация...'
        });

        Ext.Ajax.request({
            url: 'http://dev.coins.kihamo.ru/user/login',
            method: 'post',
            params: {
                username: username,
                password: password
            },
            success: function (response) {
                var loginResponse = Ext.JSON.decode(response.responseText);

                if (loginResponse.token) {
                    var defaultHeaders = Ext.Ajax.getDefaultHeaders() || {};
                    if (!defaultHeaders['Authorization']) {
                        defaultHeaders['Authorization'] = 'Token ' + loginResponse.token;
                        Ext.Ajax.setDefaultHeaders(defaultHeaders);
                    }

                    me.signInSuccess();
                }
                else {
                    me.signInFailure(loginResponse.message);
                }
            },
            failure: function () {
                me.sessionToken = null;
                me.signInFailure('Авторизация не удалась. Проверьте логин и пароль.');
            }
        });
    },

    onLogOut: function() {
        var defaultHeaders = Ext.Ajax.getDefaultHeaders() || {};
        if (defaultHeaders['Authorization']) {
            delete defaultHeaders['Authorization'];
            Ext.Ajax.setDefaultHeaders(defaultHeaders);
        }

        this.getLogOutButton().hide();
        this.getLogInButton().show();
    },

    signInSuccess: function () {
        if (this.deviceToken) {
            Ext.Ajax.request({
                url: 'http://dev.coins.kihamo.ru/user/token/',
                method: 'post',
                params: {
                    token: this.deviceToken,
                    device: Ext.device.Device.name
                }
            });
        }

        this.getLogInButton().hide();
        this.getLogOutButton().show();
        this.getLoginView().setMasked(false).destroy();
    },

    signInFailure: function (message) {
        var loginView = this.getLoginView();
        loginView.showSignInFailedMessage(message);
        loginView.setMasked(false);
    }
});
