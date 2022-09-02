(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_function_1 = require("./parser_function");
const form5e = document.getElementById("5etools_json_form");
const formVTT = document.getElementById("VTT_json_form");
const buttonParse = document.getElementById("parse");
buttonParse === null || buttonParse === void 0 ? void 0 : buttonParse.addEventListener("click", (e) => {
    var _a, _b;
    const data5e = JSON.parse(((_a = form5e === null || form5e === void 0 ? void 0 : form5e.json_input) === null || _a === void 0 ? void 0 : _a.value) || "{}");
    if (((_b = formVTT === null || formVTT === void 0 ? void 0 : formVTT.json_input) === null || _b === void 0 ? void 0 : _b.value) !== undefined)
        formVTT.json_input.value = JSON.stringify((0, parser_function_1.parseData5eToVTT)(data5e));
});

},{"./parser_function":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseData5eToVTT = void 0;
function parseData5eToVTTCreature(t5eDataCreature) {
    return "ADASDAS";
}
function AttirbsMakeNPCType(tools5eSrcData) {
    return {
        name: "string",
        current: "string",
        max: "string",
        id: "string"
    };
}
function parseData5eToVTT(tools5eSrcData) {
    let toReturn = {
        schema_version: 3,
        type: tools5eSrcData.hasToken ? "character" : "item",
    };
    if (tools5eSrcData.hasToken)
        toReturn = parseData5eToVTT;
    return toReturn;
}
exports.parseData5eToVTT = parseData5eToVTT;

},{}]},{},[1]);
