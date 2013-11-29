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
        this.menu = Ext.create('Ext.Menu', {
            items: [{
                text: 'Моя коллекция',
                iconCls: 'favorites',
                action: 'home',
                hidden: true
            }, {
                text: 'Каталог',
                iconCls: 'bookmarks',
                action: 'catalog',
                badgeText: '2'
            }, {
                text: 'Войти',
                iconCls: 'user',
                action: 'login'
            }, {
                text: 'Выйти',
                iconCls: 'user',
                action: 'logout',
                hidden: true
            }]
        });

        this.getViewport().setDefaults({
                              showAnimation:  {
                                  type: 'slide',
                                  direction: 'left'
                              }
                           });
        this.getViewport().add({ xtype: 'catalog' });
    },

    launch: function() {
        Ext.device.Splashscreen.hide();
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
