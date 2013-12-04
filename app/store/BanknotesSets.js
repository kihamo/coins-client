Ext.define('KihamoCollection.store.BanknotesSets', {
    extend: 'Ext.data.Store',

    config: {
        model: 'KihamoCollection.model.Set',
        proxy: {
            type: 'rest',
            url: 'banknotes/sets/'
        }
    }
});
