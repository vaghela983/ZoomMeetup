import React from "react";
import { Button, Jumbotron, Container, Navbar } from "react-bootstrap";
import { FaHandshake } from "react-icons/fa";

export default class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#">
            <FaHandshake style={{ fontSize: 40 }} />
            &nbsp; Zoom MeetUp
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
