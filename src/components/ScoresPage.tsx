import { Container, Tabs, Tab } from "react-bootstrap";

const ScoresPage: React.FC = () => {
  const liveScores = [{ id: 1, match: "Man City 2 - 1 Arsenal", time: "Live" }];
  const recentScores = [{ id: 2, match: "Chelsea 1 - 0 Spurs", time: "FT" }];

  return (
    <Container>
      <h2>Scores</h2>
      <Tabs defaultActiveKey="live" className="mb-3">
        <Tab eventKey="live" title="Live">
          {liveScores.map((score) => (
            <div key={score.id}>
              {score.match} - {score.time}
            </div>
          ))}
        </Tab>
        <Tab eventKey="recent" title="Recent">
          {recentScores.map((score) => (
            <div key={score.id}>
              {score.match} - {score.time}
            </div>
          ))}
        </Tab>
      </Tabs>
    </Container>
  );
};

export default ScoresPage;
