import React, { Component } from "react";
import { Card } from "react-bootstrap";
import WOW from "wowjs";


class Trilogy extends Component {

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

            <div className="wow slideInUp">

                <Card className="text-center">
                    <Card.Header>Trilogy Education Services</Card.Header>
                    <Card.Body>
                        <Card.Title>
                            <h5>Teaching Assistant</h5>
                            <h6>UCONN School of Engineering</h6>
                            <h6>University of Connecticut, Stamford, Connecticut</h6>
                        </Card.Title>
                        <Card.Text>
                            <p>Educating students and supporting them with curriculum and course materials in an intensive, 6-month coding bootcamp with over 250+ hours of in-class teaching. </p>
                            <p>Mentoring students, with pair programming, debugging their code, checking their assignments and providing feedback across full stack Javascript MERN development.</p>
                            <p>JavaScript (including ES6), HTML5, CSS3, Bootstrap, Responsive design, jQuery, AJAX, Node.js and NPM </p>
                            <p>MongoDB, MySQL, React, Git, GitHub and Gitlab, Heroku, Express, JAVA, Firebase, Sequelize, Mongoose and more </p>
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className="text-muted"> July 2019 - Present</Card.Footer>
                </Card>

            </div >

        );
    }
}

export default Trilogy;