import React from "react";
import { navigate } from "@reach/router";
import { Button, Jumbotron, Container } from "react-bootstrap";
import LinearProgress from "@material-ui/core/LinearProgress";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { FaInfoCircle } from "react-icons/fa";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
export default class Meeting extends React.Component {
  constructor() {
    super();
    this.state = {
      disply: false,
      meetingId: "",
      password: "",
      value: "http://localhost:3000/this is a copy",
      copied: false,
      show: false,
      open: false,
      txt:
        "Creating Meeting Before configure your JWT And Username in your Server.",
    };
  }

  MeetingCreate = () => {
    this.setState({ show: true });
    fetch("http://localhost:8080/newmeeting", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          this.setState({ show: false });
          this.setState({
            meetingId: res.id,
            password: res.encrypted_password,
            disply: true,
          });
          navigate(
            `/JoinDetail/${this.state.meetingId}/${this.state.password}`
          );
        }
      });
  };

  render() {
    return (
      <div align="center">
        {this.state.show ? <LinearProgress color="secondary" /> : null}

        <Jumbotron>
          <Container>
            <h1>Hello,User</h1>
            <p>
              This is to Creating Meeting in zoom without using Zoom extentation
              And Creating Meeting in Web.
              <Tooltip
                title={<h6>{this.state.txt}</h6>}
                placement="right"
                arrow
              >
                <IconButton>
                  <FaInfoCircle style={{ marginTop: -3, color: "blue" }} />
                </IconButton>
              </Tooltip>
            </p>
            <p>
              {/* <Button variant="primary" onClick={this.MeetingCreate}> */}
              <Button variant="primary" onClick={this.MeetingCreate}>
                Create Zoom Meeting
              </Button>
            </p>
          </Container>
        </Jumbotron>
        <Snackbar
          autoHideDuration={900}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
        >
          <MuiAlert
            onClose={() => this.setState({ open: false })}
            severity="success"
            style={{ background: "#4CAF50", color: "white" }}
          >
            <b>Sucessfully Meeting Create</b>
          </MuiAlert>
        </Snackbar>
      </div>
    );
  }
}
