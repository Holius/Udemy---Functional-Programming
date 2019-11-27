
// const meal = {
//   description: 'Dinner',
// };

// const meal2 = {
//   ...meal,
//   calories: 200
// };
// console.log(meal2)

// const meal3 = {
//   ...meal2,
//   calories: meal2.calories + 100
// }
// console.log(meal3)

// const { calories, ...withoutCalories } = meal3
// console.log(withoutCalories)


// const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

// const stuff = reviews.reduce( (acc,cv) => {
//     acc[cv] === undefined ? acc[cv] = 1 : ++acc[cv];
//     return acc;
// }, {})

// console.log(stuff);
//--------------------------------------------------

// // reduceThis
// const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

// const countGroupedByReview = reviews.reduce(groupBy, {});

// function groupBy (acc, review){
//   const count = acc[review] || 0;
//   return {...acc, [review]: count + 1}
// }

// console.log(countGroupedByReview);




// Functional Programming for Beginners Excercise

// create the code to go from studentGrades array, 
// to studentFeedback (as shown in comments below)

//
const studentGrades = [ 
  {name: 'Joe', grade: 88},
  {name: 'Jen', grade: 94},
  {name: 'Steph', grade: 77},
  {name: 'Allen', grade: 60},
  {name: 'Gina', grade: 54},
];

const comments = studentGrades.map(x => createGreeting(x.grade)(x.name));
console.log(comments)

function createGreeting(grade) {

  const convertedGrade = function (grade) {
    return grade >= 90 ? 'a'
          : grade >= 80 ? 'b'
          : grade >= 70 ? 'c'
          : grade >= 60 ? 'd'
          : 'f';
  }(grade);

return function handleGreeting(name) {
  return convertedGrade === 'a' ?
        `Exceelent Job ${name}, you got an ${convertedGrade}`
        : convertedGrade === 'b' ?
        `Nice Job ${name}, you got an ${convertedGrade}`
        : convertedGrade === 'c' ?
        `Well Done ${name}, you got an ${convertedGrade}`
        : convertedGrade === 'd' ?
         `What Happened ${name}, you got an ${convertedGrade}`
        : `Not Good ${name}, you got an ${convertedGrade}`;
        };
}
// console.log (
//   handleGrades(90),
//   handleGreeting(handleGrades(80), 'Jooooost')
// )
/*
const studentFeedback = [
  'Nice Job Joe, you got an b',
  'Excellent Job Jen, you got an a',
  'Well done Steph, you got an c',
  'What happened Allen, you got an d',
  'Not good Gina, you got an f',
]; 
*/

// Solution found at:
// https://jsbin.com/vaqomiy/1/edit?js,console