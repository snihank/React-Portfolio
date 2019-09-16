import React, { Component } from "react";
import { Button, Collapse, Table } from "react-bootstrap";


class Testing extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };
    }

    render() {

        const { open } = this.state;

        return (




            <div style={{ marginBottom: "5px" }}>



                <Button
                    size="lg"
                    block
                    variant="dark"
                    onClick={() => this.setState({ open: !open })}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    Testing
        </Button>
                <Collapse in={this.state.open}>
                    <div id="example-collapse-text">
                        <Table striped bordered hover variant="dark" responsive>
                            <tbody>

                                <tr>
                                    <th>Unit Testing</th>
                                </tr>

                                <tr>
                                    <th>Regression Testing</th>
                                </tr>

                                <tr>
                                    <th>Mocha</th>
                                </tr>

                                <tr>
                                    <th>Chai</th>
                                </tr>

                                <tr>
                                    <th>Postman</th>
                                </tr>

                                <tr>
                                    <th>Selenium Webdriver</th>
                                </tr>
                                <tr>
                                    <th>Appium</th>
                                </tr>
                                <tr>
                                    <th>Cucumber</th>
                                </tr>
                                <tr>
                                    <th>JUnit</th>
                                </tr>
                                <tr>
                                    <th>Mockito</th>
                                </tr>
                            </tbody>
                        </Table>

                    </div>
                </Collapse>

            </div>
        )

    }
}

export default Testing;