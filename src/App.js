import "./App.css";
import Quiz from "./components/Quiz";
import LandingPage from "./components/LandingPage";
import ThemeToggle from "./components/ThemeToggle";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  },[]);

  return (
    <ThemeProvider>
      <div className="App">
        <div className="theme-toggle-container">
          <ThemeToggle />
        </div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
