export const validatePurchaseForm = (data) => {

    const newErrors = {};

    // Val. nombre
    if (data.name.trim() === "") {
        newErrors.name = "El nombre es obligatorio";
    } else if (data.name.trim().length <= 3) {
        newErrors.name = "Nombre inválido (demasiado corto)";
    } else if (data.name.trim().length > 50) {
        newErrors.name = "Nombre inválido (demasiado largo)";
    }

    // Val. DNI
    if (data.dni.trim() === "") {
        newErrors.dni = "El DNI es obligatorio";
    } else if (!/^\d{7,8}$/.test(data.dni.trim())) {
        newErrors.dni = "El DNI debe contener entre 7 y 8 números";
    }

    // Val. email
    if (data.email.trim() === "") {
        newErrors.email = "El email es obligatorio";
    } else if (
        data.email.trim().length > 50 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())
    ) {
        newErrors.email = "El email no es válido";
    }

    // Val. teléfono
    if (data.phone.trim() === "") {
        newErrors.phone = "El número de teléfono es obligatorio";
    } else if (!/^\d{8,15}$/.test(data.phone.trim())) {
        newErrors.phone = "El teléfono debe contener entre 8 y 15 números";
    }

    // Val. dirección
    if (data.address.trim() === "") {
        newErrors.address = "La dirección es obligatoria";
    } else if (data.address.trim().length < 5) {
        newErrors.address = "La dirección es demasiado corta";
    } else if (data.address.trim().length > 100) {
        newErrors.address = "La dirección es demasiado larga";
    }

    // Val. ciudad
    if (data.city.trim() === "") {
        newErrors.city = "La localidad es obligatoria";
    } else if (data.city.trim().length < 2) {
        newErrors.city = "La localidad es demasiado corta";
    } else if (data.city.trim().length > 50) {
        newErrors.city = "La localidad es demasiado larga";
    }

    // Val. provincia
    if (data.province.trim() === "") {
        newErrors.province = "Debés seleccionar una provincia";
    }

    // Val. código postal
    if (data.postalCode.trim() === "") {
        newErrors.postalCode = "El código postal es obligatorio";
    } else if (!/^\d{4}$/.test(data.postalCode.trim())) {
        newErrors.postalCode = "El código postal debe contener 4 números";
    }

    // Val. método de envío
    if (!["standard", "express", "pickup"].includes(data.shipping)) {
        newErrors.shipping = "Seleccioná un método de envío válido";
    }

    // Val. método de pago
    if (!["transfer", "card"].includes(data.payment)) {
        newErrors.payment = "Seleccioná un método de pago válido";
    }

    // Val. comentarios
    if (data.message.length > 500) {
        newErrors.message = "El comentario no puede superar los 500 caracteres";
    }

    return newErrors;
};