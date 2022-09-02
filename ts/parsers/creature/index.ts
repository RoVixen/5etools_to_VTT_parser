import { tools5eSourceDataCreature } from "../../interfaces/5etools_formats";
import { VTTAttrib } from "../../interfaces/VTT_formats";
import { getAligmentNameBy5eCode } from "../../utils/aligment";
import { makeAttrib } from "../../utils/make_attrib";
import { generateOldId } from "../../utils/oldid_generator";
import { getSizeNameBy5eCode } from "../../utils/size";

export function parseData5eToVTTCreature(creat:tools5eSourceDataCreature):any{

    return {
        character:{
            name: creat.name,
            oldId:generateOldId(),
            avatar: "",
            bio: "",
            gmnotes: "",
            defaulttoken: "",
            tags: "",
            controlledby: "",
            inplayerjournals: "",
            
            attribs:[
                ...attribNPCType(creat)
            ],
            abilities: []
        }
    }
}

function attribNPCType(creat:tools5eSourceDataCreature):Array<VTTAttrib>{
    
    //size
    const size:string = creat.size.length==1 ?
    getSizeNameBy5eCode(creat.size[0]):
    "("+(creat.size.map((c)=>getSizeNameBy5eCode(c)).join(", "))+")"

    const cap=(string:string):string=>string.charAt(0).toUpperCase() + string.slice(1);

    //type (with tags)
    let type:string="";

    if(typeof creat.type == "string")
    type = cap(creat.type)

    if(typeof creat.type == "object")
    type = cap(creat.type.type)+" ("+creat.type.tags.map((tag)=>cap(tag)).join(", ")+")"

    //alignment
    const alignment:string=creat.alignment.map((al)=>getAligmentNameBy5eCode(al)).join(" ")
    
    return [
        makeAttrib("npc_type",size+" "+type+", "+alignment)
    ]
}