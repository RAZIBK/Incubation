import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import axios from "axios";
import {ToastContainer,toast} from 'react-toastify'


function Header() {
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyAdmin = async () => {
      if (!cookies.jwt) {
        navigate("/adminlogin");
      } else {
        const { data } = await axios.post(
          "http://localhost:4000/admin",
          {},
          { withCredentials: true }
        );
        if(!data.status){
          removeCookie('jwt');
          navigate('/adminlogin');
        }
      }
    };
    verifyAdmin();
  }, [cookies, navigate, removeCookie]);
  const logOut = () => {
    removeCookie("jwt");
    navigate("/adminlogin");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={() => navigate("/admin")}>
          Admin panel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <Nav.Link onClick={()=>navigate('/admin/managerequst')} >Manage request</Nav.Link> */}
            <Nav.Link onClick={() => navigate("/admin/slots")}>Slots</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success" onClick={logOut}>
              Logout
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
