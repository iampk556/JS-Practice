
// create a prompt asking users information

// user 1 details
let studentOneName = prompt("What is the student One name?");
console.log(studentOneName);

let subjectOne = "Maths";
let subjectTwo = "Science";
let subjectThree = "English";


// reassigning a varaible value
//subjectThree = "Physics";

// declare a constant

const schoolName = "Maridiam Public School";


studentOneSubjectOneScore = prompt("How many marks did " + studentOneName + "Secured in " + subjectOne + " ");
studentOneSubjectTwoScore = prompt("How many marks did " + studentOneName + "secured in " + subjectTwo + " ");
studentOneSubjectThreeScrore = prompt("How many marks did " + studentOneName + "secured in " + subjectThree + " ");

console.log(studentOneName, "secured " + studentOneSubjectOneScore + " marks in " + subjectOne + " ");
console.log(studentOneName, "secured " + studentOneSubjectTwoScore + " marks in " + subjectTwo);
console.log(studentOneName, "secured " + studentOneSubjectThreeScrore + " marks in " + subjectThree);



// user 2 details

let studentTwoName = prompt("What is the student two name?");
studentTwoSubjectOneScore = prompt("How many marks did " + studentTwoName + " secured in " + subjectOne + " ");
studentTwoSubjectTwoScore = prompt("How many marks did " + studentTwoName + " scored in " + subjectTwo + " ");
studenTwoSubjectThreeScore = prompt("How many marks did " + studentTwoName + " secured in " + subjectThree + " ");

// print the student two marks
console.log(studentTwoName, "secured " + studentTwoSubjectOneScore + " marks in " + subjectOne + " ");
console.log(studentTwoName, "secured " + studentTwoSubjectTwoScore + " marks in " + subjectTwo + " ");
console.log(studentTwoName, "secured" + studenTwoSubjectThreeScore + " marks in " + subjectThree + " ");


// compare s1 and s2

// subject one topper
if (studentOneSubjectOneScore > studentOneSubjectTwoScore)
    console.log(studentOneName, " is a top student in " + subjectOne + " ");
else console.log(studentTwoName, " is a top student in " + subjectOne + " ");


// subject two topper

if (studentOneSubjectTwoScore > studentTwoSubjectTwoScore)
    console.log(studentOneName, " is topper in " + subjectTwo + " ");
else console.log(studentTwoName, "is a topper in " + subjectTwo + " ");


// find the top student

if (studentOneSubjectOneScore + studentOneSubjectTwoScore + studentOneSubjectThreeScrore > studentTwoSubjectOneScore + studentTwoSubjectTwoScore + studenTwoSubjectThreeScore)
    console.log(studentOneName, " is top student in all subjects");
else console.log(studentTwoName, " is a top student in all subjects");

// find if any student has secured 100 marks in any subject.
// if at least one subject they get 100, they are eligible for an award

let fullscore = 99;
if (studentOneSubjectOneScore >= fullscore || studentOneSubjectTwoScore >= fullscore || studentOneSubjectThreeScrore >= fullscore) {
    console.log(studentOneName, " is eligible for an award")
} else {
    console.log(studentOneName, "is not eligible for an award");

}


// find if a student got fulscores in all subjects

if (studentOneSubjectOneScore || studentTwoSubjectOneScore >= fullscore && studentOneSubjectTwoScore || studentTwoSubjectTwoScore >= fullscore && studentOneSubjectThreeScrore || studenTwoSubjectThreeScore >= fullscore) {
    console.log(studentOneName, " has scored full marks in all subjects")
}


if (studentOneSubjectOneScore >= fullscore &&
    studentOneSubjectTwoScore >= fullscore &&
    studentOneSubjectThreeScrore >= fullscore) {
    console.log(studentOneName, " has full scores in all subjects!");
}

if (studentTwoSubjectOneScore >= fullscore &&
    studentTwoSubjectTwoScore >= fullscore &&
    studenTwoSubjectThreeScore >= fullscore) {
    console.log(studentTwoName, "has scored full marks in all subjects");

}



// print if no one has scored full marks in all subjects

if (!(studentOneSubjectOneScore >= fullscore &&
    studentOneSubjectTwoScore >= fullscore &&
    studentOneSubjectThreeScrore >= fullscore) &&

    !(studentTwoSubjectOneScore >= fullscore &&
        studentTwoSubjectTwoScore >= fullscore &&
        studentTwoSubjectThreeScore >= fullscore)) {
    console.log(" No one scroed full marks")
}

// let subjectOne = prompt("what is the subject one");
// let subjectTwo = prompt("What is the subject two");
// let subjectThree = prompt("What is the subject threee");
// // display the list of subjects
// console.log(studentOneName, "is studying", subjectOne, subjectTwo, subjectThree, "subjects in this semester");

// let subjectOneScore = prompt("How many marks did " + studentOneName + " secured in " + subjectOne + "?");
// console.log(studentOneName, "sectured " + subjectOneScore + " in " + subjectOne + " ");

//calculate the marks of a student and display

/*
let s1 = 'PK';
let s1_id = 1;

s1_maths = 90;
s1_science = 98;
s1_chemistry = 38;
s1_english = 8;

let s2 = "VK"
let s2_id = 2;

// write down the scores of s2 student

s2_maths = 60;
s2_science = 90;
s2_chemistry = 90;
s2_english = 89;

s1totalmarks = s1_maths + s1_science + s1_chemistry + s1_english;
if (s1totalmarks > 100) console.log(s1, 'is a top student');
else
    console.log(s1, 'is not a top student');

// // announce the results of each subject

if (s1_maths > 35) console.log('You are pass in Mathematics');
else console.log(s1, "You failed in mathematics");

if (s1_science > 35) console.log(s1, "You are pass in science");
else console.log("you failed in science");

if (s1_chemistry > 35) console.log(s1, "You are pass in chemstry");
else console.log("You are failed");

if (s1_maths && s1_chemistry && s1_science > 35) console.log(s1, "you scored well all core subjects");

if (s1_maths || s1_chemistry || s1_science || s1_english || s1_chemistry < 35) console.log(s1, "Oops. You failed this semester!");
else console.log(s1, "You pass in this semester!");


// compare s1 vs s2

if (s1_maths > s2_maths) console.log(s1, " is the topper in maths")
else console.log(s2, "is the topper in maths");
console.log(s1_maths);
console.log(s2_maths);



// find the top student among
s2totalmarks = s2_maths + s2_science + s2_chemistry + s2_english;
if (s1totalmarks > s2totalmarks) console.log(s1, "is the topper");
else console.log(s2, "is the topper");


let javascriptIsfun = true;

// find the variable type of javascriptIsfun
console.log(typeof true);
console.log(typeof 23);
console.log(typeof "PK");


// dynamic typing
javascriptIsfun = "Of course!";
console.log(typeof javascriptIsfun);


// prompt 

let userName = prompt("What is your name?"); 
*/
