// Theme color - #646cff, #747bff
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import VehicleModels from "./pages/VehicleModels";
import Testimonials from "./pages/Testimonials";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="appContainer bg-gradient-to-b from-white via-gray-200 to-slate-200">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path = "/" element={<Home />} />
            <Route path = "/about-bike-rental" element={<About />} />
            <Route path="/vehicle-models-available" element={<VehicleModels />} />
            <Route path="/hear-from-our-customers" element={<Testimonials />} />
            <Route path="/meet-our-team" element={<Team />} />
            <Route path="/reach-out-to-us" element={<Contact />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
