export const validateForm = (data) => {

    const newErrors = {};

    //Val. nombre
    if(data.name.trim() === ""){
        newErrors.name = "El nombre es obligatorio";
    }else if (data.name.trim().length <= 3){
        newErrors.name = "Nombre invalido (demasiado corto)";
    }else if (data.name.trim().length > 50){
        newErrors.name = "Nombre invalido (demasiado largo)";
    }

    //Val. email
    if(data.email.trim() === ""){
        newErrors.email = "El mail es obligatorio";
    }else if (!data.email.includes("@")){
        newErrors.email = "El mail no contiene @";
    }else if (data.email.trim().length <=6){
        newErrors.email = "Email invalido (demasiado corto)";
    }else if (data.email.trim().length > 50){
        newErrors.email = "Email invalido (demasiado largo)";
    }else if (data.email.indexOf("@") === 0) {
        newErrors.email = "El email no puede comenzar con @";
    } else if (data.email.indexOf("@") !== data.email.lastIndexOf("@")) {
        newErrors.email = "El email no puede contener más de un @";
    } else if (data.email.indexOf(".") === -1) {
        newErrors.email = "El email debe contener un punto (.)";
    } else if (data.email.lastIndexOf(".") < data.email.indexOf("@")) {
        newErrors.email = "El punto debe estar después del @";
    } else if (data.email.lastIndexOf(".") === data.email.length - 1) {
        newErrors.email = "El email no puede terminar con un punto";
    } else if (data.email.includes(" ")) {
        newErrors.email = "El email no puede contener espacios";
    } else if (data.email.includes("@.")) {
        newErrors.email = "No puede haber un punto inmediatamente después del @";
    } else if (data.email.includes("..")) {
        newErrors.email = "El email no puede contener puntos consecutivos";
    } else if (
        !data.email.endsWith(".com") &&
        !data.email.endsWith(".net") &&
        !data.email.endsWith(".org") &&
        !data.email.endsWith(".edu") &&
        !data.email.endsWith(".gov") &&
        !data.email.endsWith(".io") &&
        !data.email.endsWith(".com.ar") &&
        !data.email.endsWith(".org.ar")
    ){
        newErrors.email = "La terminación del email no es válida";
    }

    //Val. telefono
    if(data.phone.trim() === ""){
        newErrors.phone = "El numero de telefono es obligatorio";
    } else if (data.phone.trim().length < 8){
        newErrors.phone = "El numero de telefono no es valido";
    } else if (data.phone.trim().length > 15){
        newErrors.phone = "El numero de telefono no es valido";
    } else if (!/^\d+$/.test(data.phone.trim())) {
    newErrors.phone = "El teléfono solo puede contener números";
}

    //Val. direccion
    if(data.address.trim() === ""){
        newErrors.address = "La direccion es obligatoria";
    } else if (data.address.trim().length < 5) {
        newErrors.address = "La dirección es demasiado corta";
    } else if (data.address.trim().length > 100) {
        newErrors.address = "La dirección es demasiado larga";
    }

    //Val. mensaje
    if (data.message.length > 500) {
    newErrors.message = "El mensaje no puede superar los 500 caracteres";
}

    return newErrors;
}