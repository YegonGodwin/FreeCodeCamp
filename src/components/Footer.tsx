import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Container>
        <Navbar.Text>&copy; 2025 Goalix Scores</Navbar.Text>
        <Navbar.Text>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            Facebook
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            X
          </a>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;
