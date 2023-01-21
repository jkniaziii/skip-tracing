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
    <Row className="tech-stack-section">
      <Col xs={4} md={2} className="tech-icons">
        <div className="stack-title">Tloxp</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="stack-title">BeenVerified</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="stack-title">LexisNexis</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="stack-title">PropStream</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="stack-title">Intelius</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
