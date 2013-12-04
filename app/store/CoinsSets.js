Ext.define('KihamoCollection.store.CoinsSets', {
    extend: 'Ext.data.Store',

    config: {
        model: 'KihamoCollection.model.Set',
        proxy: {
            type: 'rest',
            url: 'coins/sets/'
        }
    }
});
