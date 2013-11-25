Ext.define('KihamoCollection.controller.Auth', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
           'Login'
        ],
        refs: {
            viewport: 'viewport',
            loginForm: {
                autoCreate: true,
                selector: '#loginform',
                xtype: 'login'
            }
        },
        control: {
            '#login-button': {
                tap: 'showLoginForm'
            }
        }
    },

    sessionToken: null,
    
    showLoginForm: function() {
        var form = this.getLoginForm();

        this.getViewport().add(form);
        this.getViewport().setActiveItem(form);
    }
});
