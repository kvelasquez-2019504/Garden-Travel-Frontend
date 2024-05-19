export const validatePrecio =(precio)=>{
    return precio.length>0 && precio.length<=15
}

export const validatePrecioMessage='The Service must not be empty and must be less than 15 characters'