import { Form } from "react-bootstrap";
import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";

function MySidebar() {
  return (
    <Container fluid className="p-3 nav-dark vh-100 d-flex flex-column justify-content-between position-relative top-0 bottom-0">
      <div className="">
        <div>
          <img className="rounded-pill" src={logo} alt="logo" width="150px" />
        </div>
        <h6 className="text-secondary my-3 mt-5">
          <i className="me-1 bi bi-house-door-fill"></i>Home
        </h6>
        <h6 className="text-secondary my-3 mb-4">
          <i className="me-1 bi bi-book-fill"></i>Your Library
        </h6>
        <Form className="d-flex">
          <Form.Control type="search" placeholder="Search" className="border-0 p-2" aria-label="Search" />
          <div style={{ marginLeft: "-1px" }} variant="dark" className="btn border-secondary text-secondary p-2">
            Go
          </div>
        </Form>
      </div>
      <div className="p-3">
        <div className="btn signup-btn my-3">Sign Up</div>
        <div className="btn login-btn my-3">Login</div>
        <div className="d-flex justify-content-center">
          <h6 className="text-secondary pe-2 border-end border-secondary">Cookie Policy</h6>
          <h6 className="text-secondary ps-2">Privacy</h6>
        </div>
      </div>
    </Container>
  );
}
export default MySidebar;
// data:image/png;base64,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
