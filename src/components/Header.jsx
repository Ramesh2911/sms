import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FaBars, FaUserCircle } from "react-icons/fa";

const Header = () => {

  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.removeItem("role");
    window.location.href = "/";
  }

  return (

    <Navbar bg="white" className="shadow-sm">

      <Container fluid>

        <Navbar.Brand style={{fontWeight:"600"}}>
          School Management
        </Navbar.Brand>

        <Nav className="ms-auto d-flex align-items-center">

          <span style={{marginRight:"15px"}}>
            <FaUserCircle/> {role}
          </span>

          <Button
          size="sm"
          variant="danger"
          onClick={logout}
          >
            Logout
          </Button>

        </Nav>

      </Container>

    </Navbar>

  )

}

export default Header