import React, { Component } from "react";
import { Card } from "react-bootstrap";
import WOW from "wowjs";


class Unhcr extends Component {

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
                    <Card.Header>United Nations High Commission for Refugees</Card.Header>
                    <Card.Body>
                        <Card.Title>
                            <h5>Senior Frontliner</h5>
                            <h6>Face to Face Team</h6>
                            <h6>New South Wales, Australia</h6>
                        </Card.Title>
                        <Card.Text>
                            <p>Successfully collaborated with a team to implement a tracking and online sign-up software.</p>
                            <p>Led fundraising teams raising roughly $8000 for refugees worldwide.</p>
                            <p>Tested and checked new software creating donor account and storing donor information.</p>
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className="text-muted"> July 2015 – April 2016</Card.Footer>
                </Card>

            </div>

        );
    }
}

export default Unhcr;