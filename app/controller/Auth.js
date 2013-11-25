Ext.define('KihamoCollection.controller.Auth', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
           'Login'
        ],
        refs: {
            main: 'main',
            loginForm: {
                autoCreate: true,
                selector: '#loginform',
                xtype: 'login'
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
        var form = this.getLoginForm();

        this.getMain().add(form);
        this.getMain().setActiveItem(form);
    }
});
