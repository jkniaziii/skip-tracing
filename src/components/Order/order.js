import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import PlateForms from "./plateforms";

const OrderPage = ({isHome}) => {
  return (
    <Container fluid className="order-section">
      <Particle />
      <Container style={{marginTop: !isHome && 100}}>
       <h1 className="project-heading">
          Order <strong className="purple">Now</strong>
        </h1>
        <PlateForms />
      </Container>
    </Container>
  )
}

export default OrderPage;
