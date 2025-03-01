import React, { useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
//import { Link } from "react-router-dom";

interface News {
  id: number;
  title: string;
  league: string;
}

const NewsPage: React.FC = () => {
  const [news] = useState<News[]>([
    { id: 1, title: "Man Utd Signs New Striker", league: "Premier League" },
    { id: 2, title: "Messi Scores Hat-Trick", league: "La Liga" },
  ]);
  const [filter, setFilter] = useState<string>("");

  const filteredNews = news.filter((item) =>
    item.league.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h2>Football News</h2>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Filter by league..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </Form.Group>
      {filteredNews.map((item) => (
        <Card key={item.id} className="mb-3">
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>League: {item.league}</Card.Text>
            <Button as="a" href={`/news/${item.id}`} variant="outline-primary">
              Read More
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default NewsPage;
