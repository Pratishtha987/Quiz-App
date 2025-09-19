import React from 'react'
import "./Answer.css"

export default function Answer({idx, question, correctAnswer, wrongAnsArray, userAnswer, questionNumber}) {
    const isCorrect = !wrongAnsArray.includes(idx);
    
    return (
      <div className={`answer-card ${isCorrect ? 'correct' : 'incorrect'}`}>
        <div className="answer-header">
          <div className="question-number">Q{questionNumber}</div>
          <h3 className="answer-question">{question}</h3>
          <div className={`answer-status ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? '✓ Correct' : '✗ Incorrect'}
          </div>
        </div>
        
        <div className="answer-content">
          <div className="correct-answer">
            <span className="answer-label">Correct Answer:</span>
            <span className="answer-text">{correctAnswer}</span>
          </div>
          
          {userAnswer && userAnswer !== correctAnswer && (
            <div className="user-answer">
              <span className="answer-label">Your Answer:</span>
              <span className="answer-text">{userAnswer}</span>
            </div>
          )}
          
          {!userAnswer && (
            <div className="no-answer">
              <span className="answer-label">Your Answer:</span>
              <span className="answer-text no-answer-text">No answer provided</span>
            </div>
          )}
        </div>
      </div>
    );
  }