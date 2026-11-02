import { PurchaseForm } from '../components/PurchaseForm';
import './Purchase.css';

const Purchase = () => {
    return (
        <div className="purchase-page">

            {/* HEADER */}
            <div className="purchase-header">
                <p className="purchase-eyebrown">BIBLIO-TEC / CHECKOUT</p>

                <h1>Finalizá tu compra</h1>

                <p>
                    Ya falta poco. Completá tus datos y seleccioná
                    las opciones de envío y pago para realizar tu pedido.
                </p>
            </div>

            {/* CONTENIDO */}
            <div className="row g-4">

                {/* FORMULARIO */}
                <div className="col-lg-8">
                    <PurchaseForm />
                </div>

                {/* SIDEBAR */}
                <div className="col-lg-4">
                    <aside className="purchase-sidebar">

                        <h3>Antes de finalizar</h3>

                        <p>
                            Revisá que tus datos sean correctos para
                            evitar inconvenientes con la entrega.
                        </p>

                        <div className="purchase-info-item">
                            <span className="purchase-info-number">01</span>
                            <div>
                                <h6>Datos personales</h6>
                                <p>Completá tu información de contacto.</p>
                            </div>
                        </div>

                        <div className="purchase-info-item">
                            <span className="purchase-info-number">02</span>
                            <div>
                                <h6>Envío</h6>
                                <p>Indicá dónde querés recibir tu pedido.</p>
                            </div>
                        </div>

                        <div className="purchase-info-item">
                            <span className="purchase-info-number">03</span>
                            <div>
                                <h6>Pago</h6>
                                <p>Seleccioná el método de pago.</p>
                            </div>
                        </div>

                        <div className="purchase-sidebar-note">
                            <strong>¡Gracias por elegir BIBLIO-TEC!</strong>
                            <p>
                                Esperamos que disfrutes de tu próxima lectura.
                            </p>
                        </div>

                    </aside>
                </div>

            </div>
        </div>
    );
};

export default Purchase;