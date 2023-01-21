import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import OrderPage from '../Order/order'
import About from '../About/About'
import Contact from '../Contact/contact'
import Reviews from '../Reviews/Reviews'
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div className="heading"> SKIP TRACING AGENCY </div>
              <div className="heading-name">
                Accurate Realestate Services.
              </div>
              <div>
              We assist our clients in achieving their goals by providing them with the most up-to-date real estate leads and accurate data. 
              We understand the critical importance of quality and accuracy in the real estate industry and strive to ensure that our clients 
              have the information they need to make informed decisions. Our team of experts is dedicated to staying current with the latest 
              trends and developments in the real estate market, so that we can provide our clients with the most relevant and valuable leads. 
              We are committed to helping our clients succeed by providing them with the best possible service and support. 
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Reviews />
      <About isHome={true} />
      <OrderPage isHome={true}/>
      <Contact />
    </section>
  );
}

export default Home;
