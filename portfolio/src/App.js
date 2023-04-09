import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './css/style.css';
import Home from './pages'
import Projects from './pages/projects'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </Router>
  );
}

export default App;
