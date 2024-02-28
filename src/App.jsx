import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
