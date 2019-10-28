import React, { Component } from "react";
import { Jumbotron, Badge, Row, Col, Image } from "react-bootstrap";
import Skills from "../components/Skills";
import Contacts from "../components/Contacts";
import imageOne from "../images/8.jpg";
import im1 from "../images/3.jpg";

import WOW from "wowjs";


var styles = {

    backgroundImage: `url(${imageOne})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    color: "#F5FFFA",

}

var boxStyles = {
    marginBottom: '30px',
    padding: 0,
    textAlign: 'justify'


}


class Home extends Component {

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

                <Jumbotron className="wow fadeIn" style={styles}>
                    <h3 style={{ color: "#FAFAD2", fontSize: "60px" }}>Building things, </h3>

                    <h6 style={{ fontSize: "30px" }}> is what keeps me going</h6>
                    <Contacts className="wow slideInDown" data-wow-delay="3s" />
                </Jumbotron>


                <br></br>
                <hr></hr>
                <br></br>

                <div className="container-fluid wow fadeInUp">
                    <h1 className="wow zoomIn" data-wow-delay="2s"><Badge variant="dark">About Myself</Badge></h1>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <div style={boxStyles}>
                                <Image src={im1} width={150} height={150} roundedCircle style={{ marginTop: "10px", marginRight: '5px', marginLeft: '5px', float: 'left' }} />
                                <p>
                                
                                    I am passionate about building, testing, deploying sophisticated user-friendly web and mobile applications.
                                    My expertise is, but not limited to, Full Stack Javascript development with React, Mongo, Express and Node.
                                    I am highly adaptive to ever-changing technologies. In addition, I have recently equipped myself
                                    with backend Java and MicroServices, using Spring Boot, JdbcTemplate, JPA, Hibernate, Spring Cloud, Spring Security etc. With lifelong dedication to learning,
                                     I prioritize quality work under strict deadlines, and successfully collaborate with management and peers.
    </p>
                                
                           
                                <p>
                                Currently I am working as a Teaching Assistant in Full Stack Coding Bootcamp in UCONN School of Engineering, University of Connecticut. I am helping students
                                    with pair programming, code debugging, checking and providing assignments feedback, explaining concepts and code, and other course and curriculum related activities. 
                            
                                    I come from product development and brand marketing background. I have gained substantial and real life experience in project management,
                                    launching few successful products while I served The ACME Agrovet & Beverges Ltd, in Dhaka, Bangladesh. 
                                    Besides, I am also adept in customer management, a very important skill that I have learned when working in UNHCR and Unicef, in Sydney, Australia. 
                                    In USA, I have worked as a Passenger Service Agent in Swissport, JFK Airport, New York, when I was assigned to Kuwait Airways.
                                    Transitioning into the development world, I strive to learn different sectors in technology with sheer discipline and hard work.

                </p>
                            </div>
                        </Col>

                    </Row>
                </div>

                <br></br>
                <hr></hr>
                <br></br>



                <Skills />

            </div >
        )
    }

}

export default Home;