import { Container, Row, Col, Card, Button } from "react-bootstrap";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Blog() {
  const baseURL = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, [post]);

  if (post) {
    return (
      <>
        <h1>Blog Page </h1>
        <Container>
          <Row>
            {post.map((row) => (
              <Col xs={12} md={6}>
                <Card>
                  <Card.Body>
                    <Card.Title>{row.title}</Card.Title>
                    <Card.Text>{row.body}</Card.Text>
                    <Button variant="primary">View More</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  } else {
    return <div> Loading </div>;
  }
}
