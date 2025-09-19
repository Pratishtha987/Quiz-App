import QuesList from "./QuesList";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Quiz.css";

function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isShowAns, setIsShowAns] = useState(false);
  const [quizConfig, setQuizConfig] = useState({
    category: "general",
    difficulty: "easy",
    questionCount: 5
  });

  useEffect(() => {
    if (location.state) {
      setQuizConfig(location.state);
    }
  }, [location.state]);

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="header-content">
          <button className="back-btn" onClick={handleBackToHome}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Back to Dashboard</span>
          </button>
          <div className="quiz-title">
            <h1>Knowledge Assessment</h1>
            <div className="quiz-meta">
              <div className="meta-item">
                <span className="meta-label">Domain</span>
                <span className="meta-value">
                  {quizConfig.category.charAt(0).toUpperCase() + quizConfig.category.slice(1)}
                </span>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                <span className="meta-label">Level</span>
                <span className="meta-value">
                  {quizConfig.difficulty.charAt(0).toUpperCase() + quizConfig.difficulty.slice(1)}
                </span>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                <span className="meta-label">Questions</span>
                <span className="meta-value">{quizConfig.questionCount}</span>
              </div>
            </div>
          </div>
          <div className="header-actions">
            <div className="status-indicator">
              <div className="status-dot"></div>
              <span>In Progress</span>
            </div>
          </div>
        </div>
      </div>
      
      <QuesList 
        isShowAns={isShowAns} 
        setIsShowAns={setIsShowAns}
        quizConfig={quizConfig}
      />
    </div>
  );
}

export default Quiz;
