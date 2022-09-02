import { tools5eSourceData, tools5eSourceDataForCreature } from "./interfaces/5etools_formats"
import { VTTAttrib } from "./interfaces/VTT_formats";

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

export function parseData5eToVTT(tools5eSrcData:tools5eSourceData):object{
    let toReturn:object={
        schema_version: 3,
        type:tools5eSrcData.hasToken?"character":"item",
    };

    if(tools5eSrcData.hasToken)
    toReturn=parseData5eToVTT
    
    
    
    return toReturn
}
