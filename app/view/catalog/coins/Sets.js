Ext.define('KihamoCollection.view.catalog.coins.Sets', {
    extend: 'Ext.List',

    config: {
        title: 'Наборы монет',
        store: 'CoinsSets',
        itemTpl: '{name}'
    }
});
