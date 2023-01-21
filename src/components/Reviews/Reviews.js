import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCards from './ReviewCard';
import chatify from "../../Assets/Projects/chatify.png";

const Reviews = () => {

    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    const reviews = [
        { image: chatify, title: 'Will Smith', description: 'I highly recommend him for their exceptional work ethic and attention to detail. They delivered on time', rating: 5 },
        { image: chatify, title: 'Brad Pitt', description: "This freelancer is a true professional, with excellent communication and a great attitude. Highly recommend!", rating: 4 },
        { image: chatify, title: 'Robert Downey Jr.', description: "I was extremely impressed with the quality of work . They went above and beyond my expectations.", rating: 5 },
        { image: chatify, title: 'Leonardo DeCaprio', description: "I was extremely satisfied with the results of this freelancer's work. They are highly skilled and easy to work with.", rating: 5 },

    ]
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <h1 className="reviews-heading">
                        Hear it from those <strong className="purple">who have tried us </strong>
                    </h1>
                    <Slider {...settings} >
                        {reviews.map((item, index) => {
                            return <Col md={4} className="project-card">
                                <ReviewCards
                                    imgPath={item.image}
                                    title={item.title}
                                    description={item.description}
                                    rating={item.rating}
                                />
                            </Col>

                        })}
                    </Slider>
                </Row>
            </Container>
        </Container>
    )
}

export default Reviews;