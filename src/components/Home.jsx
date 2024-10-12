import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "animate.css/animate.min.css";
import worldImage from "./image/world.png";
import featureImage from "./image/feature.png";
import testimonialImage from "./image/testimonial.png";

const Home = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#081b29", color: "#ededed", padding: "5rem" }}
    >
      <header className="text-center mb-5">
        <h1
          className="display-4 animate__animated animate__fadeIn"
          style={{ color: "#00abf0", fontFamily: "Poppins, sans-serif" }}
        >
          Welcome to the Countries App
        </h1>
      </header>

      <section className="text-center mb-5">
        <h2
          className="animate__animated animate__fadeIn"
          style={{ color: "#00abf0", fontFamily: "Poppins, sans-serif" }}
        >
          Explore Countries Around the World
        </h2>
        <p
          className="lead"
          style={{ color: "#ededed", fontFamily: "Lato, sans-serif" }}
        >
          Discover information about various countries, including population,
          languages, and currencies. Add your favourites to easily access them
          later!
        </p>
        <img
          src={worldImage}
          className="img-fluid animate__animated animate__zoomIn mb-4"
          style={{
            maxHeight: "300px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
          alt="World Map"
        />
      </section>

      <section className="text-center mb-5">
        <h3
          className="mb-4 animate__animated animate__fadeIn"
          style={{ color: "#00abf0", fontFamily: "Poppins, sans-serif" }}
        >
          Featured Countries
        </h3>
        <Row xs={1} md={2} lg={3} className="g-4">
          {["Finland", "Sweden", "Norway"].map((country) => (
            <Col key={country}>
              <Card
                className="h-100"
                style={{
                  backgroundColor: "#112e42",
                  color: "#ededed",
                  borderRadius: "10px",
                }}
              >
                <Card.Body>
                  <Card.Title style={{ fontFamily: "Poppins, sans-serif" }}>
                    {country}
                  </Card.Title>
                  <Card.Text>
                    Population: {Math.floor(Math.random() * 10) + 5} million
                  </Card.Text>
                  <Link to={`/countries/${country}`}>
                    <Button variant="outline-light" className="mt-2">
                      View Details
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Feature Section */}
      <section className="text-center mb-5">
        <h3
          className="mb-4 animate__animated animate__fadeIn"
          style={{ color: "#00abf0", fontFamily: "Poppins, sans-serif" }}
        >
          Why Choose Our App?
        </h3>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card
              className="animate__animated animate__fadeInLeft"
              style={{
                backgroundColor: "#112e42",
                color: "#ededed",
                borderRadius: "10px",
              }}
            >
              <Card.Img variant="top" src={featureImage} alt="Feature" />
              <Card.Body>
                <Card.Title style={{ fontFamily: "Poppins, sans-serif" }}>
                  Comprehensive Data
                </Card.Title>
                <Card.Text>
                  Get in-depth information about each country, including
                  demographics and cultural insights.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="animate__animated animate__fadeInRight"
              style={{
                backgroundColor: "#112e42",
                color: "#ededed",
                borderRadius: "10px",
              }}
            >
              <Card.Img
                variant="top"
                src={testimonialImage}
                alt="Testimonial"
              />
              <Card.Body>
                <Card.Title style={{ fontFamily: "Poppins, sans-serif" }}>
                  User-Friendly Interface
                </Card.Title>
                <Card.Text>
                  Our app is designed for easy navigation and a seamless user
                  experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Testimonials Section */}
      <section className="text-center mb-5">
        <h3
          className="mb-4 animate__animated animate__fadeIn"
          style={{ color: "#00abf0", fontFamily: "Poppins, sans-serif" }}
        >
          What Our Users Say
        </h3>
        <Row xs={1} md={2} lg={3} className="g-4">
          {["User1", "User2", "User3"].map((user, index) => (
            <Col key={index}>
              <Card
                className="h-100 animate__animated animate__fadeInUp"
                style={{
                  backgroundColor: "#112e42",
                  color: "#ededed",
                  borderRadius: "10px",
                }}
              >
                <Card.Body>
                  <Card.Title style={{ fontFamily: "Poppins, sans-serif" }}>
                    {user}
                  </Card.Title>
                  <Card.Text>
                    "This app has changed the way I explore countries! Highly
                    recommended!"
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Redesigned FAQ Section */}
      <section className="text-center mb-5">
        <h3
          className="mb-4 animate__animated animate__fadeIn"
          style={{ color: "#00abf0", fontFamily: "Poppins, sans-serif" }}
        >
          Frequently Asked Questions
        </h3>
        <Row className="justify-content-center">
          <Col md={8}>
            <Row className="g-4">
              {faqData.map((faq, index) => (
                <Col key={index} xs={12} sm={6}>
                  <Card
                    className="faq-card"
                    style={{
                      backgroundColor: "#112e42",
                      borderRadius: "10px",
                      color: "#ededed",
                      transition: "0.3s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#00abf0";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#112e42";
                      e.currentTarget.style.color = "#ededed";
                    }}
                  >
                    <Card.Body>
                      <Card.Title style={{ fontFamily: "Poppins, sans-serif" }}>
                        {faq.question}
                      </Card.Title>
                      <Card.Text style={{ fontFamily: "Lato, sans-serif" }}>
                        {faq.answer}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </section>

      <footer className="text-center">
        <p style={{ color: "#ededed", fontFamily: "Lato, sans-serif" }}>
          &copy; {new Date().getFullYear()} Countries App |
          <a href="mailto:support@example.com" style={{ color: "#00abf0" }}>
            {" "}
            Contact Us
          </a>
        </p>
      </footer>
    </Container>
  );
};

// Sample FAQ data
const faqData = [
  {
    question: "1. How can I search for a country?",
    answer: "Use the search bar at the top of the page.",
  },
  {
    question: "2. Can I save my favourite countries?",
    answer: "Yes, you can add countries to your favourites for quick access.",
  },
  {
    question: "3. Is the app available on mobile?",
    answer: "Yes, our app is fully responsive and can be used on any device.",
  },
  {
    question: "4. Can I Remove my favourite countries?",
    answer: "Yes, you can Remove countries from your favourites.",
  },
];

export default Home;
