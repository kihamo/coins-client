Ext.define('KihamoCollection.view.catalog.banknotes.Sets', {
    extend: 'Ext.List',

    config: {
        title: 'Наборы банкнот',
        store: 'BanknotesSets',
        itemTpl: '{name}'
    }
});
