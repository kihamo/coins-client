Ext.define('KihamoCollection.controller.Application', {
    extend: 'Ext.app.Controller',
    require: [
        'Ext.Menu'
    ],

    config: {
        views: [
            'Main'
        ],
        control: {
            'main > toolbar > button[action=menu]': {
                tap: function() {
                    this.onMenuButtonKeyDown();
                }
            }
        }
    },

    init: function() {
        if (Ext.browser.is.Cordova) {
            document.addEventListener('menubutton', function() {
                this.onMenuButtonKeyDown();
            }.bind(this), false);
            document.addEventListener('backbutton', function() {
                this.onBackButtonKeyDown();
            }.bind(this), false);
            document.addEventListener('offline', function() {
                this.onOffline();
            }.bind(this), false);
            document.addEventListener('online', function() {
                this.onOnline();
            }.bind(this), false);
        }
        else {
            document.oncontextmenu = function() { return false; }
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
        }

        Ext.Viewport.add([
            { xtype: 'main' }
        ]);

        var menu = Ext.create('Ext.Menu', {
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
            }, {
                text: 'Войти',
                iconCls: 'user',
                id: 'login',
                disabled: false
            }]
        });

        Ext.Viewport.setMenu(menu, {
            side: 'left',
            reveal: true
        });

        Ext.Viewport.element.on({
            swipe: function (e) {
                if (e.direction == 'right' && menu.isHidden()) {
                    this.onMenuButtonKeyDown();
                }
            },
            scope: this
        });

        Ext.device.Splashscreen.hide();
    },

    onMenuButtonKeyDown: function() {
        Ext.Viewport.toggleMenu('left');
    },

    // TODO: http://rickluna.com/wp/2013/10/simple-back-buttons-in-sencha-architect-2-phonegap/
    onBackButtonKeyDown: function() {
        var menus = Ext.Viewport.getMenus();
        if (menus['left'] && !menus['left'].isHidden()) {
            this.onMenuButtonKeyDown();
        }
        else {
            this.doExit();
        }
    },

    onOffline: function() {
        Ext.Msg.alert('Для работы приложения необходим доступ в интернет');
    },

    onOnline: function() {
        Ext.Msg.alert('Добро пожаловать в интернет');
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
