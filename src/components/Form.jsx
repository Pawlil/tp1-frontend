import { useState } from "react";
import { validateForm } from '../validators/formValidators.js';
import "./Form.css";

export const Form = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {

        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

        setSubmitted(false);
    };

    const handleSubmit = (event) => {

        event.preventDefault();

        const newErrors = validateForm(formData);

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        setSubmitted(true);
    };

    return (
        <div className="form-container">

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
                        className={`form-control input-short ${errors.name ? 'is-invalid' : ''}`}
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
                        className={`form-control input-short ${errors.email ? 'is-invalid' : ''}`}
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
                        className={`form-control input-short ${errors.phone ? 'is-invalid' : ''}`}
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
                        className={`form-control input-short ${errors.address ? 'is-invalid' : ''}`}
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
                <button type="submit" className="btn btn-primary form-button">Enviar</button>

            </form>

            {submitted && (<div className="success-message" role="status">¡Tu Formulario fue enviado correctamente!</div>)}

            <p className="mt-3"><span className="obligatorio">*</span> los campos son obligatorios.</p>

        </div>
    );
};