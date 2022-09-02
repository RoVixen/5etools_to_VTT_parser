import { tools5eSourceData, tools5eSourceDataCreature } from "./interfaces/5etools_formats"
import { VTTAttrib } from "./interfaces/VTT_formats";
import { parseData5eToVTTCreature } from "./parsers/creature";

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
    toReturn={
        ...toReturn,
        ...parseData5eToVTTCreature(tools5eSrcData)
    }
    
    return toReturn
}
