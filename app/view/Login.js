Ext.define('KihamoCollection.view.Login', {
    extend: 'Ext.form.Panel',
    // mixins: ['KihamoCollection.lib.debug.ShowEvents'],
    xtype: 'loginview',
    requires: [
        'Ext.form.FieldSet',
        'Ext.form.Password',
        'Ext.Label',
        'Ext.util.DelayedTask'
    ],
    config: {
        scrollable: false,
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Авторизация'
            },
            {
                xtype: 'label',
                html: 'Login failed. Please enter the correct credentials.',
                itemId: 'signInFailedLabel',
                hidden: true,
                hideAnimation: 'fadeOut',
                showAnimation: 'fadeIn',
                style: 'color:#990000;margin:5px 0px;'
            },
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'textfield',
                        placeHolder: 'логин',
                        itemId: 'userNameTextField',
                        name: 'userNameTextField',
                        required: true
                    },
                    {
                        xtype: 'passwordfield',
                        placeHolder: 'пароль',
                        itemId: 'passwordTextField',
                        name: 'passwordTextField',
                        required: true
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Войти',
                ui: 'action',
                itemId: 'logInButton'
            }
        ],
        listeners: [{
            delegate: '#logInButton',
            event: 'tap',
            fn: 'onLogInButtonTap'
        }]
    },

    onLogInButtonTap: function () {
        var me = this,

            usernameField = this.down('#userNameTextField'),
            passwordField = this.down('#passwordTextField'),
            label = this.down('#signInFailedLabel'),

            username = usernameField.getValue(),
            password = passwordField.getValue();

        label.hide();

        Ext.create('Ext.util.DelayedTask', function () {
            label.setHtml('');
            me.fireEvent('logIn', me, username, password);
            passwordField.setValue('');
        }).delay(500);
    },

    showSignInFailedMessage: function (message) {
        var label = this.down('#signInFailedLabel');
        label.setHtml(message);
        label.show();
    }
});