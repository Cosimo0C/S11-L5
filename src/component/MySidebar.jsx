import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function MySidebar() {
  return (
    <Navbar expand="lg" className="bg-dark top-0 start-0 vh-100" style={{ maxWidth: "250px" }}>
      <Container fluid className="flex-column justify-content-center h-100 p-3 align-content-around">
        <Container>
          <Nav.Link className="mb-4"></Nav.Link>
          <Nav className=" my-2 my-lg-0 flex-column mb-4" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link className="text-secondary fw-semibold">
              <i className="me-1 bi bi-house-door-fill"></i>Home
            </Nav.Link>
            <Nav.Link className="text-secondary fw-semibold">
              <i className="me-1 bi bi-book-fill"></i>Your library
            </Nav.Link>
          </Nav>
          <Form className="d-flex mt-4">
            <Form.Control type="search" placeholder="Search" className="" aria-label="Search" />
            <Button style={{ marginLeft: "-2px" }} variant="dark" className="border border-secondary text-secondary">
              Go
            </Button>
          </Form>
        </Container>
        <Container className="mt-auto">
          <Container>
            <h1 className="text-white">fetch</h1>
          </Container>
          <Container className="d-flex flex-column">
            <Button variant="light" className="login-btn rounded-pill mt-3">
              Sign Up
            </Button>
            <Button variant="dark" className=" signup-btn border-white rounded-pill my-2 px-3">
              Login
            </Button>
          </Container>
          <Container className="d-flex justify-content-center">
            <h6 className="text-secondary border-end border-secondary pe-1">Cookie Policy</h6>
            <h6 className="text-secondary ps-1">Privacy</h6>
          </Container>
        </Container>
      </Container>
    </Navbar>
  );
}
export default MySidebar;
