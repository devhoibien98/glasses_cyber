import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

const HomePage = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center">Welcome to My Glasses Store</h1>
      <ul
        style={{ listStyle: "none" }}
        className="d-flex justify-content-around"
      >
        <li>
          <Link to="/glasses" className="text-decoration-none text-white">
            <Button variant="primary" style={{ marginTop: "20px" }}>
              Glasses
            </Button>
          </Link>
        </li>
      </ul>
    </Container>
  );
};
export default HomePage;
