import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { initializeCountries } from "../services/countriesServices";
import {
  clearFavourites,
  getFavouritesFromSource,
} from "../store/favouritesSlice";
import CountryCard from "./CountryCard";

const Favourites = () => {
  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countries.countries);
  const [search, setSearch] = useState("");
  const countriesLoading = useSelector((state) => state.countries.isLoading);
  const favouritesList = useSelector((state) => state.favourites.favourites);
  const favouritesLoading = useSelector((state) => state.favourites.isLoading);

  // Filter the countries based on favourites
  const filteredCountries = Array.isArray(favouritesList) && favouritesList.length > 0
    ? countriesList.filter((country) => favouritesList.includes(country.name.common))
    : [];

  useEffect(() => {
    dispatch(initializeCountries());
    dispatch(getFavouritesFromSource());
  }, [dispatch]);

  if (countriesLoading || favouritesLoading) {
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
    <Container fluid>
      <Row>
        <Col className="mt-5 d-flex justify-content-center">
          <h2>Your Favourite Countries</h2>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3 d-flex justify-content-center">
          <Form style={{ width: "300px" }}>
            <Form.Control
              type="search"
              placeholder="Search by country name"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>
        </Col>
        <Col className="mt-3 d-flex justify-content-center">
          <Button variant="danger" onClick={() => dispatch(clearFavourites())}>
            Clear Favourites
          </Button>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-3 mt-4">
        {filteredCountries.length === 0 ? (
          <Col className="text-center">
            <Alert variant="info">
              No favourite countries found. Please add some!
            </Alert>
          </Col>
        ) : (
          filteredCountries
            .filter((country) =>
              country.name.official.toLowerCase().includes(search.toLowerCase())
            )
            .map((country) => (
              <CountryCard key={country.name.common} country={country} showRemoveButton={true} />
            ))
        )}
      </Row>
    </Container>
  );
};

export default Favourites;
