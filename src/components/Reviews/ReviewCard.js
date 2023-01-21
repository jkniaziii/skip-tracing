import React, { useState } from 'react';
import Card from "react-bootstrap/Card";

function ReviewCards(props) {
   
    return (
        <Card className="project-card-view">
            <Card.Body>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div class="circular_image">
                        <img src="http://placekitten.com/500/500" />
                    </div>
                    <div style={{ marginLeft: 15, textAlign: 'start' }}>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>{'Real Estate Agent'}</Card.Text>
                    </div>
                </div>
                <Card.Text style={{ textAlign: 'start', marginTop: 15 }}>{props.description}</Card.Text>
                {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>
                        {i < props.rating ? '⭐' : '☆'}
                    </span>
                ))}
            </Card.Body>
        </Card>
    );
}
export default ReviewCards;
