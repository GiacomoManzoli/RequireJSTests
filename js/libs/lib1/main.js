// define(function(require) {
//     return {
//         f1: require('lib1/l1'),
//         f2: require('lib1/l2')
//     };
// });

define(function (require, exports, module) {
    'use strict';
    var l1 = require("./l1");
    var l2 = require("./l2");
    exports.l1 = l1;
    exports.l2 = l2;
});