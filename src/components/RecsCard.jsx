import {Card, Row, Col, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./recsCard.css";

function RecsCard({id, title, description, image}) {
    return (
       <Card className= "recs-card">
            <Row className="align-items-center">
                <Col md={4}>
                    <Card.Img id="cardimg"
                        src={image}
                        alt={title}
                        className="rounded"
                    />
                </Col>
                <Col md={7}>
                <Card.Body>
                    <Card.Title className="fw-bold">{title}</Card.Title>
                    <Card.Text className="text-muted">
                    {description}
                    </Card.Text>
                        <Button as={Link} to={`/producto/${id}`} id="recsCard-button">
                        Ver más
                        </Button> 
                </Card.Body>
                </Col>
            </Row>
       </Card> 
    )
}

export default RecsCard;