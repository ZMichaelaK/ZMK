import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Misc/Navbar";
import Aboutme from "./components/Misc/Aboutme";
import Homepage from "./components/Misc/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ParentComponent from "./components/Maths/ParentComponent";
// import Pet from "./components/Pet"

function App() {
  return (
    <header>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Aboutme" element={<Aboutme />} />
          {/* <Route path="/update/:id" element={<ItemEdit />} /> */}
          <Route path="/ParentComponent" element={<ParentComponent />} />
        </Routes>
      </Router>
    </header>
  );
}
export default App;
