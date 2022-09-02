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
