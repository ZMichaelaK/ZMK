import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Maths from "./components/Maths/Counter";
import ParentComponent from "./components/Maths/ParentComponent";
function App() {
  return (
    <header>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Aboutme" element={<Aboutme />} />
          {/* <Route path="/update/:id" element={<ItemEdit />} /> */}
          <Route path="/Maths" element={<ParentComponent />} />
        </Routes>
      </Router>
    </header>
  );
}
export default App;
