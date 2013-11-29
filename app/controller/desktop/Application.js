Ext.define('KihamoCollection.controller.desktop.Application', {
    extend: 'KihamoCollection.controller.Application',

    init: function() {
        this.callParent(arguments);

        document.oncontextmenu = function() { return false; }
        /*
        document.addEventListener('mousedown', function(e) {
            if (e.button == 2) {
                this.onMenuButtonKeyDown();
            }
        }.bind(this), true);
        document.addEventListener('keydown', function(e) {
            if (e.altKey && e.ctrlKey) {
                switch (e.keyCode) {
                    case 77:
                        this.onMenuButtonKeyDown();
                    break;
                }
            }
        }.bind(this), true);
        */

        this.getViewport().setMenu(this.menu, {
            side: 'left',
            reveal: true
        });
        Ext.Viewport.showMenu('left');
    }
});
