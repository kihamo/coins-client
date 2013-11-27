Ext.define('KihamoCollection.controller.Catalog', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
           'Catalog'
        ],
        refs: {
            viewport: 'viewport',
            catalogView: 'catalog'
        },
        control: {
            'menu button[action=catalog]': {
                tap: 'list'
            }
        }
    },

    list: function() {
        var view = this.getCatalogView();

        this.getViewport().add(view);
        this.getViewport().setActiveItem(view);
    }
});
