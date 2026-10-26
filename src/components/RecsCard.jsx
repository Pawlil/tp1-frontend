import {Card, Row, Col, Button} from "react-bootstrap";

function RecsCard({id, title, description, image}) {
    return (
       <Card className= "mb-3 border-0 shadow-none p-3">
            <Row className="align-items-center">
                <Col md={4}>
                    <Card.Img 
                        src={image}
                        alt={title}
                        className="rounded"
                        style={{ objectFit: 'contain', height:'400px', width: '100%'}}
                    />
                </Col>
                <Col md={7}>
                <Card.Body>
                    <Card.Title className="fw-bold">{title}</Card.Title>
                    <Card.Text className="text-muted">
                    {description}
                    </Card.Text>
                    {/* no tengo pulleado el product details asi que lo dejo aca asi :#
                        <Button as={Link} to={`/productDetails/${id}`}>
                        Ver más
                        </Button> 
                    */}
                </Card.Body>
                </Col>
            </Row>
       </Card> 
    )
}

export default RecsCard;