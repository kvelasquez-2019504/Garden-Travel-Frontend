export const validarPrecio=(precio)=>{
    const regExp = /^([1-9]\d*(\.\d+)?)$/;
    return regExp.test(precio);
}

export const validarPrecioMensaje="El precio debe ser positivo y mayor a 0.00";