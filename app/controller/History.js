Ext.define('KihamoCollection.controller.History', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            viewport: 'viewport'
        },
        routes: {
            'home': 'goHome'
        },
        control: {
            'menu button[action=home]': {
                tap: 'goHome'
            }
        }
    },

    goHome: function(){
        this.getViewport().setActiveIndex(0);
    }
});