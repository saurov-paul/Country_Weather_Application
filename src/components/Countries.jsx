import { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  ListGroupItem,
  Row,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { initializeCountries } from "../services/countriesServices";
import { search } from "../store/countriesSlice";
import { addFavourite, removeFavourite } from "../store/favouritesSlice";

const Countries = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries.countries);
  const isLoading = useSelector((state) => state.countries.isLoading);
  const searchInput = useSelector((state) => state.countries.search);
  const favourites = useSelector((state) => state.favourites.favourites);

  useEffect(() => {
    dispatch(initializeCountries());
  }, [dispatch]);

  // Loading state
  if (isLoading) {
    return (
      <Col className="text-center m-5">
        <Spinner
          animation="border"
          role="status"
          variant="info"
          style={{ width: "3rem", height: "3rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Col>
    );
  }

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#081b29",
        color: "#333",
        minHeight: "100vh",
        padding: "3rem 2rem",
      }}
    >
      {/* Search Bar */}
      <Row>
        <Col className="d-flex justify-content-center mb-4">
          <Form>
            <Form.Control
              style={{
                width: "22rem",
                padding: "1rem",
                borderRadius: "30px",
                border: "2px solid #007bff",
                backgroundColor: "#fff",
                color: "#333",
                fontSize: "1.1rem",
                boxShadow: "inset 0 4px 8px rgba(0, 123, 255, 0.1)",
                transition: "box-shadow 0.3s ease",
              }}
              type="search"
              placeholder="Search countries..."
              aria-label="Search"
              onChange={(e) => dispatch(search(e.target.value))}
              onFocus={(e) =>
                (e.target.style.boxShadow =
                  "0 0 10px rgba(0, 123, 255, 0.8), inset 0 4px 8px rgba(0, 123, 255, 0.1)")
              }
              onBlur={(e) =>
                (e.target.style.boxShadow =
                  "inset 0 4px 8px rgba(0, 123, 255, 0.1)")
              }
            />
          </Form>
        </Col>
      </Row>

      {/* Countries Grid */}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {countries
          .filter((country) => {
            return country.name.common
              .toLowerCase()
              .includes(searchInput.toLowerCase());
          })
          .map((country) => {
            const isFavourite = favourites.includes(country.name.common);

            return (
              <Col key={country.name.official}>
                <Card
                  className="h-100"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "1.5rem",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.5s ease, box-shadow 0.5s ease",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 20px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <Link
                    to={`/countries/${country.name.common}`}
                    state={{ country: country }}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Card.Img
                      variant="top"
                      src={country.flags.svg}
                      alt={country.name.common}
                      className="rounded-top"
                      style={{
                        objectFit: "cover",
                        maxHeight: "200px",
                        transition: "transform 0.5s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </Link>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                      {country.name.common}
                    </Card.Title>
                    <Card.Subtitle
                      className="mb-3 text-muted"
                      style={{ fontSize: "1rem" }}
                    >
                      {country.name.official}
                    </Card.Subtitle>
                    <ListGroup variant="flush" className="flex-grow-1">
                      <ListGroupItem
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          padding: "0.5rem 0",
                          fontSize: "0.95rem",
                          color: "#666",
                        }}
                      >
                        <i className="bi bi-people me-2" /> Population:{" "}
                        {country.population.toLocaleString()}
                      </ListGroupItem>
                      <ListGroupItem
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          padding: "0.5rem 0",
                          fontSize: "0.95rem",
                          color: "#666",
                        }}
                      >
                        <i className="bi bi-currency-dollar me-2" /> Currencies:{" "}
                        {Object.values(country.currencies || {})
                          .map((currency) => currency.name)
                          .join(", ") || "No currency"}
                      </ListGroupItem>
                      <ListGroupItem
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          padding: "0.5rem 0",
                          fontSize: "0.95rem",
                          color: "#666",
                        }}
                      >
                        <i className="bi bi-chat-text me-2" /> Languages:{" "}
                        {Object.values(country.languages || {})
                          .map((language) => language)
                          .join(", ") || "No language"}
                      </ListGroupItem>
                    </ListGroup>

                    {!isFavourite ? (
                      <Button
                        variant="outline-primary"
                        onClick={() =>
                          dispatch(addFavourite(country.name.common))
                        }
                        style={{
                          marginTop: "auto",
                          borderRadius: "30px",
                          padding: "0.6rem 1.2rem",
                          fontSize: "0.9rem",
                          transition: "background-color 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#00abf0")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "transparent")
                        }
                      >
                        Add to Favourites
                      </Button>
                    ) : (
                      <Button
                        variant="success, bg-success"
                        onClick={() =>
                          dispatch(removeFavourite(country.name.common))
                        }
                        style={{
                          marginTop: "auto",
                          borderRadius: "30px",
                          padding: "0.6rem 1.2rem",
                          fontSize: "0.9rem",
                          color: "white",                         
                        }}
                      >
                        Favourite Added
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Countries;
