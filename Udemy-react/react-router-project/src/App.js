import { Route } from "react-router";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Route path="/welcome">
        <Welcome />
      </Route>
    </div>
  );
}

export default App;
