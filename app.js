/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'KihamoCollection',

    requires: [
        'Ext.MessageBox', 'Ext.Menu'
    ],

    models: [

    ],

    stores: [

    ],

    views: [

    ],

    controllers: [
        'Main'
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
    isPhoneGap: false,

    launch: function() {
        this.isPhoneGap = Ext.browser.is.PhoneGap && !Ext.os.is.Desktop;

        if (this.isPhoneGap) {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        }
        else {
            this.onDeviceReady();
        }
    },

    onDeviceReady: function() {
        // PhoneGap listeners
        if (KihamoCollection.app.isPhoneGap) {
            Ext.device.Splashscreen.hide();

            document.addEventListener('menubutton', KihamoCollection.app.onMenuButtonKeyDown, false);
            document.addEventListener('backbutton', KihamoCollection.app.onBackButtonKeyDown, false);
            //document.addEventListener('offline', KihamoCollection.app.onBackOffline, false);
        }

        Ext.Viewport.add({ xtype: 'main' });

        Ext.Viewport.setMenu(Ext.create('Ext.Menu', {
            defaults: {
                disabled: true
            },
            items: [{
                text: 'Моя коллекция',
                iconCls: 'favorites'
            }, {
                text: 'Каталог',
                iconCls: 'bookmarks'
            }, {
                text: 'Новые поступления',
                iconCls: 'info',
                badgeText: '15'
            }, {
                text: 'Поиск',
                iconCls: 'search'
            }]
        }), {
            side: 'left',
            reveal: true
        });

        Ext.Viewport.element.on({
            swipe: function (e) {
                if (e.direction == 'right') {
                    var menus = Ext.Viewport.getMenus();
                    if (menus['left'] && menus['left'].isHidden()) {
                        KihamoCollection.app.onMenuButtonKeyDown();
                    }
                }
            } 
        });
    },

    onMenuButtonKeyDown: function() {
        Ext.Viewport.toggleMenu('left');
    },

    onBackButtonKeyDown: function() {
        var menus = Ext.Viewport.getMenus();
        if (menus['left'] && !menus['left'].isHidden()) {
            KihamoCollection.app.onMenuButtonKeyDown();
        }

        // TODO: http://rickluna.com/wp/2013/10/simple-back-buttons-in-sencha-architect-2-phonegap/

        else {
            KihamoCollection.app.doExit();
        }
    },

    onBackOffline: function() {
        Ext.Msg.alert('Для работы приложения необходим доступ в интернет');
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
    },

    doExit: function() {
        if (navigator.app && navigator.app.exitApp) {
            navigator.app.exitApp();
        }
        else if (navigator.device && navigator.device.exitApp) {
            navigator.device.exitApp();
        }
    }
});
