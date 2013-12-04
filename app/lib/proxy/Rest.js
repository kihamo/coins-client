Ext.define('KihamoCollection.lib.proxy.Rest', {
    extend: 'Ext.data.proxy.Rest',
    override: 'Ext.data.proxy.Rest',
    requires: [
        'Ext.data.proxy.Rest'
    ],

    constructor: function(config) {
        Ext.merge(this.config, {
            headers: {
                'Accept': 'application/json'
            },
            enablePagingParams: false
        });

        this.callParent([config]);
    },

    buildUrl: function(request) {
        var url = this.getUrl(request);
        request.setUrl('http://dev.coins.kihamo.ru/api/v1/' + url);

        return this.callParent([request]);
    }
});