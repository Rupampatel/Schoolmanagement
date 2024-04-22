import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

import Facilities from "./pages/Facilities";
import Testinomial from "./pages/Testinomial";
import Ourteam from "./pages/Ourteam";
import Addmision from "./pages/Addmision";
import Contact from "./pages/Contact";
import Testimonial from "./components/Testimonial";

import reviews from "./data";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/About" element={<About />} />
        <Route path="/Facilities" element={<Facilities />} />
        <Route
          path="/Testinomial"
          element={<Testimonial reviews={reviews} />}
        />
        <Route path="/Ourteam" element={<Ourteam />} />
        <Route path="/Addmision" element={<Addmision />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
