import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'animate.css/animate.min.css'; 
import worldImage from "./image/world.png";
import featureImage from "./image/feature.png"; // Add your feature image path here
import testimonialImage from "./image/testimonial.png"; // Add your testimonial image path here

const Home = () => {
  return (
    <Container fluid className="bg-dark text-light p-5">

      <header className="text-center mb-5">
        <h1 className="display-4 animate__animated animate__fadeIn">Welcome to the Countries App</h1>
      </header>

      <section className="text-center mb-5">
        <h2 className="animate__animated animate__fadeIn">Explore Countries Around the World</h2>
        <p className="lead">
          Discover information about various countries, including population, languages, and currencies.
          Add your favourites to easily access them later!
        </p>
        <img
          src={worldImage}
          className="img-fluid animate__animated animate__zoomIn mb-4"
          style={{ maxHeight: "300px", objectFit: "cover" }}
          alt="World Map"
        />
      </section>

      <section className="text-center mb-5">
        <h3 className="mb-4 animate__animated animate__fadeIn">Featured Countries</h3>
        <Row xs={1} md={2} lg={3} className="g-4">
          {['Finland', 'Sweden', 'Norway'].map((country) => (
            <Col key={country}>
              <Card className="h-100 bg-light text-dark animate__animated animate__fadeInUp">
                <Card.Body>
                  <Card.Title>{country}</Card.Title>
                  <Card.Text>
                    Population: {Math.floor(Math.random() * 10) + 5} million
                  </Card.Text>
                  <Link to={`/countries/${country}`}>
                    <Button variant="secondary" className="mt-2">View Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* New Feature Section */}
      <section className="text-center mb-5">
        <h3 className="mb-4 animate__animated animate__fadeIn">Why Choose Our App?</h3>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card className="bg-secondary text-light animate__animated animate__fadeInLeft">
              <Card.Img variant="top" src={featureImage} alt="Feature" />
              <Card.Body>
                <Card.Title>Comprehensive Data</Card.Title>
                <Card.Text>
                  Get in-depth information about each country, including demographics and cultural insights.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-secondary text-light animate__animated animate__fadeInRight">
              <Card.Img variant="top" src={testimonialImage} alt="Testimonial" />
              <Card.Body>
                <Card.Title>User-Friendly Interface</Card.Title>
                <Card.Text>
                  Our app is designed for easy navigation and a seamless user experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* New Testimonials Section */}
      <section className="text-center mb-5">
        <h3 className="mb-4 animate__animated animate__fadeIn">What Our Users Say</h3>
        <Row xs={1} md={2} lg={3} className="g-4">
          {['User1', 'User2', 'User3'].map((user, index) => (
            <Col key={index}>
              <Card className="h-100 bg-light text-dark animate__animated animate__fadeInUp">
                <Card.Body>
                  <Card.Title>{user}</Card.Title>
                  <Card.Text>
                    "This app has changed the way I explore countries! Highly recommended!"
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* New FAQ Section */}
      <section className="text-center mb-5">
        <h3 className="mb-4 animate__animated animate__fadeIn">Frequently Asked Questions</h3>
        <ol className="list-unstyled lead">
          <li className="mb-2"><strong>1. How can I search for a country?</strong><br />Use the search bar at the top of the page.</li>
          <li className="mb-2"><strong>2. Can I save my favourite countries?</strong><br />Yes, you can add countries to your favourites for quick access.</li>
          <li className="mb-2"><strong>3. Is the app available on mobile?</strong><br />Yes, our app is fully responsive and can be used on any device.</li>
        </ol>
      </section>

      <footer className="text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Countries App | 
          <a href="mailto:support@example.com" className="text-light"> Contact Us</a>
        </p>
      </footer>
    </Container>
  );
};

export default Home;
