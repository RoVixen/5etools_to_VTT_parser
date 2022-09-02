export interface tools5eSourceDataCreature extends Object{
    hasToken:true
    name:string
    size:Array<string>
	type:string | { type: string, tags:Array<string> }
    alignment:Array<string>
}

export declare type tools5eSourceData = tools5eSourceDataCreature;