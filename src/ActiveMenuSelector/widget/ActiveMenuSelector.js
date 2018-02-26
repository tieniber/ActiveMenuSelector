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
        const menu = findWidgetByName(this.menuWidgetName);
        for(const itemID in menu._menuItemMap) {
            if (this.targetItemCaption === menu._menuItemMap[ itemID ].caption) {
                if("mxui.widget.NavigationTree" === menu.declaredClass) {
                    menu._view.deactivateAll();
                    menu._currentActive = itemID; //this is the ID of the menu item
                    menu._view.activate(itemID);

                    //see if this menu item is nested in a tree. If so, expand it.
                    const parentID = this._findParentMenuItem(itemID);
                    if (parentID) {
                        menu._view.expand(parentID);
                    }
                } else if("mxui.widget.Navbar" === menu.declaredClass) {
                    //hack to set viewState because the Mx runtime restores a previous (incorrect) one
                    if (!this.mxform.viewState[ menu.uniqueid ]) {
                        this.mxform.viewState[ menu.uniqueid ] = {};
                    }
                    this.mxform.viewState[ menu.uniqueid ].selectedItem = itemID;

                    //normal flow to deselect and reselect the right item
                    menu._view.deselectAll();
                    menu._currentActive = itemID; //this is the ID of the menu item
                    menu._initialSelection = itemID;
                    menu._view.select(itemID);
                } else if ("mxui.widget.MenuBar" === menu.declaredClass) {
                    const simpleItemID = itemID.substr(itemID.lastIndexOf("-") + 1);
                    //hack to set viewState because the Mx runtime restores a previous (incorrect) one
                    if (!this.mxform.viewState[ menu.uniqueid ]) {
                        this.mxform.viewState[ menu.uniqueid ] = {};
                    }
                    this.mxform.viewState[ menu.uniqueid ].selectedIndex = simpleItemID;

                    menu._currentActive = simpleItemID; //this is the ID of the menu item
                    menu._initialSelection = simpleItemID;
                    menu._view.select(simpleItemID);
                }
                break;
            }
        }
        if(callback) {callback();}
    },
    _findParentMenuItem(itemID) {
        //see if this menu item is nested in a tree. If so, expand it.
        const s = itemID;
        const rx = /[-]/gi;
        const m = s.match(rx);
        if (m && 6 === m.length) {
            //it is in a tree, get the parent and make sure it's expanded
            const parentID = s.substr(0, s.lastIndexOf("-"));
            return parentID;
        }
        return null;
    },
});
