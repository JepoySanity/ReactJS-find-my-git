import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="container mx-auto">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
