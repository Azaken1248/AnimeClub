import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Screens/HomePage";
import AboutUs from "./Screens/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/AnimeClub" element={<HomePage />} />
        <Route path="/AnimeClub/aboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
