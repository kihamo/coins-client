Ext.define('KihamoCollection.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
            'Main'
        ],

        control: {
            'main > toolbar > button[action=menu]': {
                tap: function() {
                	this.getApplication().onMenuButtonKeyDown();
                }
            }
        }
    }
});
