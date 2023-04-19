// ITCS227 Source Code Template for 2T AY 2022-2023
/*
    Program: Computation of Grades using Function
    Programmer: John Angelo N. Facto
    Section: BCS24
    Start Date: April 18, 2023
    End Date: April 20, 2023

*/

// Function to compute the grade based on the given formula
function computeGrade(cp, sa, examGrade) {
    return (cp * 0.3) + (sa * 0.3) + (examGrade * 0.4);
  }
  
  // Function to determine the corresponding letter grade based on the computed grade
  function getLetterGrade(grade) {
    if (grade >= 90) {
      return 'A';
    } else if (grade >= 80) {
      return 'B';
    } else if (grade >= 70) {
      return 'C';
    } else if (grade >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }
  
// Function to accept the grades of a student and compute their grade
  function computeStudentGrade() {
    // Accept the name of the student
    const prompt = require('prompt-sync')();
    const name = prompt('Enter the name of the student:');
   
    // Accept the enabling assessments
    const ea1 = parseInt(prompt('Enter enabling assessment 1:'));
    const ea2 = parseInt(prompt('Enter enabling assessment 2:'));
    const ea3 = parseInt(prompt('Enter enabling assessment 3:'));
    const ea4 = parseInt(prompt('Enter enabling assessment 4:'));
    const ea5 = parseInt(prompt('Enter enabling assessment 5:'));
  
    // Compute the average enabling assessment
    const cp = (ea1 + ea2 + ea3 + ea4 + ea5) / 5;
  
    // Accept the summative assessments
    const sa1 = parseInt(prompt('Enter summative assessment 1:'));
    const sa2 = parseInt(prompt('Enter summative assessment 2:'));
    const sa3 = parseInt(prompt('Enter summative assessment 3:'));
  
    // Compute the average summative assessment
    const sa = (sa1 + sa2 + sa3) / 3;
  
    // Accept the final examination grade
    const examGrade = parseInt(prompt('Enter major exam grade:'));
  
    // Compute the overall grade
    const grade = computeGrade(cp, sa, examGrade);
  
    // Get the corresponding letter grade
    const letterGrade = getLetterGrade(grade);
  
    // Return the results as an object
    return {
      name,
      classParticipation: cp.toFixed(2),
      summativeAssessment: sa.toFixed(2),
      examGrade,
      gradeScore: grade.toFixed(2),
      letterGrade
    };
  }
  
  // Create an array to store the results of multiple students
  const results = [];
  
  // Accept the grades of five students
  for (let i = 0; i < 5; i++) {
    results.push(computeStudentGrade());
  }
  
  // Output the results in a table
  console.table(results);
  