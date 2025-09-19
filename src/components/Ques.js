import "./Ques.css";

export default function Ques({ idx, question, options, setAnswers, questionNumber }) {
  function selectedAnsHandler(e) {
    setAnswers((prevAns) => {
      const newAnswers = { ...prevAns };
      newAnswers[idx] = e.target.value;
      return newAnswers;
    });
  }

  return (
    <div className="question-card">
      <div className="question-header">
        <span className="question-number">Q{questionNumber}</span>
        <h3 className="question-text">{question}</h3>
      </div>
      
      <div className="options-container">
        {options && options.map((option, optionIdx) => (
          <label key={optionIdx} className="option-label">
            <input
              type="radio"
              name={question}
              value={option}
              onChange={selectedAnsHandler}
              className="option-input"
            />
            <span className="option-text">{option}</span>
            <span className="option-indicator"></span>
          </label>
        ))}
      </div>
    </div>
  );
}
