/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const result = 59;

if (result >= 90) {
  console.log("The grade is: A");
} else if (result >= 80) {
  console.log("The grade is: B");
} else if (result >= 70) {
  console.log("The grade is: C");
} else if (result >= 60) {
  console.log("The grade is: D");
} else if (result <= 59) {
  console.log("The grade is: F");
}

let bangla = 92;
let english = 85;
let math = 98;
let biology = 92;
let chemestry = 89;
let physics = 86;

let gpBangla =
  bangla >= 80
    ? 4.0
    : bangla >= 70
    ? 3.5
    : bangla >= 60
    ? 3.0
    : bangla >= 50
    ? 2.5
    : bangla >= 40
    ? 2.0
    : 0.0;

let gpEnglish =
  english >= 80
    ? 4.0
    : english >= 70
    ? 3.5
    : english >= 60
    ? 3.0
    : english >= 50
    ? 2.5
    : english >= 40
    ? 2.0
    : 0.0;

let gpMath =
  math >= 80
    ? 4.0
    : math >= 70
    ? 3.5
    : math >= 60
    ? 3.0
    : math >= 50
    ? 2.5
    : math >= 40
    ? 2.0
    : 0.0;

let gpBiology =
  biology >= 80
    ? 4.0
    : biology >= 70
    ? 3.5
    : biology >= 60
    ? 3.0
    : biology >= 50
    ? 2.5
    : biology >= 40
    ? 2.0
    : 0.0;

let gpChemestry =
  chemestry >= 80
    ? 4.0
    : chemestry >= 70
    ? 3.5
    : chemestry >= 60
    ? 3.0
    : chemestry >= 50
    ? 2.5
    : chemestry >= 40
    ? 2.0
    : 0.0;

let gpPhysics =
  physics >= 80
    ? 4.0
    : physics >= 70
    ? 3.5
    : physics >= 60
    ? 3.0
    : physics >= 50
    ? 2.5
    : physics >= 40
    ? 2.0
    : 0.0;

// Check for any failed subject
if (
  gpBangla === 0.0 ||
  gpEnglish === 0.0 ||
  gpMath === 0.0 ||
  gpBiology === 0.0 ||
  gpChemestry === 0.0 ||
  gpPhysics === 0.0
) {
  console.log("GPA: 0.00 (YOU ARE FAILED!)");
} else {
  // check for GPA
  let totalGp =
    gpBangla + gpEnglish + gpMath + gpBiology + gpChemestry + gpPhysics;
  let GPA = totalGp / 6;
  console.log("GPA:", GPA.toFixed(2));
}

// Using IF ELSE

let gpBangla1;
let gpEnglish1;
let gpMath1;
let gpBiology1;
let gpChemestry1;
let gpPhysics1;

if (bangla >= 80) gpBangla1 = 4.0;
else if (bangla >= 70) gpBanngla1 = 3.5;
else if (bangla >= 60) gpBangla1 = 3.0;
else if (bangla >= 50) gpBangla1 = 2.5;
else if (bangla >= 40) gpBangla1 = 2.0;
else gpBangla1 = 0.0;

if (english >= 80) gpEnglish1 = 4.0;
else if (english >= 70) gpBEnglish1 = 3.5;
else if (english >= 60) gpEnglish1 = 3.0;
else if (english >= 50) gpEnglish1 = 2.5;
else if (english >= 40) gpEnglish1 = 2.0;
else gpEnglish1 = 0.0;

if (math >= 80) gpMath1 = 4.0;
else if (math >= 70) gpBMath1 = 3.5;
else if (math >= 60) gpMath1 = 3.0;
else if (math >= 50) gpMath1 = 2.5;
else if (math >= 40) gpMath1 = 2.0;
else gpMath1 = 0.0;

if (biology >= 80) gpBiology1 = 4.0;
else if (biology >= 70) gpBiology1 = 3.5;
else if (biology >= 60) gpBiology1 = 3.0;
else if (biology >= 50) gpBiology1 = 2.5;
else if (biology >= 40) gpBiology1 = 2.0;
else gpBiology1 = 0.0;

if (chemestry >= 80) gpChemestry1 = 4.0;
else if (chemestry >= 70) gpChemestry1 = 3.5;
else if (chemestry >= 60) gpChemestry1 = 3.0;
else if (chemestry >= 50) gpChemestry1 = 2.5;
else if (chemestry >= 40) gpChemestry1 = 2.0;
else gpChemestry1 = 0.0;

if (physics >= 80) gpPhysics1 = 4.0;
else if (physics >= 70) gpPhysics1 = 3.5;
else if (physics >= 60) gpPhysics1 = 3.0;
else if (physics >= 50) gpPhysics1 = 2.5;
else if (physics >= 40) gpPhysics1 = 2.0;
else gpPhysics1 = 0.0;

// check for any failed subject
if (
  gpBangla1 === 0.0 ||
  gpEnglish1 === 0.0 ||
  gpMath === 0.0 ||
  gpBiology === 0.0 ||
  gpChemestry === 0.0 ||
  gpPhysics === 0.0
) {
  console.log("GPA: 0.00 (You are FAILED!)");
} else {
  // check for GPA
  let totalGP1 =
    gpBangla1 + gpEnglish1 + gpMath1 + gpBiology1 + gpChemestry1 + gpPhysics1;
  let GPA1 = totalGP1 / 6;
  console.log("GPA:", GPA1.toFixed(2));
}
