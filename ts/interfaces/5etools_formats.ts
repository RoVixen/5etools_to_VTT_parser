export type sizeCode = "T" | "S" | "M" | "L" | "H" | "G"
export type aligmentCode = "G" | "N" | "E" | "L" | "C" | "U"

export interface tools5eSourceDataCreature extends Object{
    hasToken:true
    name:string
    size:Array<sizeCode>
	type:string | { type: string, tags:Array<string> }
    alignment:Array<aligmentCode>
}

export declare type tools5eSourceData = tools5eSourceDataCreature;