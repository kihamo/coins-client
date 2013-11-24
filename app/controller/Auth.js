Ext.define('KihamoCollection.controller.Auth', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
           'Login'
        ],
        refs: {
            loginForm: {
                autoCreate: true,
                selector: '#loginform',
                xtype: 'login'
            },
            refs: {
                title: 'tweets titlebar'
            }
        },
        routes: {
            'login': 'showLoginForm'
        },
        control: {
            "#login": {
                tap: 'showLoginForm'
            }
        }
    },
    
    showLoginForm: function() {
        this.getLoginForm().show();
    }
});
