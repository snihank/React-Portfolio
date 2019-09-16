import React, { Component } from "react";
import { Card } from "react-bootstrap";
import WOW from "wowjs";


class Acme extends Component {

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

            <div className="wow zoomIn">

                <Card className="text-center">
                    <Card.Header>The ACME Agrovet & Beverages Ltd</Card.Header>
                    <Card.Body>
                        <Card.Title>
                            <h5>Brand Team Lead</h5>
                            <h6>Brand | Marketing</h6>
                            <h6>Dhaka, Bangladesh</h6>
                        </Card.Title>
                        <Card.Text>
                            <p>Part of the cross-functional team to work on improving internal operational workflow;
                additionally worked with a huge amount of sales data to track sales figures and analyze them.</p>
                            <p> Effectively collaborated with Sales, Finance, Factory, HR and Supply Chain to manage profitability in existing and up-coming brands maintaining a substantial growth in overall ROI.</p>
                            <p>Successfully launched new products and improved sales of existing products.</p>
                            <p>Proficiently planned and contributed to building websites to reach international markets.</p>
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className="text-muted">April 2008 – June 2015</Card.Footer>
                </Card>

            </div >

        );
    }
}

export default Acme;