import { tools5eSourceDataCreature } from "../../interfaces/5etools_formats";

export function parseData5eToVTTCreature(t5eDataCreature:tools5eSourceDataCreature):any{
    return {
        character:{
            name: t5eDataCreature.name,
            attribs:[

            ]
        }
    }
}

