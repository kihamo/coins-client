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
        this.callParent(arguments);

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

        this.getViewport().setMenu(this.menu, {
            side: 'left',
            reveal: false
        });
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
        if (!this.menu.isHidden()) {
            this.onMenuButtonKeyDown();
        }
        else {
            this.callParent(arguments);
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
