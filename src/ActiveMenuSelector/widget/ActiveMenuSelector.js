import {
    defineWidget,
    log,
    runCallback,
    findWidgetByName,
} from 'widget-base-helpers';

export default defineWidget('ActiveMenuSelector', false, {

    _obj: null,

    constructor() {
        this.log = log.bind(this);
        this.runCallback = runCallback.bind(this);
    },

    postCreate() {
        log.call(this, 'postCreate', this._WIDGET_VERSION);
    },

    update(obj, callback) {
        var menu = findWidgetByName(this.menuWidgetName);
        for(var propertyName in menu._menuItemMap) {
            if (this.targetItemCaption === menu._menuItemMap[propertyName].caption) {
                menu._view.deactivateAll(),
                menu._currentActive = propertyName; //this is the ID of the menu item
                menu._view.activate(propertyName);

                //see if this menu item is nested in a tree
                var s = propertyName;
                var rx = /[\-]/gi;
                var m = s.match(rx);
                if (m && m.length === 6) {
                    //it is in a tree, get the parent and make sure it's expanded
                    var parentID = s.substr(0, s.lastIndexOf("-"));
                    menu._view.expand(parentID);
                }
            }
        }        
        if(callback) {callback();}
    },
});
