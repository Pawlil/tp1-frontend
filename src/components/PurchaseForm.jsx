import { useState } from "react";
import { validatePurchaseForm } from "../validators/PurchaseValidators.js";
import "./PurchaseForm.css";

export const PurchaseForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        dni: "",
        email: "",
        phone: "",
        address: "",
        apartment: "",
        city: "",
        province: "",
        postalCode: "",
        shipping: "standard",
        payment: "transfer",
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

        const newErrors = validatePurchaseForm(formData);

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        setSubmitted(true);
    };

    return (
        <div className="purchase-form-container">

            <form onSubmit={handleSubmit} noValidate>

                {/* DATOS PERSONALES */}

                <section className="purchase-section">

                    <div className="purchase-section-heading">
                        <span className="purchase-section-number">01</span>
                        <div>
                            <h3>Datos personales</h3>
                            <p>Información necesaria para identificar tu pedido.</p>
                        </div>
                    </div>

                    <div className="row g-3">

                        {/* NOMBRE */}
                        <div className="col-md-8">
                            <label htmlFor="purchase-name" className="form-label">
                                Nombre y apellido <span className="obligatorio">*</span>
                            </label>

                            <input
                                type="text"
                                id="purchase-name"
                                name="name"
                                placeholder="Ej: Juan Pérez"
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && (<div className="invalid-feedback d-block">{errors.name}</div>)}
                        </div>

                        {/* DNI */}
                        <div className="col-md-4">
                            <label htmlFor="purchase-dni" className="form-label">
                                DNI <span className="obligatorio">*</span>
                            </label>

                            <input
                                type="text"
                                id="purchase-dni"
                                name="dni"
                                placeholder="Ej: 12345678"
                                className={`form-control ${errors.dni ? 'is-invalid' : ''}`}
                                value={formData.dni}
                                onChange={handleChange}
                            />
                            {errors.dni && (<div className="invalid-feedback d-block">{errors.dni}</div>)}
                        </div>

                        {/* EMAIL */}
                        <div className="col-md-6">
                            <label htmlFor="purchase-email" className="form-label">
                                Email <span className="obligatorio">*</span>
                            </label>

                            <input
                                type="email"
                                id="purchase-email"
                                name="email"
                                placeholder="ejemplo@email.com"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && (<div className="invalid-feedback d-block">{errors.email}</div>)}
                        </div>

                        {/* TELEFONO */}
                        <div className="col-md-6">
                            <label htmlFor="purchase-phone" className="form-label">
                                Teléfono <span className="obligatorio">*</span>
                            </label>

                            <input
                                type="tel"
                                id="purchase-phone"
                                name="phone"
                                placeholder="Ej: 1123456789"
                                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && (<div className="invalid-feedback d-block">{errors.phone}</div>)}
                        </div>

                    </div>

                </section>


                {/* DIRECCION DE ENVIO */}

                <section className="purchase-section">

                    <div className="purchase-section-heading">
                        <span className="purchase-section-number">02</span>
                        <div>
                            <h3>Dirección de envío</h3>
                            <p>Indicá dónde querés recibir tu compra.</p>
                        </div>
                    </div>

                    <div className="row g-3">

                        {/* DIRECCION */}
                        <div className="col-md-8">
                            <label htmlFor="purchase-address" className="form-label">
                                Calle y número <span className="obligatorio">*</span>
                            </label>

                            <input
                                type="text"
                                id="purchase-address"
                                name="address"
                                placeholder="Ej: Av. Corrientes 1234"
                                className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                value={formData.address}
                                onChange={handleChange}
                            />
                            {errors.address && (<div className="invalid-feedback d-block">{errors.address}</div>)}
                        </div>

                        {/* DEPARTAMENTO */}
                        <div className="col-md-4">
                            <label htmlFor="purchase-apartment" className="form-label">
                                Piso / Departamento
                            </label>

                            <input
                                type="text"
                                id="purchase-apartment"
                                name="apartment"
                                placeholder="Opcional"
                                className="form-control"
                                value={formData.apartment}
                                onChange={handleChange}
                            />
                        </div>

                        {/* CIUDAD */}
                        <div className="col-md-6">
                            <label htmlFor="purchase-city" className="form-label">
                                Localidad / Ciudad <span className="obligatorio">*</span>
                            </label>

                            <input
                                type="text"
                                id="purchase-city"
                                name="city"
                                placeholder="Ej: Buenos Aires"
                                className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                                value={formData.city}
                                onChange={handleChange}
                            />
                            {errors.city && (<div className="invalid-feedback d-block">{errors.city}</div>)}
                        </div>

                        {/* PROVINCIA */}
                        <div className="col-md-6">
                            <label htmlFor="purchase-province" className="form-label">
                                Provincia <span className="obligatorio">*</span>
                            </label>

                            <select
                                id="purchase-province"
                                name="province"
                                className={`form-select ${errors.province ? 'is-invalid' : ''}`}
                                value={formData.province}
                                onChange={handleChange}
                            >
                                <option value="">Seleccioná una provincia</option>
                                <option value="Buenos Aires">Buenos Aires</option>
                                <option value="CABA">Ciudad Autónoma de Buenos Aires</option>
                                <option value="Catamarca">Catamarca</option>
                                <option value="Chaco">Chaco</option>
                                <option value="Chubut">Chubut</option>
                                <option value="Córdoba">Córdoba</option>
                                <option value="Corrientes">Corrientes</option>
                                <option value="Entre Ríos">Entre Ríos</option>
                                <option value="Formosa">Formosa</option>
                                <option value="Jujuy">Jujuy</option>
                                <option value="La Pampa">La Pampa</option>
                                <option value="La Rioja">La Rioja</option>
                                <option value="Mendoza">Mendoza</option>
                                <option value="Misiones">Misiones</option>
                                <option value="Neuquén">Neuquén</option>
                                <option value="Río Negro">Río Negro</option>
                                <option value="Salta">Salta</option>
                                <option value="San Juan">San Juan</option>
                                <option value="San Luis">San Luis</option>
                                <option value="Santa Cruz">Santa Cruz</option>
                                <option value="Santa Fe">Santa Fe</option>
                                <option value="Santiago del Estero">Santiago del Estero</option>
                                <option value="Tierra del Fuego">Tierra del Fuego</option>
                                <option value="Tucumán">Tucumán</option>
                            </select>
                            {errors.province && (<div className="invalid-feedback d-block">{errors.province}</div>)}
                        </div>

                        {/* CODIGO POSTAL */}
                        <div className="col-md-4">
                            <label htmlFor="purchase-postalCode" className="form-label">
                                Código postal <span className="obligatorio">*</span>
                            </label>

                            <input
                                type="text"
                                id="purchase-postalCode"
                                name="postalCode"
                                placeholder="Ej: 1000"
                                className={`form-control ${errors.postalCode ? 'is-invalid' : ''}`}
                                value={formData.postalCode}
                                onChange={handleChange}
                            />
                            {errors.postalCode && (<div className="invalid-feedback d-block">{errors.postalCode}</div>)}
                        </div>

                    </div>

                </section>

                {/* METODO DE ENVIO */}

                <section className="purchase-section">

                    <div className="purchase-section-heading">
                        <span className="purchase-section-number">03</span>
                        <div>
                            <h3>Método de envío</h3>
                            <p>Elegí cómo recibir tu pedido.</p>
                        </div>
                    </div>

                    <div className="purchase-options">

                        <label className="purchase-option">
                            <input
                                type="radio"
                                name="shipping"
                                value="standard"
                                checked={formData.shipping === "standard"}
                                onChange={handleChange}
                            />

                            <div>
                                <strong>Envío estándar</strong>
                                <p>Entrega a domicilio.</p>
                            </div>
                        </label>

                        <label className="purchase-option">
                            <input
                                type="radio"
                                name="shipping"
                                value="express"
                                checked={formData.shipping === "express"}
                                onChange={handleChange}
                            />

                            <div>
                                <strong>Envío express</strong>
                                <p>Entrega prioritaria.</p>
                            </div>
                        </label>

                        <label className="purchase-option">
                            <input
                                type="radio"
                                name="shipping"
                                value="pickup"
                                checked={formData.shipping === "pickup"}
                                onChange={handleChange}
                            />

                            <div>
                                <strong>Retiro en sucursal</strong>
                                <p>Retirá tu pedido personalmente.</p>
                            </div>
                        </label>

                    </div>
                    {errors.shipping && (<div className="text-danger small mt-2">{errors.shipping}</div>)}

                </section>

                {/* METODO DE PAGO */}

                <section className="purchase-section">

                    <div className="purchase-section-heading">
                        <span className="purchase-section-number">04</span>
                        <div>
                            <h3>Método de pago</h3>
                            <p>Seleccioná cómo querés abonar tu compra.</p>
                        </div>
                    </div>

                    <div className="purchase-options">

                        <label className="purchase-option">
                            <input
                                type="radio"
                                name="payment"
                                value="transfer"
                                checked={formData.payment === "transfer"}
                                onChange={handleChange}
                            />

                            <div>
                                <strong>Transferencia bancaria</strong>
                                <p>Pago mediante transferencia.</p>
                            </div>
                        </label>

                        <label className="purchase-option">
                            <input
                                type="radio"
                                name="payment"
                                value="card"
                                checked={formData.payment === "card"}
                                onChange={handleChange}
                            />

                            <div>
                                <strong>Tarjeta de crédito / débito</strong>
                                <p>Pago con tarjeta.</p>
                            </div>
                        </label>
                    </div>
                    {errors.payment && (<div className="text-danger small mt-2">{errors.payment}</div>)}

                </section>


                {/* COMENTARIOS */}

                <section className="purchase-section">

                    <div className="purchase-section-heading">
                        <span className="purchase-section-number">05</span>
                        <div>
                            <h3>Información adicional</h3>
                            <p>¿Querés dejarnos alguna indicación?</p>
                        </div>
                    </div>

                    <label htmlFor="purchase-message" className="form-label">
                        Comentarios (opcional)
                    </label>

                    <textarea
                        id="purchase-message"
                        name="message"
                        rows="4"
                        placeholder="Escribí aquí algún comentario sobre tu pedido..."
                        className={`form-control purchase-textarea ${errors.message ? 'is-invalid' : ''}`}
                        value={formData.message}
                        onChange={handleChange}
                    />
                    {errors.message && (<div className="invalid-feedback d-block">{errors.message}</div>)}

                </section>


                {/* BOTON DE CONFIRMACION */}

                <div className="purchase-submit-container">

                    <button
                        type="submit"
                        className="btn btn-primary purchase-submit-button"
                    >
                        Confirmar compra
                    </button>

                    <p>
                        <span className="obligatorio">*</span>
                        Los campos obligatorios deberán completarse.
                    </p>

                </div>

            </form>

            {/* MENSAJE DE EXITO */}

            {submitted && (
                <div className="purchase-success" role="status">
                    ¡Tu formulario de compra fue enviado correctamente!

                    <p>
                        Esta es una confirmación de prueba. No se realizó
                        ningún cobro ni se generó un pedido real.
                    </p>
                </div>
            )}

        </div>
    );
};
