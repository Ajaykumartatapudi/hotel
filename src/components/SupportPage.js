// SupportPage.js
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import background from "../Images/support-bg.jpg"; // Add a background image in src/images/

const SupportPage = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${name}, we will contact you at ${contact} soon!`);
    setName("");
    setContact("");
    setMessage("");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
      }}
    >
      {/* Shaded overlay */}
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <Row>
            {/* FAQ Section */}
            <Col md={6}>
              <h2>Frequently Asked Questions</h2>
              <Accordion defaultActiveKey="0" style={{ color: "black", background: "white", borderRadius: "5px" }}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>How can I book a room?</Accordion.Header>
                  <Accordion.Body>
                    You can book a room using our booking form or by calling our support team.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>What payment methods are accepted?</Accordion.Header>
                  <Accordion.Body>
                    We accept credit/debit cards, online wallets, and bank transfers.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Can I cancel my booking?</Accordion.Header>
                  <Accordion.Body>
                    Yes, cancellations are possible. Please check our cancellation policy for details.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            {/* Contact Form Section */}
            <Col md={6}>
              <div
                style={{
                  background: "rgba(255,255,255,0.9)",
                  padding: "30px",
                  borderRadius: "10px",
                  color: "black",
                  marginTop: "20px",
                }}
              >
                <h2>Contact Support</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>Email or Phone</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter email or phone number"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Describe your issue"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SupportPage;
