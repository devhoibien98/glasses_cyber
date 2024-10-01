import { Container } from "react-bootstrap";
import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage";
import GlassesApp from "./Component/Glasses/Glasses";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/glasses" element={<GlassesApp />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
