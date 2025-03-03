import { Container, Navbar } from "react-bootstrap";

const Goal: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <h2 className="text-success">Gaolix scores</h2>
      </Container>
    </Navbar>
  );
};
export default Goal;
