interface tools5eSourceData extends Object{
    hasToken?:boolean
}
interface tools5eSourceDataForCreature extends tools5eSourceData{
    hasToken:true
    name:string
    size:Array<string>
	type:string | { type: string, tags:Array<string> }
    alignment:Array<string>
}

interface VTTAttrib{
    name:string
    current:string
    max:string
    id:string
}

function parseData5eToVTT(tools5eSrcData:tools5eSourceData):object{
    let toReturn:object={
        schema_version: 3,
        type:tools5eSrcData.hasToken?"character":"item",
    };

    if(tools5eSrcData.hasToken)
    toReturn=parseData5eToVTT
    
    
    
    return toReturn
}

function parseData5eToVTTCreature(t5eDataCreature:tools5eSourceDataForCreature):any{
    return "ADASDAS"
}

function AttirbsMakeNPCType(tools5eSrcData:tools5eSourceData):VTTAttrib{
    
    return {
        name:"string",
        current:"string",
        max:"string",
        id:"string"
    }
}