export const validateName=(name)=>{
    return name.length>0 && name.length<=50;
}

export const validateNameMessage='The name must be between 1 and 50 characters'