import React, { Component } from "react";
import { Button, Collapse, Table } from "react-bootstrap";


class FrontEnd extends Component {

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
                    Front End
        </Button>
                <Collapse in={this.state.open}>
                    <div id="example-collapse-text" >


                        <Table striped bordered hover variant="dark" responsive>
                            <tbody>

                                <tr>
                                    <th>CSS 3</th>
                                </tr>

                                <tr>
                                    <th>Bootstrap 4</th>
                                </tr>

                                <tr>
                                    <th>React</th>
                                </tr>

                                <tr>
                                    <th>Redux</th>
                                </tr>

                                <tr>
                                    <th>Handlebars</th>
                                </tr>


                                <tr>
                                    <th>jQuery</th>
                                </tr>
                                <tr>
                                    <th>AJAX</th>
                                </tr>
                                <tr>
                                    <th>React-Bootstrap</th>
                                </tr>
                                <tr>
                                    <th>Styled Components</th>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Collapse>

            </div>
        )

    }
}

export default FrontEnd;