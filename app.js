Ext.Loader.setPath('Ux', 'vendor/Ux');

Ext.application({
    name: 'KihamoCollection',

    requires: [
        'Ux.locale.Manager',
        'Ux.locale.override.st.Component',
        'Ux.locale.override.st.Button',
        'Ux.locale.override.st.Container',
        'Ux.locale.override.st.DataView',
        'Ux.locale.override.st.TitleBar',
        'Ux.locale.override.st.field.Field',
        'Ux.locale.override.st.field.DatePicker',
        'Ux.locale.override.st.form.FieldSet',
        'Ux.locale.override.st.navigation.Bar',
        'Ux.locale.override.st.navigation.View',
        'Ux.locale.override.st.picker.Picker',
        'Ux.locale.override.st.picker.Date',

        'Ext.MessageBox',

        'Ext.device.Device',
        'Ext.device.Splashscreen',
        'Ext.device.Connection',

        'KihamoCollection.lib.proxy.Rest'
    ],

    models: [
        'Set'
    ],

    stores: [
        'CoinsSets', 'BanknotesSets'
    ],

    views: [
        'Login'
    ],

    controllers: [
        'Application',
        'History',
        'User',
        'Catalog'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    apiUrl: 'http://coins.kihamo.ru/',
    profiles: ['Phone', 'Desktop'],

    launch: function() {
        Ux.locale.Manager.setConfig({
            language: 'ru',
            tpl: 'resources/locales/{locale}.json',
            type: 'ajax',
            locales: [
                { abbr : 'ru', text : 'Русский' }
            ]
        });

        Ux.locale.Manager.init();

        Ext.Viewport.add({
            xtype: 'catalog'
        });

        Ext.device.Splashscreen.hide();
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
