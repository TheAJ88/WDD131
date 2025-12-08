// Activity 1
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join();

// Activity 2

const grades = ['A', 'B', 'A'];

function convertToPoints(grade) {
  if (grade === 'A') return 4;
  if (grade === 'B') return 3;
  if (grade === 'C') return 2;
  if (grade === 'D') return 1;
  return 0;
}

const gpaPoints = grades.map(convertToPoints);
console.log("GPA Points:", gpaPoints);


// Activity 3

const gpa =
  gpaPoints.reduce((total, points) => total + points, 0) / gpaPoints.length;

console.log("GPA:", gpa);

// Activity 4

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const smallFruits = fruits.filter(fruit => fruit.length < 6);
console.log("Small fruits:", smallFruits);

// Activity 5

const numbers = [12, 34, 21, 54];
const luckyNumber = 21;

const index = numbers.indexOf(luckyNumber);

if (index !== -1) {
  console.log(`Lucky number found at index ${index}`);
} else {
  console.log("Lucky number not found");
}

