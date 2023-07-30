import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Liste from "./pages/Liste/Liste";
import Zimmer from "./pages/Zimmer/Zimmer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Liste />} />
        <Route path="/hotels/:id" element={<Zimmer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
