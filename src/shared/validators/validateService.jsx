export const validateService =(nombre)=>{
    return nombre.length>0 && nombre.length<=15
}

export const validateServicesMessage='The Service must not be empty and must be less than 15 characters'