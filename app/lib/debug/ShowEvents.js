Ext.define('KihamoCollection.lib.debug.ShowEvents', {
     requires: ['Ext.mixin.Observable'],

     onClassMixedIn: function (cls) {
         cls.prototype.fireEvent = function () {
             console.log.apply(console, arguments);
             Ext.mixin.Observable.prototype.fireEvent.apply(this, arguments);
         };
     }
 });