import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to NoteZipper</h1>
              <p className="subtitle">One safe Place for all your notes</p>
              <div className="buttonContainer">
                <a href="/login">
                  <Button className="landingbutton" size="lg">
                    Login
                  </Button>
                </a>
                <a href="/login">
                  <Button
                    className="landingbutton"
                    variant="outline-primary"
                    size="lg"
                  >
                    Login
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
