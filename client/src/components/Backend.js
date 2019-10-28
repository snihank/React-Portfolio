import React, { Component } from "react";
import { Button, Collapse, Table } from "react-bootstrap";


class Backend extends Component {

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
                    Backend
        </Button>
                <Collapse in={this.state.open}>
                    <div id="example-collapse-text">
                        <Table striped bordered hover variant="dark" responsive>
                            <tbody>

                                <tr>
                                    <th>Node | npm | Express | Cheerio | BodyParser | Axios </th>
                                </tr>

                                <tr>
                                    <th>Spring MVC | Spring Boot | JDBCTemplate | JPA | Spring Cloud | Microservices | Spring Security | OAuth 2</th>
                                </tr>

                            </tbody>
                        </Table>

                    </div>
                </Collapse>

            </div>
        )

    }
}

export default Backend;