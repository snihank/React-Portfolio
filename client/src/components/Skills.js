import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import Languages from "./Languages";
import FrontEnd from "./FrontEnd";
import Backend from "./Backend";
import Database from "./Database";
import Orm from "./Orm";
import Testing from "./Testing";
import VersionControl from "./VersionControl";
import ProjMgt from "./ProjMgt";
import Deployment from "./Deployment";


class Skills extends Component {

    render() {

        return (

            <div>

                <h1 className="wow zoomIn" data-wow-delay="2s"><Badge variant="dark">Skills</Badge></h1>
                <br></br>

                <div className="container-fluid wow fadeInUp">
                    <Languages />
                    <FrontEnd />
                    <Backend />
                    <Database />
                    <Orm />
                    <Testing />
                    <VersionControl />
                    <ProjMgt />
                    <Deployment />
                </div>

                <hr></hr>

            </div>

        );
    }
}

export default Skills;