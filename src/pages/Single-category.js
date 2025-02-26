import "../css/Single-category.css"
import { Card } from "react-bootstrap";
export  const SingleCategory = (props)=>{
    const category = props.category ;
    
    return(
        <>
            <Card className="card custom-card">
                <Card.Body>
                    <Card.Title className="text-center">{category.name}</Card.Title>
                </Card.Body>
            </Card>
        </>
    )

}