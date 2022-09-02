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
