import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GitHubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Page404 from "./components/pages/Page404";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GitHubProvider>
        <AlertProvider>
          <Router>
            <div className="flex flex-col justify-between h-screen">
              <Navbar />
              <main className="container mx-auto px-7">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/page_404" element={<Page404 />} />
                  <Route path="/*" element={<Page404 />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </AlertProvider>
      </GitHubProvider>
    </>
  );
}

export default App;
