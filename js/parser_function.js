"use strict";
function parseData5eToVTT(json) {
    let toReturn = {
        schema_version: 3,
        type: json.hasToken ? "character" : "item",
    };
    if (json.hasToken)
        toReturn = Object.assign(Object.assign({}, toReturn), { character: {
                name: json.name
            } });
    return toReturn;
}
