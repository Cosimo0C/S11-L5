import "bootstrap-icons/font/bootstrap-icons.css";
import MySidebar from "./component/MySidebar";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
function App() {
  return (
    <>
      <Container fluid className="p-0">
        <Row>
          <Col className="col-2">
            <MySidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
