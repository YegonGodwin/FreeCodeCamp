import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeroSection from "./Herosection";
import NewsCarousel from "./NewsPage";
import LiveScores from "./UpcomingFixtures";
import UpcomingFixtures from "./Footer";
import ScoresPage from "./ScoresPage";

const Homepage: React.FC = () => {
  return (
    <Container fluid className="p-0">
      <HeroSection />
      <Row className="my-4">
        <Col md={6}>
          <NewsCarousel />
        </Col>
        <Col md={6}>
          <LiveScores />
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <UpcomingFixtures />
        </Col>
        <Col>
          <ScoresPage />
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
