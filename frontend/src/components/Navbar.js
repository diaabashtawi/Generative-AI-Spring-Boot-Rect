import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavbarComponent() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/*<Nav.Link href="#Image">Image Generator</Nav.Link>*/}
                        {/*<Nav.Link href="#Chat">Chat</Nav.Link>*/}
                        {/*<Nav.Link href="#Recipe">Recipe Generator</Nav.Link>*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;