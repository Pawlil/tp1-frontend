import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./linkCard.css"

function LinkCard({ title, direction }){
    return(
        <Card as={Link} to={`/${direction}`} className="link-card">
            <Card.Body>
                <Card.Title className="">{title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default LinkCard;