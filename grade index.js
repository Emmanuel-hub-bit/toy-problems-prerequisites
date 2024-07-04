// Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

//         A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

function getStudentGrade() {
    let marks = parseInt(prompt("Enter the student's marks (between 0 and 100):"));

    if (marks >= 80 && marks <= 100) {
        alert(('A'));
    } else if (marks >= 60 && marks < 80) {
        alert(('B'));
    } else if (marks >= 50 && marks < 60) {
        alert(('C'));
    } else if (marks >= 40 && marks < 50) {
        alert(('D'));
    } else if (marks >= 0 && marks < 40) {
        alert(('E'));
    } else {
        alert(('Invalid input. Please enter a number between 0 and 100.'));
    }
}

getStudentGrade();
