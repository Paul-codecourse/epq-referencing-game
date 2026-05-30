const students = [];

for (let i = 1; i <= 47; i++) {
  students.push({
    id: i,
    name: `Individual${i}`,
    team:
      i <= 16
        ? "Team 1"
        : i <= 32
        ? "Team 2"
        : "Team 3",
    score: 0
  });
}

export default students;