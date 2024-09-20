// chapter 10-14

// chapter10(if statements)
// Q1
// var city = "karachi"
// if(city==="karachi"){
// console.log("The City Of Lights")
// }
// in the statement use '===' for comparison, not '='
// Q2
// var x =prompt("Please enter the value of x:")
// var y =prompt("Please enter the value of y:")
// if (x === y) {
//     var z = prompt("Please enter the value of z:");
//     console.log("The value of z is: " + z);
// }
// Q3

// var zipcode= +prompt("Enter a zip code")
// if(zipcode===10010){
// alert("Karachi")
// }
// else{
//     alert("Please write correct city")
// }
// Q4
// var x = 5; 
// if (x === 5) {
//     x = 1;  
//     console.log("The value of x has been changed to: " + x);
// }

// chapter 11 comparision operator
// Q1
// if (x !== y) {

// }
// Q2
// if (x <= y) {

// }
// Q3
// var num = 10
// if(num!==5){
// num = 5
// }
// console.log(num)
// Q4
// var num = 10
// if(num!==5){
// num = 5
// }
// alert("Congratulation the number are not equal")
// Q5
// var firstname = prompt("Enter your name")
// if(firstname !=="zaid"){
// alert("No Match");
// }

// Chapter 12 (if…else and else if statements)
// Q1
// var num1 = 10
// var num2 = 5
// if(num1 >= num2){
//      alert("num1 is greater than or equal to num2");
// }
//    else{
//     alert("num1 is less than num2");
//    }
// Q2
// var marks1 = +(prompt("Enter marks for subject 1:"));
// var marks2 = +(prompt("Enter marks for subject 2:"));
// var marks3 = +(prompt("Enter marks for subject 3:"));
// var marks4 = +(prompt("Enter marks for subject 4:"));
// var marks5 = +(prompt("Enter marks for subject 5:"));
// var totalMarks = 500;  
// var obtainedMarks = marks1 + marks2 + marks3 + marks4 + marks5;
// var percentage = (obtainedMarks / totalMarks) * 100;
// var grade;
// if (percentage >= 90) {
//   grade = "A+";
// } else if (percentage >= 80) {
//   grade = "A";
// } else if (percentage >= 70) {
//   grade = "B";
// } else if (percentage >= 60) {
//   grade = "C";
// } else if (percentage >= 50) {
//   grade = "D";
// } else {
//   grade = "F";
// }
// alert("Total Marks: " + obtainedMarks + "\nPercentage: " + percentage.toFixed(2) + "%\nGrade: " + grade);
// Q3\
// var a=10
// if (a === 10) {
//     alert("a is 10");
//     }
//     else{
// alert("The correct value of a is 10")
//     }
// Q4
// var city = prompt("Enter your city:");
// if (city === "Karachi") {
//   alert("You entered Karachi, the City of Lights!");
// } else if (city === "Lahore") {
//   alert("You entered Lahore, the Heart of Pakistan!");
// } else {
//   alert("You entered a different city.");
// }

// Chapter 13 (Testing sets of conditions)
// Q1
// if (a === b && c === d) {
// }
// Q2
// if (a === b || c != d) {
// }
// Q3
// if ( (name === "Hamza" || name === "Arsalan") && age < 60) {
// }
// Q4
// var num1 = 5;
// var num2 = 10;
// if(num1 < num2 || num1 > num2){
//     alert("The first variable is either less than or greater than the second variable.");   
// }
// Q5
// var firstname = "muhammad";
// var lastname = "zaid";
// var userFirstName = prompt("Please enter your first name:");
// var userLastName = prompt("Please enter your last name:");
// if (userFirstName === firstName && userLastName === lastName) {
//     alert("Your names match!");
// }

// chapter 14 (if statements nested)
// Q1
// var password = "yourPassword";
// if (password !== "") { 
//     if (password.length <= 5) { 
//         alert("Password must be greater than 5");
//     } else { 
//         alert("OK");
//     }
// }
// Q2
// if(a===1){
//     if(c === "Max"){
// alert("Ok")
//     }
// }
// Q3
// if (a === 1 && c === "Max") {
// }
// Q4
// var num1 = 10; 
// var num2 = 10;
// if (num1 === num2) { 
//     if (num1 <= num2) { 
//         alert("Both conditions are true.");
//     }
// }



// chapter 12-13
// Q1

// Q2

// var num1 = parseInt(prompt("Enter the first integer:"), 10);
// var num2 = parseInt(prompt("Enter the second integer:"), 10);
// if ((num1) || isNaN(num2)) {
//     alert("Please enter valid integers.");
// } else {
//     if (num1 > num2) {
//         alert("The larger number is: " + num1);
//     } else if (num2 > num1) {
//         alert("The larger number is: " + num2);
//     } else {
//         alert("The two integers are equal.");
//     }
// }

// Q3
// var number = +(prompt("Enter a number:"));

// if (isNaN(number)) {
//     alert("Please enter a valid number.");
// } else {
//     if (number > 0) {
//         alert("The number is positive.");
//     } else if (number < 0) {
//         alert("The number is negative.");
//     } else {
//         alert("The number is zero.");
//     }
// }
// Q4
// Q5
// var correctPassword = "securePassword123"; 
// var userPassword = prompt("Please enter your password:");
// if (!userPassword) {
//     alert("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password.");
// } else {
//     alert("Incorrect password.");
// }

// Q6
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// Q7