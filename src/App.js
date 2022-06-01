import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          {/* <main className="container mx-auto">here</main> */}
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
