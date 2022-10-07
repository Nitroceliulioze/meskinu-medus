import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ApieMusPage from "./pages/ApieMusPage";
import KontaktaiPage from "./pages/KontaktaiPage";
import MainPage from "./pages/MainPage";
import ProduktaiPage from "./pages/ProduktaiPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/produktai" element={<ProduktaiPage/>} />
            <Route path="/apiemus" element={<ApieMusPage/>} />
            <Route path="/kontaktai" element={<KontaktaiPage/>} />          
          </Routes> 
      <Footer/>
    </Router>    
  );
}

export default App;
