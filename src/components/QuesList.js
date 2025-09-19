import React, { useState, useEffect } from "react";
import { questions } from "../data";
import Ques from "./Ques";
import Answer from "./Answer";
import { useNavigate } from "react-router-dom";
import "./QuesList.css";

export default function QuesList({ isShowAns, setIsShowAns, quizConfig }) {
  const [elements, setElements] = useState([]);
  const [answers, setAnswers] = useState({});
  const [checkMark, setCheckMark] = useState(0);
  const [wrongAnsArray, setWrongAnsArray] = useState([]);
  const [timer, setTimer] = useState(0);
  const [time, setTime] = useState();
  const [digitalClock, setDigitalClock] = useState("00:00:00");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [timeBonus, setTimeBonus] = useState(0);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!isShowAns && !showResult) {
      const questionCount = quizConfig?.questionCount || 5;
      
      // Create a shuffled array of all question indices
      const allIndexes = Array.from({ length: questions.length }, (_, i) => i);
      const shuffledIndexes = allIndexes.sort(() => Math.random() - 0.5);
      
      // Take the first questionCount questions
      const selectedIndexes = shuffledIndexes.slice(0, questionCount);
      
      const randomQuestions = selectedIndexes.map((index) => questions[index]);
      console.log('Selected indexes:', selectedIndexes);
      console.log('Random questions created:', randomQuestions);
      console.log('Random questions length:', randomQuestions.length);
      setElements(randomQuestions);
    }
  }, [isShowAns, showResult, quizConfig]);

  useEffect(() => {
    let intevelId = setInterval(() => {
      setTimer((prevTime) => {
        setDigitalClockTime(prevTime + 1);
        return prevTime + 1;
      });
    },1000);
    setTime(intevelId);
    return () => clearInterval(time);
  },[]);

  function submitHandler(e) {
    e.preventDefault();
    console.log('Submit handler called - currentQuestion:', currentQuestion, 'elements.length:', elements.length);
    const finalScore = checkMarks();
    const finalPercentage = Math.round((finalScore / elements.length) * 100);
    const bonus = Math.max(0, 100 - timer); // Time bonus (less time = more bonus)
    
    setScore(finalScore);
    setPercentage(finalPercentage);
    setTimeBonus(bonus);
    setIsShowAns(true);
    setShowResult(true);
    clearInterval(time);
    
    // Save to localStorage
    const quizResult = {
      score: finalScore,
      total: elements.length,
      percentage: finalPercentage,
      time: timer,
      timeBonus: bonus,
      category: quizConfig?.category || 'general',
      difficulty: quizConfig?.difficulty || 'easy',
      date: new Date().toISOString()
    };
    
    const existingResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    existingResults.push(quizResult);
    localStorage.setItem('quizResults', JSON.stringify(existingResults));
  }

  function nextQuestion(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('Next button clicked - currentQuestion:', currentQuestion, 'elements.length:', elements.length);
    if (currentQuestion < elements.length - 1) {
      console.log('Advancing to question:', currentQuestion + 1);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log('Cannot advance - already at last question');
    }
  }

  function prevQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setAnswers({});
    setCheckMark(0);
    setWrongAnsArray([]);
    setTimer(0);
    setDigitalClock("00:00:00");
    setIsShowAns(false);
    setShowResult(false);
    setScore(0);
    setPercentage(0);
    setTimeBonus(0);
  }
  console.log(timer);
  function setDigitalClockTime(currTime) {
    let temp = currTime;
    let sec;
    let min;
    let hours;
    if (currTime < 60) {
      sec = currTime;
    }
    if (currTime >= 60) {
      min = Math.floor(currTime / 60);
      sec = temp % 60;
    }
    if (min > 60) {
      hours = Math.floor(min / 60);
      min = min % 60;
    }

    hours = hours ? hours : "00";
    min = min ? min : "00";
    sec = sec > 9 ? sec : `0${sec}`;
    const digitalTime = `${hours}:${min}:${sec}`;
    // console.log({digitalTime})
    setDigitalClock(digitalTime);
  }

  function checkMarks() {
    const tempArr = [];
    let count = 0;
    
    // Check each question in the quiz
    elements.forEach((element) => {
      const userAnswer = answers[element.id];
      if (userAnswer === element.correct_answer) {
        count++;
      } else {
        // Add to wrong answers array if user answered incorrectly or didn't answer
        tempArr.push(element.id);
      }
    });

    setCheckMark(count);
    setWrongAnsArray(tempArr);
    return count;
  }

  if (showResult) {
    return (
      <div className="results-container">
        <div className="results-card">
          <div className="results-header">
            <h2>Quiz Complete! 🎉</h2>
            <div className="score-display">
              <div className="main-score">
                <span className="score-number">{score}</span>
                <span className="score-total">/{elements.length}</span>
              </div>
              <div className="percentage">{percentage}%</div>
            </div>
          </div>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">⏱️</div>
              <div className="stat-content">
                <div className="stat-value">{digitalClock}</div>
                <div className="stat-label">Time Taken</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">⚡</div>
              <div className="stat-content">
                <div className="stat-value">+{timeBonus}</div>
                <div className="stat-label">Time Bonus</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🎯</div>
              <div className="stat-content">
                <div className="stat-value">{percentage}%</div>
                <div className="stat-label">Accuracy</div>
              </div>
            </div>
          </div>

          <div className="performance-message">
            {percentage >= 90 && <p className="excellent">Excellent work! You're a quiz master! 🌟</p>}
            {percentage >= 70 && percentage < 90 && <p className="good">Great job! You did really well! 👍</p>}
            {percentage >= 50 && percentage < 70 && <p className="average">Not bad! Keep practicing! 💪</p>}
            {percentage < 50 && <p className="needs-improvement">Don't give up! Practice makes perfect! 🚀</p>}
          </div>

          <div className="action-buttons">
            <button className="btn-primary" onClick={restartQuiz}>
              Try Again
            </button>
            <button className="btn-secondary" onClick={() => navigate("/")}>
              New Quiz
            </button>
          </div>
        </div>
        
        {/* Answer Review Section */}
        <div className="answer-review-section">
          <h3>Answer Review</h3>
          <div className="answers-container">
            {elements.map((question, index) => (
              <Answer
                key={question.id}
                idx={question.id}
                question={question.question}
                correctAnswer={question.correct_answer}
                wrongAnsArray={wrongAnsArray}
                userAnswer={answers[question.id]}
                questionNumber={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Show loading state while questions are being loaded
  if (elements.length === 0) {
    return (
      <div className="quiz-content">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading questions...</p>
        </div>
      </div>
    );
  }

  
  
  console.log('Rendering question:', currentQuestion + 1, 'of', elements.length);
  console.log('Current question data:', elements[currentQuestion]);
  console.log('Elements array:', elements);
  console.log('Elements array length:', elements.length);
  
  return (
    <div className="quiz-content">
      <div className="quiz-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestion + 1) / elements.length) * 100}%` }}
          ></div>
        </div>
        <div className="progress-text">
          Question {currentQuestion + 1} of {elements.length}
        </div>
      </div>

      <div className="timer-display">
        <div className="timer-icon">⏱️</div>
        <div className="timer-text">{digitalClock}</div>
      </div>

      <div className="question-container">
        <form onSubmit={submitHandler}>
          <Ques
            key={elements[currentQuestion]?.id}
            idx={elements[currentQuestion]?.id}
            question={elements[currentQuestion]?.question}
            options={elements[currentQuestion]?.options}
            answers={answers}
            setAnswers={setAnswers}
            questionNumber={currentQuestion + 1}
          />
          
          <div className="navigation-buttons">
            <button 
              type="button" 
              className="nav-btn prev-btn"
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
            >
              ← Previous
            </button>
            
            {currentQuestion < elements.length - 1 ? (
              <button 
                type="button" 
                className="nav-btn next-btn"
                onClick={nextQuestion}
              >
                Next →
              </button>
            ) : (
              <button type="submit" className="submit-btn">
                Submit Quiz
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
