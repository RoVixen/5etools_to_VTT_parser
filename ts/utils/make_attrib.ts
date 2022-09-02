import { VTTAttrib } from "../interfaces/VTT_formats"
import { generateOldId } from "./oldid_generator"

export function makeAttrib(type:string,current?:string,max?:string,id?:string):VTTAttrib{
    return {
        name: type,
        current: current || "",
        max: max || "",
        id: id || generateOldId()
    }
}