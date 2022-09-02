import { parseData5eToVTT } from "./parser_function";

interface HTMLParsingForm extends HTMLElement{
    json_input?:HTMLTextAreaElement
}

const form5e: null | HTMLParsingForm = document.getElementById("5etools_json_form");
const formVTT: HTMLParsingForm | null = document.getElementById("VTT_json_form");

const buttonParse=document.getElementById("parse");

buttonParse?.addEventListener("click",(e)=>{
    const data5e=JSON.parse(form5e?.json_input?.value || "{}")

    if(formVTT?.json_input?.value!==undefined)
    formVTT.json_input.value=JSON.stringify(parseData5eToVTT(data5e));
})