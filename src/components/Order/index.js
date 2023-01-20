import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import PlateForms from "./plateforms";

const OrderPage = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>       
           <PlateForms /> 
      </Container>
    </Container>
  )
}

export default OrderPage;
