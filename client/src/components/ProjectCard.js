import React from "react";
import { Card, Button } from "react-bootstrap";



var cardStyle = {
    height: '400px',
    marginTop: '20px',
    marginLeft: '10px',
    marginRight: '10px',
    marginBottom: '20px',
    alignContent: "justified",
    background: 'linear-gradient(top, #E5C590, 0%, #90600F , 100%)'

}


function ProjectCard(props) {

    return (

        <div>

            <Card className="text-center" border="dark" style={cardStyle}>
                <Card.Header>


                    <strong>{props.title}</strong>


                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p>{props.description}</p>
                        <br></br>
                        <p>
                            <u>Tools Used:</u> {props.tools}</p>
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">
                    <Button variant="outline-dark" size="md" style={{ marginRight: "20px" }}><a href={props.link} target="_blank" rel="noopener noreferrer">Go Live</a></Button>

                    <Button variant="dark"><a href={props.code} target="_blank" rel="noopener noreferrer">Code</a></Button>
                </Card.Footer>
            </Card>

        </div>

    );
}



export default ProjectCard;