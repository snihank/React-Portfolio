import React, { Component } from "react";
import { Button, Collapse, Table } from "react-bootstrap";


class ProjMgt extends Component {

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
                    Project Management
        </Button>
                <Collapse in={this.state.open}>
                    <div id="example-collapse-text">
                        <Table striped bordered hover variant="dark" responsive>
                            <tbody>

                                <tr>
                                    <th>SDLC</th>
                                </tr>

                                <tr>
                                    <th>Pivotal Tracker</th>
                                </tr>

                                <tr>
                                    <th>Agile</th>
                                </tr>

                                <tr>
                                    <th>SCRUM</th>
                                </tr>

                                <tr>
                                    <th>JIRA</th>
                                </tr>

                                <tr>
                                    <th>Trello</th>
                                </tr>

                                <tr>
                                    <th>Coggle</th>
                                </tr>

                            </tbody>
                        </Table>


                    </div>
                </Collapse>

            </div>
        )

    }
}

export default ProjMgt;