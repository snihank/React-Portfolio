import React, { Component } from "react";
import { Tab, Row, Col, ListGroup, Badge } from "react-bootstrap";
import Trilogy from "../components/Trilogy";
import Swissport from "../components/Swissport";
import Unhcr from "../components/Unhcr";
import Acme from "../components/Acme";
import WOW from "wowjs";





class EducExp extends Component {

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

            <div className="wow slideInUp" data-wow-duration="2s">

                <div>
                    <hr></hr>
                    <br></br>
                    <h1><Badge variant="dark">Education | Training</Badge></h1>


                    <h6>Columbia Engineering Coding Certificate (2019)</h6>
                    Columbia University, New York, NY, USA

<br></br>
                    <br></br>



                    <h6> Graduate Certificate in Business (2016)</h6>
                    University of Western Sydney, Sydney, Australia

        <br></br>
                    <br></br>


                    <h6> Bachelors in Business Administration (2008)</h6>
                    North South University, Dhaka, Bangladesh

                <br></br>
                    <br></br>

                    <hr></hr>

                </div>

                <div>
                    <br></br>
                    <h1><Badge variant="dark">Experience</Badge> </h1>


                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1" >
                        <Row>
                            <Col sm={4}>
                                <ListGroup style={{ marginLeft: "20px", marginRight: "20px" }}>
                                    <ListGroup.Item action href="#link1">
                                        Please click each item below and scroll down to view details
        </ListGroup.Item>
                                    <ListGroup.Item action href="#link2">
                                        Trilogy Education Services
        </ListGroup.Item>
                                    <ListGroup.Item action href="#link3">
                                        Swissport
        </ListGroup.Item>
                                    <ListGroup.Item action href="#link4">
                                        United Nations High Commission for Refugees
        </ListGroup.Item>
                                    <ListGroup.Item action href="#link5">
                                        The ACME Agrovet & Beverages Ltd
        </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content style={{ marginLeft: "20px", marginRight: "20px", marginTop: "20px" }}>

                                    <Tab.Pane eventKey="#link2">
                                        <Trilogy />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link3">
                                        <Swissport />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link4">
                                        <Unhcr />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link5">
                                        <Acme />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>

                    <br></br>
                    <hr></hr>






                </div>



            </div>

        );
    }
}

export default EducExp;