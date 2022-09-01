"use strict";
const form5e = document.getElementById("5etools_json_form");
const formVTT = document.getElementById("VTT_json_form");
const buttonParse = document.getElementById("parse");
buttonParse === null || buttonParse === void 0 ? void 0 : buttonParse.addEventListener("click", (e) => {
    var _a;
    const data5e = JSON.parse(((_a = form5e === null || form5e === void 0 ? void 0 : form5e.json_input) === null || _a === void 0 ? void 0 : _a.value) || "{}");
    console.log(data5e);
});
