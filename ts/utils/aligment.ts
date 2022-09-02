import { aligmentCode } from "../interfaces/5etools_formats";

export function getAligmentNameBy5eCode(code:aligmentCode):string{
    const toReturn = {
        "G" : "Good",
        "N" : "Neutral",
        "E" : "Evil",
        "L" : "Lawful",
        "C" : "Chaotic",
        "U" : "Unaligned"
    }[code] || "aligment_code_not_recognized"

    if(toReturn=="aligment_code_not_recognized")
    console.error(new Error("getAligmentNameBy5eCode: Aligment "+code+" (typeof code = "+(typeof code)+") not recognized"))

    return toReturn
}