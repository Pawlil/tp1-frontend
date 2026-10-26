import { Carousel, Row, Col, Container, Image, Card } from "react-bootstrap";
import { books } from "../data/books";
import { Cash, Truck } from "react-bootstrap-icons";
import RecsCard from "../components/RecsCard";
import LinkCard from "../components/LinkCard";
import imagenBanner from "../assets/banner.jpg";
import "./Home.css";

const Home = () => {
  const recs= [0,8,1,6,4]
  
  return (
    <div>
      <div className="home-main-sections" id="banner">
        <Card className="text-white">
          <Card.Img src={imagenBanner} alt="Imagen del banner"/>
          <Card.ImgOverlay id="banner-overlay">
            <Card.Text>Bienvenidos a</Card.Text>
            <Card.Title> <h1>Biblio-Tec</h1> </Card.Title>
            <Card.Text> Somos una tienda con más de 20 años de antiguedad. </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>

      <div className="home-main-sections" id="recs-section">
        <h2 className="carousel-header">Destacados y recomendados</h2>  
        <Carousel id="carousel-recs" className="carousel-dark">
          {recs.map((index) => {
            const book = books[index]; 

            return (
              <Carousel.Item key={book.id} className="carousel-recs-item">
                <RecsCard 
                  id={book.id}
                  title={book.title}
                  description={book.description}
                  image={book.image}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>


      <Row id="redirects-section">
        <Col md={4}>
          <LinkCard className="redirects"
            title="Explora nuestro Catálogo"
            direction="productos" 
          />
        </Col>
        <Col>
          <LinkCard className="redirects"
            title="Novedades"
            direction="novedades" 
          />
        </Col>
        <Col>
          <LinkCard className="redirects"
            title="Contactanos"
            direction="contacto" 
          />
        </Col>
      </Row>
      <Container id="info-section">
        <Row>
          <Col className="info">  <Truck size={22} className="icon"/> Envios a todo el pais. </Col>
          <Col className="info"> <Cash size={22} className="icon"/>Pagos en 6 cuotas sin interés.</Col>
        </Row>
      </Container>      
    </div>
  );
};

export default Home;