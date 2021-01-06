import { navigate } from "@reach/router";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Snackbar from "@material-ui/core/Snackbar";
import {
  Form,
  Row,
  Col,
  Container,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import { FaHandshake } from "react-icons/fa";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MuiAlert from "@material-ui/lab/Alert";
class JoinDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      open: false,
    };
  }
  componentDidMount() {
    this.setState({
      value:
        "http://localhost:3000/Join/" +
        this.props.id +
        "/" +
        this.props.pass +
        "",
    });
  }
  join = () => {
    navigate(`/Join/${this.props.id}/${this.props.pass}`);
  };
  render() {
    return (
      <div>
        <Snackbar
          autoHideDuration={880}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
        >
          <MuiAlert
            onClose={() => this.setState({ open: false })}
            severity="info"
            style={{ background: "#2196F3", color: "white" }}
          >
            <b>Sucessfully Copied</b>
          </MuiAlert>
        </Snackbar>

        <Container>
          <List
            component="nav"
            style={{ display: "inline-block" }}
            aria-label="main mailbox folders"
            align="center"
          >
            <ListItem>
              <ListItemIcon
                style={{ color: "black", fontSize: 46, marginRight: 15 }}
              >
                <FaHandshake />
              </ListItemIcon>
              <ListItemText
                primary={<h3 style={{ fontWeight: 800 }}>Join Meeting</h3>}
                style={{ marginTop: 14 }}
              />
            </ListItem>
          </List>
          <Card>
            <Card.Header>
              <h4>Meeting Credential</h4>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Meeting Id
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      placeholder="Meeting Id"
                      value={this.props.id}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    Password
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      placeholder="Password"
                      value={this.props.pass}
                    />
                  </Col>
                </Form.Group>
                <div align="left" style={{ marginLeft: 192 }}>
                  <Button style={{ marginRight: 11 }} onClick={this.join}>
                    Join
                  </Button>
                  <CopyToClipboard
                    text={this.state.value}
                    onCopy={() => this.setState({ copied: true })}
                  >
                    <Button onClick={() => this.setState({ open: true })}>
                      Join Link Copy
                    </Button>
                  </CopyToClipboard>
                </div>
              </Form>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Container>
      </div>
    );
  }
}
export default JoinDetail;
