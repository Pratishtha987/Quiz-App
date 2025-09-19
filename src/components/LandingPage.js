import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./LandingPage.css";

export default function LandingPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  const [selectedQuestions, setSelectedQuestions] = useState(5);

  const categories = [
    { value: "general", label: "General Knowledge", icon: "📋" },
    { value: "science", label: "Science & Technology", icon: "🔬" },
    { value: "history", label: "History & Politics", icon: "📊" },
    { value: "geography", label: "Geography", icon: "🌐" },
    { value: "literature", label: "Literature & Arts", icon: "📚" },
    { value: "business", label: "Business & Finance", icon: "💼" }
  ];

  const difficulties = [
    { value: "easy", label: "Beginner", color: "#2563eb" },
    { value: "medium", label: "Intermediate", color: "#7c3aed" },
    { value: "hard", label: "Advanced", color: "#dc2626" }
  ];

  const questionCounts = [5, 10, 15, 20, 25];

  const handleStartQuiz = () => {
    navigate("/quiz", { 
      state: { 
        category: selectedCategory, 
        difficulty: selectedDifficulty, 
        questionCount: selectedQuestions 
      } 
    });
  };

  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Knowledge Assessment
          </h1>
          <p className="hero-subtitle">
            Test your knowledge with our interactive quiz platform. 
            Choose your domain and difficulty level to get started.
          </p>
        </div>
      </div>

      <div className="assessment-config">
        <div className="config-container">
          <div className="config-header">
            <h2>Assessment Configuration</h2>
            <p>Configure your knowledge evaluation parameters</p>
          </div>
          
          <div className="config-grid">
            <div className="config-panel">
              <div className="panel-header">
                <h3>Knowledge Domain</h3>
                <span className="panel-subtitle">Select assessment subject area</span>
              </div>
              <div className="domain-grid">
                {categories.map(category => (
                  <div
                    key={category.value}
                    className={`domain-card ${selectedCategory === category.value ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.value)}
                  >
                    <div className="domain-icon">{category.icon}</div>
                    <div className="domain-content">
                      <h4>{category.label}</h4>
                      <p>Comprehensive evaluation</p>
                    </div>
                    <div className="domain-indicator"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="config-panel">
              <div className="panel-header">
                <h3>Proficiency Level</h3>
                <span className="panel-subtitle">Set difficulty threshold</span>
              </div>
              <div className="level-selector">
                {difficulties.map(difficulty => (
                  <div
                    key={difficulty.value}
                    className={`level-option ${selectedDifficulty === difficulty.value ? 'active' : ''}`}
                    onClick={() => setSelectedDifficulty(difficulty.value)}
                  >
                    <div className="level-indicator" style={{ '--color': difficulty.color }}></div>
                    <span className="level-label">{difficulty.label}</span>
                    <div className="level-description">
                      {difficulty.value === 'easy' && 'Basic concepts and fundamentals'}
                      {difficulty.value === 'medium' && 'Intermediate knowledge and application'}
                      {difficulty.value === 'hard' && 'Advanced expertise and complex scenarios'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="config-panel">
              <div className="panel-header">
                <h3>Assessment Duration</h3>
                <span className="panel-subtitle">Configure question count</span>
              </div>
              <div className="duration-selector">
                {questionCounts.map(count => (
                  <div
                    key={count}
                    className={`duration-option ${selectedQuestions === count ? 'active' : ''}`}
                    onClick={() => setSelectedQuestions(count)}
                  >
                    <div className="duration-number">{count}</div>
                    <div className="duration-label">Questions</div>
                    <div className="duration-time">
                      {count * 2}-{count * 3} min
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="action-section">
            <button className="launch-assessment-btn" onClick={handleStartQuiz}>
              <div className="btn-content">
                <span className="btn-text">Launch Assessment</span>
                <div className="btn-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="btn-shine"></div>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="enterprise-features">
        <div className="features-container">
          <div className="features-header">
            <h2>Enterprise-Grade Features</h2>
            <p>Built for professional organizations and educational institutions</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Advanced Analytics</h3>
              <p>Comprehensive performance metrics and detailed reporting for data-driven insights</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 15L8 11H16L12 15ZM12 15L12 3M12 15L16 19H8L12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Adaptive Assessment</h3>
              <p>Intelligent question selection based on performance and knowledge gaps</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22S2 18 2 12S6 2 12 2S22 6 22 12S12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Real-time Monitoring</h3>
              <p>Live progress tracking and instant feedback for optimal learning outcomes</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M7.188 2.239L6.5 3.5L5.812 2.239M16.188 2.239L16.5 3.5L17.188 2.239M7.188 21.761L6.5 20.5L5.812 21.761M16.188 21.761L16.5 20.5L17.188 21.761M12 2.5V3.5M12 20.5V21.5M2.5 12H3.5M20.5 12H21.5M4.5 4.5L5.5 5.5M18.5 4.5L17.5 5.5M4.5 19.5L5.5 18.5M18.5 19.5L17.5 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Enterprise Security</h3>
              <p>Bank-level encryption and compliance with industry security standards</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
