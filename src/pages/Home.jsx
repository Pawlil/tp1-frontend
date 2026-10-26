import { Carousel, Row, Col, Container, Image, Card } from "react-bootstrap";
import { books } from "../data/books";
import RecsCard from "../components/RecsCard";
import LinkCard from "../components/LinkCard";
/*import imagenCatalogo from "../assets/fondoCatalogo.jpg";*/
import imagenBanner from "../assets/banner.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-main-sections" id="banner">
        <Card className="text-white">
          <Card.Img src={imagenBanner} alt="Imagen del banner"/>
          <Card.ImgOverlay className="banner-overlay">
            <Card.Title><h1>Bienvenidos a Biblio-Tec</h1></Card.Title>
            <Card.Text>
              Somos una tienda con más de 20 años de antiguedad.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>

      <div className="home-main-sections">
        <h2 className="carousel-header">Recomendaciones</h2>
        <p className="carousel-header">Los libros más populares de este último mes.</p>
       <Carousel id="carousel-recs" className="carousel-dark">
          <Carousel.Item className="carousel-recs-item">
            <RecsCard 
              id={books[0].id}
              title={books[0].title}
              description={books[0].description}
              image={books[0].image}
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-recs-item">
            <RecsCard 
              id={books[8].id}
              title={books[8].title}
              description={books[8].description}
              image={books[8].image}
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-recs-item">
            <RecsCard 
              id={books[1].id}
              title={books[1].title}
              description={books[1].description}
              image={books[1].image}
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-recs-item">
            <RecsCard 
              id={books[6].id}
              title={books[6].title}
              description={books[6].description}
              image={books[6].image}
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="home-main-sections">
        <LinkCard className="redirects"
          title="Explora nuestro Catálogo"
          direction="productos" 
        />
        <LinkCard className="redirects"
          title="Novedades"
          direction="novedades" 
        />
        <LinkCard className="redirects"
          title="Contactanos"
          direction="contacto" 
        />
      </div>

      <div>
        <p>seccion de acerca de envios~ Queda para hacer, facilito</p>
      </div>
    </div>
  );
};

export default Home;