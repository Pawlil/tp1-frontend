import { useState } from "react";

export const Form = () =>{

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
    });

    const handleChange = (event) =>{
        setFormData({
            ... formData,
            [event.target.name]: event.target.value,
        });
    };

    //VALIDACIONES
    // Lo ideal (creo, porque lo habla en el video) seria que Validaciones tenga su propia carpeta. 
    // Asumo que de la siguiente forma:
    // src-
    //     -Validations
    //                 -name.jsx
    //                 -email.jsx
    //                 -age.jsx
    //O tambien pueden estar todas las validacioens junto en un mismo .jsx . REVISAR LOGICA.
    const [errors, setErrors] = useState({});

    const validate = (data) =>{
        
        const newErrors={};

        //Val. nombre
        if(data.name.trim() === ""){
            newErrors.name = "El nombre es obligatorio";
        }else if (data.name.trim().length <= 3){
            newErrors.name = "Nombre invalido (demasiado corto)";
        }else if (data.name.length > 50){
            newErrors.name = "Nombre invalido (demasiado largo)";
        }

        //Val. email
        if(data.email.trim() === ""){
            newErrors.email = "El mail es obligatorio";
        }else if (!data.email.includes("@")){
            newErrors.email = "El mail no contiene @";
        }else if (data.email.trim().length <=6){
            newErrors.email = "Email invalido (demasiado corto)";
        }else if (data.email.length > 50){
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
        }

        //Val. direccion
        if(data.address.trim() === ""){
            newErrors.address = "La direccion es obligatoria";
        } else if (data.address.trim().length < 5) {
            newErrors.address = "La dirección es demasiado corta";
        } else if (data.address.length > 100) {
            newErrors.address = "La dirección es demasiado larga";
        }

        return newErrors;
    };
    //VALIDACIONES

    const handleSubmit = (event) =>{
        event.preventDefault();
        
        const newErrors = validate(formData);

        setErrors(newErrors);

        if(Object.keys(newErrors).length > 0){
            return;
        }
    };

   console.log(errors);
    
    return (
            <div className="row g-4">
                <div className="col-md-7">
                    <form onSubmit={handleSubmit} noValidate>

                        {/* NOMBRE */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre y Apellido</label>
                            <input 
                              type="text" 
                              id="name" 
                              name="name" 
                              className={`form-control ${errors.name ? 'is-invalid': ''}`}
                              value={formData.name}
                              onChange={handleChange}
                            />
                            {errors.name && (<div className="invalid-feedback d-block">{errors.name}</div>)}
                        </div>

                        {/* MAIL */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                              type="email" 
                              id="email" 
                              name="email" 
                              className={`form-control ${errors.email ? 'is-invalid': ''}`}
                              value={formData.email}
                              onChange={handleChange}
                            />
                            {errors.email && (<div className="invalid-feedback d-block">{errors.email}</div>)}
                        </div>

                        {/* TELEFONO */}
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Numero de telefono</label>
                            <input 
                              type="text" 
                              id="phone" 
                              name="phone" 
                              className={`form-control ${errors.phone ? 'is-invalid': ''}`}
                              value={formData.phone}
                              onChange={handleChange}
                            />
                            {errors.phone && (<div className="invalid-feedback d-block">{errors.phone}</div>)}
                        </div>

                        {/* DIRECCION */}
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Direccion</label>
                            <input 
                              type="text" 
                              id="address" 
                              name="address" 
                              className={`form-control ${errors.address ? 'is-invalid': ''}`}
                              value={formData.address}
                              onChange={handleChange}
                            />
                            {errors.address && (<div className="invalid-feedback d-block">{errors.address}</div>)}
                        </div>

                        {/* MENSAJE ADICIONAL */}
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Envianos un Comentario</label>
                            <input 
                              type="message" 
                              id="message" 
                              name="message" 
                              className={`form-control ${errors.message ? 'is-invalid': ''}`}
                              value={formData.message}
                              onChange={handleChange}
                            />
                            {errors.message && (<div className="invalid-feedback d-block">{errors.message}</div>)}
                        </div>

                        {/* BOTON DE ENVIAR */}
                        <button type="submit" className="btn btn-primary">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
    );
};