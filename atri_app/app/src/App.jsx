import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Component6 from "./pages/Component6.jsx";
import Component5 from "./pages/Component5.jsx";
import Component7 from "./pages/Component7.jsx";
import Demo from "./pages/Demo.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
<Route path="/component6" element={<Component6 />} />
<Route path="/component5" element={<Component5 />} />
<Route path="/component7" element={<Component7 />} />
<Route path="/demo" element={<Demo />} />
    </Routes>
  );
}
