import "../css/Single-category.css"
import img1 from "../assets/slide-image-1.jpg"
import { Button, Card } from "react-bootstrap";
export  const SingleCategory = (props)=>{
    const category = props.category ;
    // console.log(props.category);
    
    return(
        <>
            {/* <div class="card">
                <div className="d-flex">
                    <div className="card-image">
                        <img class="card-image" src={category.image} alt="Title" />
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">{category.name}</h4>
                        <p class="card-text">category one</p>
                        <p class="card-text">category two</p>
                        <p class="card-text">category three</p>
                        <p class="card-text">category four</p>
                    </div>
                </div>
            </div> */}
            <Card className="card custom-card">
                {/* <Card.Img variant="top" className="card-image" src={category.image} /> */}
                <Card.Body>
                    <Card.Title className="text-center">{category.name}</Card.Title>
                   {/*  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </>
    )

}