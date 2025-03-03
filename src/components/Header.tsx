import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LiveScores from "./UpcomingFixtures";
import UpcomingFixtures from "./Footer";
import ScoresPage from "./ScoresPage";
import Goal from "./Goal";
import NewsPage from "./NewsPage";

const Homepage: React.FC = () => {
  return (
    <Container fluid className="p-0">
      <Row className="bg-dark text-white py-3">
        <Col>
          <Goal />
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={8}>
          <NewsPage />
        </Col>
        <Col md={4}>
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
