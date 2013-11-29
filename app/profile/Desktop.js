Ext.define('KihamoCollection.profile.Desktop', {
    extend: 'Ext.app.Profile',

    config: {
        controllers: ['Application']
    },

    isActive: function() {
        return Ext.os.is.Tablet || Ext.os.is.Desktop;
    }
});
