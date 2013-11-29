Ext.define('KihamoCollection.profile.Phone', {
    extend: 'Ext.app.Profile',

    config: {
        controllers: ['Application']
    },

    isActive: function() {
        return Ext.os.is.Phone;
    }
});
