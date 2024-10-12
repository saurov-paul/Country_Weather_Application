import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row, Spinner, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "animate.css/animate.min.css";

const CountrySingle = (props) => {
  const location = useLocation();
  const country = props.country || location.state.country;
  const [weather, setWeather] = useState("");
  const [isWeatherLoading, setIsWeatherLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          country.capital
        }&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
      )
      .then((response) => {
        setWeather(response.data);
        setIsWeatherLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsWeatherLoading(false);
      });
  }, [country.capital]);

  if (isWeatherLoading) {
    return (
      <Col className="text-center m-5">
        <Spinner
          animation="border"
          role="status"
          className="center"
          variant="info"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Col>
    );
  }

  return (
    <Container fluid style={{ backgroundColor: '#081b29', color: '#ededed', padding: '2rem' }}>
      <Row className="justify-content-center mb-5">
        <Col md={6} className="text-center">
          <Image
            src={country.flags.svg}
            alt={`${country.name.common} Flag`}
            className="img-fluid animate__animated animate__fadeIn mb-4"
            style={{ maxHeight: '200px', objectFit: 'contain' }}
          />
          <h2 className="animate__animated animate__fadeIn">{country.name.common}</h2>
          <h6 className="text-info ">{country.capital}</h6>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          <Card
            className="bg-secondary border-0 text-light animate__animated animate__fadeIn"
            style={{ borderRadius: "15px", backgroundColor: '#112e42' }}
          >
            <Card.Body>
              {weather ? (
                <div className="text-center">
                  <p className="lead">
                    Currently, it is <strong>{parseInt(weather.main.temp)}°C</strong> in {country.capital} with{" "}
                    <strong>{weather.weather[0].description}</strong>.
                  </p>
                  <Image
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                    className="mb-3"
                  />
                </div>
              ) : (
                <div className="text-center">No weather data found</div>
              )}
              <Button
                variant="info"
                className="mt-3"
                onClick={() => navigate("/countries")}
                style={{ backgroundColor: '#00abf0', borderColor: '#00abf0' }}
              >
                Back to Countries
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CountrySingle;
