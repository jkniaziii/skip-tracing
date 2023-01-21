import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">YOUR NAME </span>
            from <span className="purple"> Bahawalpur, Pakistan.</span>
            <br />I'm a professional freelancer offering real estate services including skip
            tracing, lead generation, and cold calling, for U.S market.
            <br />
            <br />
          </p>
          <footer className="blockquote-footer">yourName</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
