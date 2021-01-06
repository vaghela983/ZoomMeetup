import React from "react";
import { ZoomMtg } from "@zoomus/websdk";

const API_KEY = "";
const API_SECRET = "";

const meetConfig = {
  apiKey: API_KEY,
  apiSecret: API_SECRET,
  userName: "test user",
  role: 1,
};
class Join extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    var id = this.props.id;
    var pass = this.props.pass;

    ZoomMtg.setZoomJSLib("https://source.zoom.us/1.8.5/lib", "/av");
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();

    console.log("Launching meeting");
    // change state of meeting

    // generateSignature should only be used in development
    ZoomMtg.generateSignature({
      meetingNumber: id,
      apiKey: meetConfig.apiKey,
      apiSecret: meetConfig.apiSecret,
      role: meetConfig.role,
      success(res) {
        console.log("signature", res.result);

        ZoomMtg.init({
          leaveUrl: "http://localhost:3000/",
          success() {
            ZoomMtg.join({
              meetingNumber: id,
              userName: meetConfig.userName,
              signature: res.result,
              apiKey: meetConfig.apiKey,
              userEmail: " ",
              passWord: pass,
              success() {
                console.log("join meeting success");
              },
              error(res2) {
                console.log(res2);
              },
            });
          },
          error(res3) {
            console.log(res3);
          },
        });
      },
    });
  }
  render() {
    return <div></div>;
  }
}
export default Join;
