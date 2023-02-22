import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./social logo 1.png";
import { FaHome } from "react-icons/fa";
import {  FaBell } from "react-icons/fa";
import {  FaFacebookMessenger } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import "./navbar.css"


function NavScrollExample() {
  const user = JSON.parse(localStorage.getItem("data")).user 

  console.log("USER", user)
  return (
    <Navbar className="navbar" expand="lg"
    style={{
      width: "100%",
    
    }}
    >
      <Container fluid>
        <Navbar.Brand href="#"><img className="navlogo" src={Logo} /></Navbar.Brand>

        <NavDropdown title="Explore" id="navbarScrollingDropdown" className="explore">
          <NavDropdown.Item href="#action3">Machine learning</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Python </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>

        <Form className="d-flex" id="search">
          <Form.Control id="searchinput"
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>
        <Container className="navbaroption">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="navoption"  href="#action1"><FaHome/>Home</Nav.Link>
              <Nav.Link className="navoption" href="#action2"><FaBell/>Notification</Nav.Link>
              <Nav.Link className="navoption" href="#action2"><FaFacebookMessenger/>Messages</Nav.Link>
              <Nav.Link className="navoption" href="#action2"><FaBookmark/>Saved</Nav.Link>
              
            </Nav>
            <div className="userprofile">
            {user?.firstName} {user?.lastName}
            <div className="navprofile">
            <FaUserAlt/>
          </div>
            </div>
         
          </Navbar.Collapse>

        </Container>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
