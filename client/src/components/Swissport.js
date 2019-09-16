import React, { Component } from "react";
import { Card } from "react-bootstrap";
import WOW from "wowjs";


class Swissport extends Component {

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
                    <Card.Header>Swissport USA Inc</Card.Header>
                    <Card.Body>
                        <Card.Title>
                            <h5>Passenger Service Agent</h5>
                            <h6>Kuwait Airways</h6>
                            <h6>JFK Airport, NY, USA</h6>
                        </Card.Title>
                        <Card.Text>
                            <p>Performed user acceptance and black box testing on airline softwares before release.</p>
                            <p>Assisted passengers with check-in, boarding, and app support, ensuring client satisfaction.</p>
                            <p>Worked with an internal database system to track and solve clients’ requests and queries.</p>
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className="text-muted"> May 2017 - January 2019</Card.Footer>
                </Card>

            </div >

        );
    }
}

export default Swissport;