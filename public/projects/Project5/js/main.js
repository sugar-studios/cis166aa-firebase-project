//create an array 5 arrays
//each inner array should contain a name and a number grade
const students = [
    ["David", 80],
    ["Victor", 77],
    ["Tracey", 55],
    ["Jason", 95],
    ["Raymond", 69]
  ];
  
  //create a function called getGrade with a parameter of value
  //inside the function, create an if/else statement that accounts for grades and values from F to A
  function getGrade(value) {
    if (value >= 90) return "A";
    else if (value >= 80) return "B";
    else if (value >= 70) return "C";
    else if (value >= 60) return "D";
    else return "F";
  }
  
  //create a for loop that iterates through the length of the students array and increments by 1 with each loop
  function displayGrades() {
    let output = "";
    for (let i = 0; i < students.length; i++) {
      let name = students[i][0];
      let numGrade = students[i][1];
      let letterGrade = getGrade(numGrade);
      
      //inside the for loop, use a method of your choice (NOT document.write()) to output a string of text that reads like the following example: 
      //David's number grade is 80 and letter grade is a B
      output += `${name}'s number grade is ${numGrade} and letter grade is a ${letterGrade}.<br>`;
      console.log(`${name}'s number grade is ${numGrade} and letter grade is a ${letterGrade}.`);
    }
    // Append output to the HTML body
    document.body.innerHTML += `<p>${output}</p>`; 
  }
  
  // Run function when the page loads
  document.addEventListener("DOMContentLoaded", displayGrades);
  