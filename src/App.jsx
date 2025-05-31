import "bootstrap-icons/font/bootstrap-icons.css";
import MySidebar from "./component/MySidebar";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
function App() {
  return (
    <>
      <Container fluid className="p-0">
        <Row>
          <Col xs={5} md={4} lg={3} xl={2}>
            <MySidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
