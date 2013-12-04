Ext.define('KihamoCollection.model.Set', {
    extend: 'Ext.data.Model',

    config: {
        idProperty: 'sid',
        fields: [
            'id',
            'name',
            'image',
            'owner'
        ]
    }
});
