import { Container, Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Container>
        <Navbar>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/tasks">Task List</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Navbar>
      </Container>
    </>
  );
}
