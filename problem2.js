function calculateGrade(marks) {
    if (marks > 90) {
      return 'A Grade';
    } else if (marks >= 70 && marks <= 90) {
      return 'B Grade';
    } else if (marks >= 50 && marks < 70) {
      return 'C Grade';
    } else {
      return 'F Grade';
    }
  }
  
  // Example usage:
  const student1Marks = 95;
  const student2Marks = 80;
  const student3Marks = 60;
  
  console.log('Student 1:', calculateGrade(student1Marks));
  console.log('Student 2:', calculateGrade(student2Marks));
  console.log('Student 3:', calculateGrade(student3Marks));
  