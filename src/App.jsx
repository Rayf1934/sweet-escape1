import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Package from "./components/Pakcage.jsx"
import Footer from "./components/Footerini.jsx";

function App() {
  return (
    <Router>
    <div className="font-sans">
        <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/package" element={<Package />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
