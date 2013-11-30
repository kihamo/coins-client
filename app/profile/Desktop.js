Ext.define('KihamoCollection.profile.Desktop', {
    extend: 'Ext.app.Profile',

    config: {
        controllers: ['Application'],
        views: ['Menu']
    },

    isActive: function() {
        return Ext.os.is.Tablet || Ext.os.is.Desktop;
    },

    launch: function() {
        Ext.create('KihamoCollection.view.desktop.Menu');
    }
});
