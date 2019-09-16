import React, { Component } from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import jumboImage from "../images/15.jpg";
import projects from "../projects.json";
import WOW from "wowjs";



var jumbo = {
    backgroundImage: `url(${jumboImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: "290px",
    width: "100%",
    fontSize: "80px"
}

var text = {

    backgroundColor: "rgba(0,0,0, 0.4)",
    color: "#FFECB3",
    fontWeight: "bold",
    border: "1px solid #FFECB3",
    position: "absolute",
    top: "25%",
    left: "9%",
    width: "80%",
    padding: "20px",
    textAlign: "center",

}


class Projects extends Component {

    state = {
        projects
    };

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
                <Jumbotron style={jumbo}>
                    <div style={text} className="bg-text wow flip" data-wow-duration="3s">
                        <h1 >Projects</h1>
                    </div>


                </Jumbotron>

                <div className="container-fluid wow slideInDown">

                    <Row>
                        {this.state.projects.map(project => (

                            <Col xs={12} sm={6} md={6} xl={3}>

                                <ProjectCard
                                    id={project.id}
                                    key={project.id}
                                    title={project.title}
                                    description={project.description}
                                    tools={project.tools}
                                    link={project.link}
                                    code={project.code}

                                />

                            </Col>

                        ))}


                    </Row>

                </div>

            </div >

        )
    }

}

export default Projects;