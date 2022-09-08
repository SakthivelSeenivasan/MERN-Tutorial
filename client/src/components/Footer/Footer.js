import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        position: "bottom",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">Copy right &copy; Note Zipper</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
