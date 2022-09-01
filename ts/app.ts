interface HTMLElement{
    json_input?:HTMLTextAreaElement
}

const form5e: HTMLElement | null = document.getElementById("5etools_json_form");
const formVTT: HTMLElement | null = document.getElementById("VTT_json_form");

const buttonParse=document.getElementById("parse");

buttonParse?.addEventListener("click",(e)=>{
    const data5e=JSON.parse(form5e?.json_input?.value || "{}")

    console.log(data5e)
})