import React from "react";
import { Container, Button } from "react-bootstrap";
//import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection: React.FC = () => {
  return (
    <Container
      className="text-center"
      style={{
        backgroundImage: "url(/football-stadium.jpg)",
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <h1>Welcome to Goalix Scores</h1>
      <p>Your ultimate source for football news, scores, and fixtures!</p>
      <Button as="a" href="/fixtures" variant="primary">
        Next Big Match
      </Button>
    </Container>
  );
};

export default HeroSection;
