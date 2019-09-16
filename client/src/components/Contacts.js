import React, { Component } from "react";
import { Table, Button, Collapse } from "react-bootstrap";
import WOW from "wowjs";


class Contacts extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };
    }

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
        const { open } = this.state;
        return (
            <>
                <Button
                    active
                    variant="primary"
                    className="wow bounceIn" data-wow-delay="3s"
                    style={{ marginBottom: "20px" }}
                    onClick={() => this.setState({ open: !open })}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    Let's Connect
            </Button>
                <Collapse in={this.state.open}>
                    <div className="container" >
                        <Table hover variant="dark" style={{ backgroundColor: "rgba(0,0,0, 0.4)" }} >
                            <thead >
                                <tr>

                                    <th><i className="fas fa-mobile-alt"></i></th>
                                    <th><a href="tel:347-279-2504" style={{ color: "white" }}>347-279-2504</a></th>

                                </tr>

                                <tr>

                                    <th><i class="fa fa-envelope"></i></th>
                                    <th><a href="mailto:shakibnihan786@gmail.com" style={{ color: "white" }}>shakibnihan786@gmail.com</a></th>

                                </tr>

                                <tr>

                                    <th><i class="fab fa-github"></i></th>
                                    <th><a href="https://github.com/snihank" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>Github</a></th>

                                </tr>

                                <tr>

                                    <th><i class="fab fa-linkedin"></i></th>
                                    <th><a href="https://www.linkedin.com/in/shakib-nihan-karim-7715b297" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>LinkedIn</a>
                                    </th>

                                </tr>
                            </thead>
                        </Table>
                    </div>
                </Collapse>
            </>
        );
    }
}









export default Contacts;