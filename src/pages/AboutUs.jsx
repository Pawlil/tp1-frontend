import { Container, Row, Col, Card } from "react-bootstrap";
import libreriaimagen from "../assets/libreriaimagen.jpg";
import imagenestanteria from "../assets/imagenestanteria.jpg";
import "./AboutUs.css"

const About = () => {
	return(
<Container className="about-container my-5">
      <Row className="mb-4">
        <Col>
          <h2 id="title">Nosotros</h2>
        </Col>
      </Row>       
      <Card className="about-card border-0 mb-4">
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            <Card.Img 
              className="cardimg rounded-circle"
              src={libreriaimagen}
              alt="imagen de la libreria"
            />
          </Col>
          <Col md={7}>
            <Card.Body className="about-body">
              <Card.Text className="about-text">
                Nacimos como un mini rincón para amantes de la lectura que buscaran recomendaciones reales y un refugio entre historias.
							</Card.Text>
							<Card.Text className="about-text">
								 Queremos conectar a cada lector con el libro indicado en el momento exacto.
              </Card.Text>
					 </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="about-card border-0">
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            <Card.Img 
              className="cardimg rounded-circle"
              src={imagenestanteria}
              alt="imagen de una seccion de la libreria"
            />
          </Col>
          <Col md={7}>
            <Card.Body className="about-body">
              <Card.Text className="about-text">
                Libros seleccionados a mano por lectores apasionados como vos. Tenemos un gran cuidado en el empaquetado para que los libros lleguen impecables.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card> 
    </Container>
  );
};

export default About;