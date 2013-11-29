Ext.define('KihamoCollection.controller.Application', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.Menu'
    ],
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
            defaults: {
                width: 200
            },
            items: [{
                iconCls: 'favorites',
                action: 'home',
                hidden: true,
                locales: {
                    text: 'buttons.collection'
                }
            }, {
                iconCls: 'bookmarks',
                action: 'catalog',
                badgeText: '2',
                locales: {
                    text: 'buttons.catalog'
                }
            }, {
                iconCls: 'user',
                action: 'login',
                locales: {
                    text: 'buttons.login'
                }
            }, {
                iconCls: 'user',
                action: 'logout',
                hidden: true,
                locales: {
                    text: 'buttons.logout'
                }
            }]
        });

        this.getViewport().setDefaults({
                              showAnimation:  {
                                  type: 'slide',
                                  direction: 'left'
                              }
                           });
    },

    launch: function() {
        this.getViewport().add({ xtype: 'catalog' });
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
