export default function QuestionCard({
  question,
  revealAnswer
}) {
  return (
    <div className="question-card">
      <h2>Challenge</h2>

      <p>{question.text}</p>

      <h3>{question.question}</h3>

      {revealAnswer && (
        <div className="answer">
          Answer: {question.answer}
        </div>
      )}
    </div>
  );
}