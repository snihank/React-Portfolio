import React, { Component } from "react";
import { Button, Collapse, Table } from "react-bootstrap";


class Languages extends Component {

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
                    Languages
        </Button>
                <Collapse in={this.state.open}>
                    <div id="example-collapse-text">

                        <Table striped bordered hover variant="dark" responsive>
                            <tbody>

                                <tr>
                                    <th>Javascript</th>
                                </tr>

                                <tr>
                                    <th>Java</th>
                                </tr>

                                <tr>
                                    <th>HTML 5</th>
                                </tr>

                                <tr>
                                    <th>SQL</th>
                                </tr>

                                <tr>
                                    <th>NoSQL</th>
                                </tr>

                                <tr>
                                    <th>Unix/Linux Command Line</th>
                                </tr>
                            </tbody>
                        </Table>


                    </div>
                </Collapse>

            </div>
        )

    }
}

export default Languages;