Ext.define('KihamoCollection.controller.History', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'main'
        },
        routes: {
            '': 'gotoHome',
            'home': 'gotoHome'
        },
        control: {
            'main': {
                activeitemchange: 'addHistory'
            },
            "#home": {
                tap: 'gotoHome'
            }
        }
    },

    addHistory: function(p, v) {
        console.log("recordTabChanged " + v.xtype);

        this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
            url:v.xtype
        }),true);
    },

    gotoHome: function(){
        console.log('Goto Home');

        this.getMain().setActiveItem(0);
    }
});