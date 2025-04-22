import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<About />} />
      <Route path="/" element={<Contact />} />
      <Route path="/" element={<Services />} />
    </Routes>
  );
}

export default App;