import { Card, Container } from "react-bootstrap";

const MyCardSong = function () {
  return (
    <Container fluid>
      <Card>
        <Card.Img variant="top" alt="copertina canzone" />
        <Card.Body>
          <Card.Title>Song.title</Card.Title>
          <Card.Text>Artist</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default MyCardSong;
