import { Button, Container, Form } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      <h1>Contact Page </h1>
      <Container>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Enter Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control type="textarea" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
