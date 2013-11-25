Ext.define('KihamoCollection.view.Main', {
    extend: 'Ext.Container',
    xtype:'main',
    alias: 'widget.main',

    config: {
        fullscreen: true,
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            title: 'Kihamo collection',
            items: [{
                xtype: 'button',
                ui: 'plain',
                action: 'menu',
                iconCls: 'list'
            }]
        }]
    }
});