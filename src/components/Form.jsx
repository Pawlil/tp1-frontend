import { useState } from "react";
import { validateForm } from '../validators/formValidators.js';
import "./Form.css";
import instagramLogo from "../assets/instagramLogo.png";
import facebookLogo from "../assets/facebookLogo.png";
import twitterXLogo from "../assets/twitterXLogo.png";

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

    const [errors, setErrors] = useState({});

    const handleSubmit = (event) =>{
        event.preventDefault();
        
        const newErrors = validateForm(formData);

        setErrors(newErrors);

        if(Object.keys(newErrors).length > 0){
            return;
        }
    };

    //console.log(errors);
    
    return (
            <div className="row g-4">
                <div className="col-md-7">
                
                    <div className="contact-heading">
                        <span className="contact-eyebrown">BIBLIO-TEC / CONTACTO</span>
                        <h1 className="mb-4">¡Contactate con nosotros!</h1>
                        <h6>Envianos tus datos y nos pondremos en contacto</h6>
                    </div>
                    
                    {/* FORM*/}
                    <form onSubmit={handleSubmit} noValidate>

                        {/* NOMBRE */}
                        <div className="mb-3 name">
                            <label htmlFor="name" className="form-label">Nombre y Apellido <span className="obligatorio">*</span></label>
                            <input 
                              type="text" 
                              id="name" 
                              name="name" 
                              placeholder="Escribe tu nombre"
                              className={`form-control input-short ${errors.name ? 'is-invalid': ''}`}
                              value={formData.name}
                              onChange={handleChange}
                            />
                            {errors.name && (<div className="invalid-feedback d-block">{errors.name}</div>)}
                        </div>

                        {/* EMAIL */}
                        <div className="mb-3 email">
                            <label htmlFor="email" className="form-label">Email <span className="obligatorio">*</span></label>
                            <input 
                              type="email" 
                              id="email" 
                              name="email"
                              placeholder="Escribe tu email" 
                              className={`form-control input-short ${errors.email ? 'is-invalid': ''}`}
                              value={formData.email}
                              onChange={handleChange}
                            />
                            {errors.email && (<div className="invalid-feedback d-block">{errors.email}</div>)}
                        </div>

                        {/* TELEFONO */}
                        <div className="mb-3 phone">
                            <label htmlFor="phone" className="form-label">Numero de teléfono <span className="obligatorio">*</span></label>
                            <input 
                              type="text" 
                              id="phone" 
                              name="phone"
                              placeholder="Escribe tu teléfono" 
                              className={`form-control input-short ${errors.phone ? 'is-invalid': ''}`}
                              value={formData.phone}
                              onChange={handleChange}
                            />
                            {errors.phone && (<div className="invalid-feedback d-block">{errors.phone}</div>)}
                        </div>

                        {/* DIRECCION */}
                        <div className="mb-3 address">
                            <label htmlFor="address" className="form-label">Dirección <span className="obligatorio">*</span></label>
                            <input 
                              type="text" 
                              id="address" 
                              name="address"
                              placeholder="Escribe tu dirección" 
                              className={`form-control input-short ${errors.address ? 'is-invalid': ''}`}
                              value={formData.address}
                              onChange={handleChange}
                            />
                            {errors.address && (<div className="invalid-feedback d-block">{errors.address}</div>)}
                        </div>

                        {/* MENSAJE ADICIONAL */}
                        <div className="mb-3 message">
                            <label htmlFor="message" className="form-label">Envíanos un comentario (opcional)</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Escribe un mensaje"
                                rows="5"
                                className={`form-control input-message ${errors.message ? 'is-invalid' : ''}`}
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && (<div className="invalid-feedback d-block">{errors.message}</div>)}
                        </div>

                        {/* BOTON DE ENVIAR */}
                        <button type="submit" className="btn btn-primary form-button">
                            Enviar
                        </button>

                        

                    </form>
                    {/* FORM*/}

                    <p className="mt-3"><span className="obligatorio">*</span> los campos son obligatorios.</p>

                </div>

                <div className="col-md-5">
                            <aside className="contact-sidebar">
                                <h3>Siguenos en nuestras redes</h3>
                                <p>¿Tenés alguna consulta? También podés encontrarnos en nuestras redes sociales.</p>
                                {/*Revisar si esta bien lo siguiente*/}
                                <div className="social-links">
                                    <a href="https://example.com" target="_blank" rel="noreferrer"> <img src={instagramLogo} alt="" />Instagram</a>
                                    <a href="https://example.com" target="_blank" rel="noreferrer"><img src={facebookLogo} alt="" />Facebook</a>
                                    <a href="https://example.com" target="_blank" rel="noreferrer"><img src={twitterXLogo} alt="" />X</a>
                                </div>
                            </aside>
                        </div>
            </div>
    );
};