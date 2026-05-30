export default function TeacherPanel({
  students,
  awardPoint,
  nextQuestion,
  revealAnswer
}) {
  return (
    <div className="teacher-panel">
      <h2>Teacher Controls</h2>

      <button onClick={revealAnswer}>
        Reveal Answer
      </button>

      <button onClick={nextQuestion}>
        Next Question
      </button>

      <h3>Award Point</h3>

      <select id="studentSelect">
        {students.map(student => (
          <option
            key={student.id}
            value={student.id}
          >
            {student.name}
          </option>
        ))}
      </select>

      <button
        onClick={() => {
          const id =
            Number(
              document.getElementById(
                "studentSelect"
              ).value
            );

          awardPoint(id);
        }}
      >
        +1 Point
      </button>
    </div>
  );
}