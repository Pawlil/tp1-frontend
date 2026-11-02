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

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: "",
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

            <form onSubmit={handleSubmit} noValidate>

                {/* NOMBRE */}
                <div className="mb-4 name">
                    <label htmlFor="name" className="form-label">
                        Nombre y Apellido <span className="obligatorio">*</span>
                    </label>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Escribe tu nombre"
                        className={`form-control input-short ${errors.name ? 'is-invalid' : ''}`}
                        value={formData.name}
                        onChange={handleChange}
                        aria-invalid={!!errors.name}
                    />

                    {errors.name && (
                        <div className="invalid-feedback d-block">
                            {errors.name}
                        </div>
                    )}
                </div>

                {/* EMAIL */}
                <div className="mb-4 email">
                    <label htmlFor="email" className="form-label">
                        Email <span className="obligatorio">*</span>
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Escribe tu email"
                        className={`form-control input-short ${errors.email ? 'is-invalid' : ''}`}
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={!!errors.email}
                    />

                    {errors.email && (
                        <div className="invalid-feedback d-block">
                            {errors.email}
                        </div>
                    )}
                </div>

                {/* TELEFONO */}
                <div className="mb-4 phone">
                    <label htmlFor="phone" className="form-label">
                        Número de teléfono <span className="obligatorio">*</span>
                    </label>

                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Escribe tu teléfono"
                        className={`form-control input-short ${errors.phone ? 'is-invalid' : ''}`}
                        value={formData.phone}
                        onChange={handleChange}
                        aria-invalid={!!errors.phone}
                    />

                    {errors.phone && (
                        <div className="invalid-feedback d-block">
                            {errors.phone}
                        </div>
                    )}
                </div>

                {/* DIRECCION */}
                <div className="mb-4 address">
                    <label htmlFor="address" className="form-label">
                        Dirección <span className="obligatorio">*</span>
                    </label>

                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Escribe tu dirección"
                        className={`form-control input-short ${errors.address ? 'is-invalid' : ''}`}
                        value={formData.address}
                        onChange={handleChange}
                        aria-invalid={!!errors.address}
                    />

                    {errors.address && (
                        <div className="invalid-feedback d-block">
                            {errors.address}
                        </div>
                    )}
                </div>

                {/* MENSAJE ADICIONAL */}
                <div className="mb-4 message">
                    <label htmlFor="message" className="form-label">
                        Envíanos un comentario (opcional)
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        placeholder="Escribe un mensaje"
                        rows="5"
                        className={`form-control input-message ${errors.message ? 'is-invalid' : ''}`}
                        value={formData.message}
                        onChange={handleChange}
                        aria-invalid={!!errors.message}
                    />

                    {errors.message && (
                        <div className="invalid-feedback d-block">
                            {errors.message}
                        </div>
                    )}
                </div>

                {/* PRIVACIDAD */}
                <div className="privacy-note">
                    <p>
                        Al enviar este formulario, acepto los Términos de uso
                        de Biblio-Tec, y he leído y reconozco la Política de
                        privacidad de Biblio-Tec.
                    </p>

                    <p>
                        Biblio-Tec también usará tus datos personales,
                        incluyendo tus comentarios en este formulario,
                        para personalizar tu experiencia, mejorar los
                        análisis de los servicios, productos y otras funciones.
                    </p>
                </div>

                {/* BOTON DE ENVIAR */}
                <button
                    type="submit"
                    className="btn btn-primary form-button"
                >
                    Enviar formulario
                </button>

            </form>

            {/* MENSAJE DE EXITO */}
            {submitted && (
                <div className="success-message" role="status">
                    ¡Tu formulario fue enviado correctamente!
                </div>
            )}

            {/* CAMPOS OBLIGATORIOS */}
            <p className="required-note">
                <span className="obligatorio">*</span>
                Los campos obligatorios deben completarse.
            </p>

        </div>
    );
};