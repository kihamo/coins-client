Ext.define('KihamoCollection.controller.Auth', {
    extend: 'Ext.app.Controller',

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
            url: 'http://localhost:8000/user/login',
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
        this.getLogInButton().hide();
        this.getLogOutButton().show();
        this.getLoginView().setMasked(false).destroy();
/*
        Ext.Ajax.request({
            url: 'http://localhost:8000/user/token/',
            method: 'post',
            params: {
                token: '333333',
                device: '777'
            }
        });
*/
    },

    signInFailure: function (message) {
        var loginView = this.getLoginView();
        loginView.showSignInFailedMessage(message);
        loginView.setMasked(false);
    }
});
