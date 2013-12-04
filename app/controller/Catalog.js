Ext.define('KihamoCollection.controller.Catalog', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
           'Catalog', 'catalog.Types',
           'catalog.coins.Sets', 'catalog.banknotes.Sets'
        ],
        refs: {
            viewport: 'viewport',
            catalogView: 'catalog',
            types: 'catalog-types'
        },
        control: {
            'menu button[action=catalog]': {
                tap: 'onTapButton'
            },
            catalogView: {
                initialize: 'showTypes'
            },
            types: {
                itemtap: 'onTypeSelect'
            }
        }
    },

    init: function() {
        this.showSets = [];
    },

    showTypes: function() {
        this.getCatalogView().push({
            xtype: 'catalog-types'
        });
    },

    onTapButton: function() {
        this.getViewport().setActiveItem(this.getCatalogView());
    },

    onTypeSelect: function(list, index, node, record) {
        this.getCatalogView()

        var type = record.get('type');
        if (!this.showSets[type]) {
            this.showSets[type] = Ext.create('KihamoCollection.view.catalog.' + type.toLowerCase() + '.Sets');
            Ext.getStore(type + 'Sets').load();
        }

        this.getCatalogView().push(this.showSets[type]);
    }
});
