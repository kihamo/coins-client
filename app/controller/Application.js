Ext.define('KihamoCollection.controller.Application', {
    extend: 'Ext.app.Controller',
    config: {
        views: [
            'Catalog'
        ],
        refs: {
             viewport: 'viewport'
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

        this.menu = Ext.create('Ext.Menu', {
            items: [{
                text: 'Моя коллекция',
                iconCls: 'favorites',
                action: 'home',
                hidden: true
            }, {
                text: 'Каталог',
                iconCls: 'bookmarks',
                action: 'catalog',
                badgeText: '2'
            }, {
                text: 'Войти',
                iconCls: 'user',
                action: 'login'
            }, {
                text: 'Выйти',
                iconCls: 'user',
                action: 'logout',
                hidden: true
            }]
        });

        this.getViewport().setDefaults({
                              showAnimation:  {
                                  type: 'slide',
                                  direction: 'left'
                              }
                           })
                           .element.on({
                              swipe: function (e) {
                                  if (e.direction == 'right' && this.menu.isHidden()) {
                                      this.onMenuButtonKeyDown();
                                  }
                              },
                              scope: this
                           });
        this.getViewport().setMenu(this.menu, {
            side: 'left',
            reveal: true
        });
        this.getViewport().add({ xtype: 'catalog' });

        Ext.device.Splashscreen.hide();
    },

    onMenuButtonKeyDown: function() {
        this.getViewport().toggleMenu('left');
    },

    onBackButtonKeyDown: function() {
        if (!this.menu.isHidden()) {
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
