Ext.define('KihamoCollection.view.Main', {
    extend: 'Ext.Panel',
    alias: 'widget.main',

    config: {
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