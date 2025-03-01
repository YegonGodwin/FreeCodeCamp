import React, { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";

interface Fixture {
  id: number;
  teams: string;
  date: string; // ISO format, e.g., "2025-03-10T15:00:00Z"
}

const UpcomingFixtures: React.FC = () => {
  const [fixtures] = useState<Fixture[]>([
    { id: 1, teams: "Man Utd vs Liverpool", date: "2025-03-10T15:00:00Z" },
    { id: 2, teams: "Arsenal vs Chelsea", date: "2025-03-15T17:00:00Z" },
  ]);
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const updateCountdown = () => {
      const nextFixture = fixtures[0];
      const now = new Date();
      const matchTime = new Date(nextFixture.date);
      const diff = matchTime.getTime() - now.getTime();

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeLeft("Match Started!");
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [fixtures]);

  return (
    <Card>
      <Card.Header>Upcoming Fixtures</Card.Header>
      <ListGroup variant="flush">
        {fixtures.map((fixture) => (
          <ListGroup.Item key={fixture.id}>
            {fixture.teams} - {new Date(fixture.date).toLocaleDateString()}
            {fixture.id === 1 && (
              <div className="text-primary">Countdown: {timeLeft}</div>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default UpcomingFixtures;
