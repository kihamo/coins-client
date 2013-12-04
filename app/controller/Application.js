Ext.define('KihamoCollection.controller.Application', {
    extend: 'Ext.app.Controller',
    config: {
        views: [
            'Catalog'
        ],
        refs: {
             viewport: 'viewport'
        }
    },

    init: function() {
        this.getViewport().setDefaults({
                              showAnimation:  {
                                  type: 'slide',
                                  direction: 'left'
                              }
                           });
    },

    onBackButtonKeyDown: function() {
        this.doExit();
    },

    doExit: function() {
        if (navigator.app && navigator.app.exitApp) {
            navigator.app.exitApp();
        }
        else if (navigator.device && navigator.device.exitApp) {
            navigator.device.exitApp();
        }
    }
});
