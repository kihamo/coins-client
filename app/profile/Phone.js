Ext.define('KihamoCollection.profile.Phone', {
    extend: 'Ext.app.Profile',

    config: {
        controllers: ['Application'],
        views: ['Menu']
    },

    isActive: function() {
        return Ext.os.is.Phone;
    },

    launch: function() {
        Ext.create('KihamoCollection.view.phone.Menu');
    }
});
