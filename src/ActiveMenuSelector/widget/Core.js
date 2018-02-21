/*
    Core file

    Have multiple widgets that share code? Use the Core.js file in your widgets by using `import Core from 'Core'`

    Switch this on and off by configuring widget.core : true/false in package.json
*/

import {
    defineWidget,
    log,
    runCallback,
} from 'widget-base-helpers';

export default defineWidget('Core', false, {

    // Set in the modeler

    // Internal properties
    _obj: null,

    constructor() {
        this.log = log.bind(this);
        this.runCallback = runCallback.bind(this);
    },

    postCreate() {
        this.log('postCreate', this._WIDGET_VERSION);
    },
});
