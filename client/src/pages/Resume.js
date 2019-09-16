import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import WOW from "wowjs";
import EducExp from "../components/EducExp";
import resume from "../images/Shakib_Resume.pdf";
import imageOne from "../images/14.jpg";

var styles = {

    backgroundImage: `url(${imageOne})`,
    backgroundSize: 'cover',
    height: "200px",
    width: "100%",
    fontSize: "80px",


}

var text = {

    backgroundColor: "rgba(0,0,0, 0.4)",
    color: "white",
    fontWeight: "bold",
    border: "1px solid white",
    position: "absolute",
    top: "15%",
    left: "9%",
    width: "80%",
    padding: "20px",
    textAlign: "center",

}



class Resume extends Component {

    componentDidMount() {
        const wow = new WOW.WOW(
            {
                boxClass: 'wow',      // default
                animateClass: 'animated', // default
                offset: 0,          // default
                mobile: true,       // default
                live: true        // default
            }
        );
        wow.init();
    }

    render() {
        return (
            <div>

                <Jumbotron style={styles}>

                    <div style={text} className="bg-text">
                        <h1>Resume</h1>

                    </div>






                </Jumbotron>

                <Button className="wow fadeIn" data-wow-delay="3s" variant="dark" style={{ marginBottom: "20px" }}><a href={resume} target="_blank" rel="noopener noreferrer">Download Resume</a></Button>


                <EducExp />




            </div>
        )
    }

}

export default Resume;