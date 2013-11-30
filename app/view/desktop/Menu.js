Ext.define('KihamoCollection.view.desktop.Menu', {
    extend: 'KihamoCollection.view.Menu',

    initialize: function() {
        this.setMenu({
            side: 'left',
            reveal: true
        });
        Ext.Viewport.showMenu('left');
    }
});