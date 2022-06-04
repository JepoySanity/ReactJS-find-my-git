import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Page404 from "./components/pages/Page404";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GitHubProvider } from "./context/github/GithubContext";
function App() {
  return (
    <>
      <GitHubProvider>
        <Router>
          <ToastContainer
            theme="dark"
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
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
      </GitHubProvider>
    </>
  );
}

export default App;
