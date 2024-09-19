import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function MyNavBar(props) {

  return (
    <>
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">
        <img
              // src={Logo}
              height="30"
              className="d-lg-inline-block"
              // alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Nav.Link href="/species">Species</Nav.Link>
        <Nav.Link href="/species/tracker">Sightings</Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Abbie Huynh</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default MyNavBar;