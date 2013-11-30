Ext.define('KihamoCollection.view.Menu', {
    extend: 'Ext.Component',
    requires: [
        'Ext.Menu'
    ],

    createMenu: function() {
        return Ext.create('Ext.Menu', {
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
    },

    setMenu: function(config) {
        Ext.Viewport.setMenu(this.createMenu(), config);
    }
});