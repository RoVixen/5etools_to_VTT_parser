export interface tools5eSourceData extends Object{
    hasToken?:boolean
}

export interface tools5eSourceDataForCreature extends tools5eSourceData{
    hasToken:true
    name:string
    size:Array<string>
	type:string | { type: string, tags:Array<string> }
    alignment:Array<string>
}