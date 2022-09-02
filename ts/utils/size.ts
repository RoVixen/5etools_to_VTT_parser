import { sizeCode } from "../interfaces/5etools_formats";

export function getSizeNameBy5eCode(code:sizeCode):string{
    const toReturn =  {
        "T":"Tiny",
        "S":"Small",
        "M":"Medium",
        "L":"Large",
        "H":"Huge",
        "G":"Gargantuan"
    }[code] || "size_code_not_recognized"

    if(toReturn=="aligment_code_not_recognized")
    console.error(new Error("getSizeNameBy5eCode: Size "+code+" (typeof code = "+(typeof code)+") not recognized"))

    return toReturn
}