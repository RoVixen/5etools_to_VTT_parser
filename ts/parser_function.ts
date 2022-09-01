interface tools5eSourceData extends Object{
    hasToken?:boolean
    name:string
}

function parseData5eToVTT(json:tools5eSourceData):object{
    let toReturn:object={
        schema_version: 3,
        type:json.hasToken?"character":"item",
    };

    if(json.hasToken)
    toReturn={
        ...toReturn,
        character:{
            name:json.name
        }
    }
    
    
    return toReturn
}