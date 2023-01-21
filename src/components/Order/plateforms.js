import React from "react";
import { Col, Row } from "react-bootstrap";
import './style.css';
const PlateForms = () => {
  return (
    <Row className="tech-stack-section">
      <Col xs={4} md={2} className="tech-icons-dup">
        <img src="/images/upwork.svg" alt="Card image cap" width="100" color="red" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="/images/fiverr-1.svg" alt="Card image cap" width="100" color="red" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="/images/whatsapp.svg" alt="Card image cap" width="100" color="red" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="/images/gmail.svg" alt="Card image cap" width="100" color="red" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="/images/messenger.png" alt="Card image cap" width="100" color="red" />
      </Col>
    </Row>
  )
}

export default PlateForms;
