import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
import Comet from "./Comet";
import Home from "./Home";
import Moon from "./Moon";
import Saturn from "./Saturn";

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/moon">Moon</Link>
        <Link to="/saturn">Saturn</Link>
        <Link to="/comet">Comet</Link>
      </header>
      <Routes>
        <Route path="/comet" element={<Comet/>} />
        <Route path="/saturn" element={<Saturn />} />
        <Route path="/moon" element={<Moon />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
