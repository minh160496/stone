import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function HeaderNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="backgroud-primary full">
        <Navbar.Brand href="#home">
          <div className="header__logo">
            <img
              src="https://www.eldoradostone.com/wp-content/uploads/2022/08/logo-eldorado-stone.svg"
              className="w-100 w-100"
              alt=""
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="ABOUT US" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">OUR STORY</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">PRESS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                ASSOCIATIONS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                ASSOCIATIONS
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="PRUDUCTS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">STONE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">BRICK</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                STONE ACCENTS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                PRODUCT SELECTOR
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                DISCOVER KINDRED OUTDOORS + SURROUNDS
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="IMAGINE" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">STONE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">BRICK</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                STONE ACCENTS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                PRODUCT SELECTOR
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                DISCOVER KINDRED OUTDOORS + SURROUNDS
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="RESOURCES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">STONE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">BRICK</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                STONE ACCENTS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                PRODUCT SELECTOR
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                DISCOVER KINDRED OUTDOORS + SURROUNDS
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="WHERE TO BUY" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">STONE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">BRICK</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                STONE ACCENTS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                PRODUCT SELECTOR
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                DISCOVER KINDRED OUTDOORS + SURROUNDS
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function Header() {
  return (
    <div className="header--wrap position-fixed top-0 end-0 start-0 z-3">
      <header className="header container-lg-fluit">
        <HeaderNavBar />
      </header>
    </div>
  );
}

export default Header;
