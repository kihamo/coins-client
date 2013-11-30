Ext.define('KihamoCollection.controller.phone.Application', {
    extend: 'KihamoCollection.controller.Application',
    config: {
        control: {
            'menu button': {
                tap: 'onMenuButtonKeyDown'
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

        this.getViewport().element.on({
                              swipe: function (e) {
                                  if (e.direction == 'right' && this.menu.isHidden()) {
                                      this.onMenuButtonKeyDown();
                                  }
                              },
                              scope: this
                           });
    },

    onBackButtonKeyDown: function() {
        var menus =  this.getViewport().getMenus(), menu;
        if (menus['left']) {
            menu = menus['left'];
            if (!menu.isHidden()) {
                this.onMenuButtonKeyDown();
            }
        }
    },

    onMenuButtonKeyDown: function() {
        this.getViewport().toggleMenu('left');
    },

    onOffline: function() {
        Ext.Msg.alert('Для работы приложения необходим доступ в интернет');
    },

    onOnline: function() {
        Ext.Msg.alert('Добро пожаловать в интернет');
    }
});
