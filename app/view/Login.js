Ext.define('KihamoCollection.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',
    requires: [
        'Ext.form.FieldSet',
        'Ext.form.Password',
        'Ext.Label'
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
                ui: 'action'
            }
        ]
    }
});