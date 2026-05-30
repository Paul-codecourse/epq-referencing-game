export default function Scoreboard({ students }) {
  const teamScores = students.reduce((acc, student) => {
    acc[student.team] = (acc[student.team] || 0) + student.score;
    return acc;
  }, {});

  const topStudents = [...students]
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  return (
    <div className="scoreboard">
      <h2>Team Scores</h2>

      <div className="teams">
        {Object.entries(teamScores).map(([team, score]) => (
          <div key={team} className="team-card">
            <h3>{team}</h3>
            <p>{score}</p>
          </div>
        ))}
      </div>

      <h2>Top Students</h2>

      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {topStudents.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}