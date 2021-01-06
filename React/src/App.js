import logo from "./logo.svg";
import "./App.css";
import { Router } from "@reach/router";
import Meeting from "./Meeting";
import JoinDetail from "./JoinDetail";
import Join from "./Join";
function App() {
  return (
    <div className="App">
      <Router>
        <Meeting path="/" />
        <JoinDetail path="/JoinDetail/:id/:pass" />
        <Join path="/Join/:id/:pass" />
      </Router>
    </div>
  );
}

export default App;
