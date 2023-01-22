import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar d-lg-block d-none">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 className="title-section">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a professional freelancer offering real estate services including
              <b className="purple"> skip
                tracing, lead generation, and cold calling, </b>
              for U.S market
              <br />
              We have vast
              experience in this industry and hope that we'll be able to cater your
              needs. I have all relative tools and access for real estate projects. My
              ultimate goal is to serve my clients with accurate and updated Real
              Estates leads. Thank you!!

            </p>
          </Col>
          <Col md={4} className="myAvtar d-xl-none">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
