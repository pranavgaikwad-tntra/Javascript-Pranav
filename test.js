function Averagescore(students) {
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    total = total + students[i].score;
  }
  let average = total / students.length;
  return average;
}

function Highestscore(students) {
  let highest = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].score > highest.score) {
      highest = students[i];
    }
  }
  return highest;
}

function Lowestscore(students) {
  let lowest = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].score < lowest.score) {
      lowest = students[i];
    }
  }
  return lowest;
}

function GradeDistribution(students) {
  let grades = { A: 0, B: 0, C: 0, D: 0, F: 0 };

  for (let i = 0; i < students.length; i++) {
    let score = students[i].score;

    if (score >= 90) {
      grades.A = grades.A + 1;
    } else if (score >= 80) {
      grades.B = grades.B + 1;
    } else if (score >= 70) {
      grades.C = grades.C + 1;
    } else if (score >= 60) {
      grades.D = grades.D + 1;
    } else {
      grades.F = grades.F + 1;
    }
  }

  return grades;
}

function RetakeStudents(students) {
  let retakeList = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score < 60) {
      retakeList.push(students[i].name);
    }
  }
  return retakeList;
}

// MAIN FUNCTION
function gradeAnalyzer(students) {
  let average = Averagescore(students);
  let highest = Highestscore(students);
  let lowest = Lowestscore(students);
  let grades = GradeDistribution(students);
  let retakeList = RetakeStudents(students);

  console.log("Average Score:", average.toFixed(2));
  console.log("Highest Score:", highest.name, "(", highest.score, ")");
  console.log("Lowest Score:", lowest.name, "(", lowest.score, ")");
  console.log("Grade Distribution:", grades);
  console.log("Students needing retake:", retakeList);
}

// --- Student Data ---
const students = [
  { name: "Aarav", score: 95 },
  { name: "Diya", score: 88 },
  { name: "Ishaan", score: 72 },
  { name: "Ananya", score: 64 },
  { name: "Rohan", score: 29 },
  { name: "Meera", score: 91 },
  { name: "Kabir", score: 83 },
  { name: "Pranav", score: 100 },
  { name: "Arjun", score: 67 },
  { name: "Neha", score: 54 },
  { name: "Saanvi", score: 38 },
  { name: "Vikram", score: 85 },
  { name: "Kiran", score: 62 },
  { name: "Reema", score: 79 },
  { name: "Dev", score: 48 },
];


gradeAnalyzer(students);
