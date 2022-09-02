"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseData5eToVTT = void 0;
const creature_1 = require("./parsers/creature");
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
        toReturn = Object.assign(Object.assign({}, toReturn), (0, creature_1.parseData5eToVTTCreature)(tools5eSrcData));
    return toReturn;
}
exports.parseData5eToVTT = parseData5eToVTT;
