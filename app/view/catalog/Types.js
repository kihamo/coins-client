Ext.define('KihamoCollection.view.catalog.Types', {
    extend: 'Ext.List',
    xtype: 'catalog-types',

    config: {
        title: 'Каталог',
        itemTpl: '{title}',
        data: [
            { title: 'Монеты', type: 'Coins' },
            { title: 'Банкноты', type: 'Banknotes' }
        ]
    }
});
