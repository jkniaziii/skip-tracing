import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
       <div>Tloxp</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>BeenVerified</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>LexisNexis</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <div>PropStream</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>Intelius</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
