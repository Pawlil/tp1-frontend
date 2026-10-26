import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function LinkCard({ title, direction }){
    return(
        <Card as={Link} to={`/${direction}`} className="text-center">
            <Card.Body>
                <Card.Title className="">{title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default LinkCard;