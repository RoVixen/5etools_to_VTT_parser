import { tools5eSourceDataCreature } from "../../interfaces/5etools_formats";
import { generateOldId } from "../../utils/oldid_generator";

export function parseData5eToVTTCreature(t5eDataCreature:tools5eSourceDataCreature):any{

    return {
        character:{
            name: t5eDataCreature.name,
            attribs:[
                "asdasd"
            ]
        }
    }
}

function attribNPCType(t5eDataCreature:tools5eSourceDataCreature){
    return ""
}