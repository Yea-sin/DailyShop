import React from "react";
import "./TopHeader.css";
import {
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const TopHeader = () => {
  return (
    <div className="topheader-bg">
      <Container>
        <Navbar variant="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <div className="logo d-flex align-items-center">
                <img
                  width="50px"
                  src="https://i.ibb.co/xj0N8qt/logo-4.png"
                  alt="logo"
                />
                <h4>DailyShop</h4>
              </div>
            </Navbar.Brand>
            <div className="search-bar d-flex align-items-center">
              <DropdownButton
                variant="light"
                className="me-3 border-end"
                title="All Catagories">
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
              <input type="text" placeholder="Search Product" />
              <h3 className="ms-auto">
                <a href="#">
                  <BsSearch />
                </a>
              </h3>
            </div>
            <div className="header-icons d-flex">
              <h3>
                <a href="#">
                  <BiUser />
                </a>
              </h3>
              <h3>
                <a href="#">
                  <AiOutlineHeart />
                </a>
              </h3>
              <h3>
                <a href="#">
                  <AiOutlineShoppingCart />
                </a>
              </h3>
            </div>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default TopHeader;
