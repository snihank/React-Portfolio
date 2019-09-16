import React, { Component } from "react";
import { Button, Collapse, Table } from "react-bootstrap";


class Database extends Component {

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
                    Database
        </Button>
                <Collapse in={this.state.open}>
                    <div id="example-collapse-text" >

                        <Table striped bordered hover variant="dark" responsive>
                            <tbody>

                                <tr>
                                    <th>MySQL</th>
                                </tr>

                                <tr>
                                    <th>MongoDB</th>
                                </tr>

                                <tr>
                                    <th>Oracle Application Express</th>
                                </tr>

                                <tr>
                                    <th>Postgres</th>
                                </tr>

                                <tr>
                                    <th>Google Firebase</th>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                </Collapse>

            </div>
        )

    }
}

export default Database;