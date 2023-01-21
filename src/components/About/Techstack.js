import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { AiFillHome, AiFillSignal, AiFillFileExcel, AiOutlineFileSearch } from "react-icons/ai";


function Techstack() {
  return (
    <Row className="tech-stack-section">
      <Col xs={4} md={2} className="tech-icons">
        <BsFillTelephoneForwardFill />
        <div className="tech-icon-des">Cold Calling</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHome />
        <div className="tech-icon-des">Skip Tracing</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillSignal />
        <div className="tech-icon-des">Lead Generation</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillFileExcel />
        <div className="tech-icon-des">File Conversion</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineFileSearch />
        <div className="tech-icon-des">Web Research</div>
      </Col>
    </Row>
  );
}

export default Techstack;
