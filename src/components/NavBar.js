import React, { useContext } from "react";
import { Context } from "../index";
import { Container, Nav, NavLink, Navbar } from "react-bootstrap";
import { SHOP_ROUTE } from "../utils/const";

export default function NavBar() {
  const { user } = useContext(Context);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
            By Device Shop
          </NavLink>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
