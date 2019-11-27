
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


const studentGrades = [ 
  {name: 'Joe', grade: 88},
  {name: 'Jen', grade: 94},
  {name: 'Steph', grade: 77},
  {name: 'Allen', grade: 60},
  {name: 'Gina', grade: 54},
];

function createGreeting() {

  return function handleGreeting(log) {

    const convertedGrade = function (grade) {
      return grade >= 90 ? 'a'
          : grade >= 80 ? 'b'
          : grade >= 70 ? 'c'
          : grade >= 60 ? 'd'
          : 'f';
    }(log.grade);

    return convertedGrade === 'a' ?
        `Excellent Job ${log.name}, you got an a`
        : convertedGrade === 'b' ?
        `Nice Job ${log.name}, you got a b`
        : convertedGrade === 'c' ?
        `Well Done ${log.name}, you got a c`
        : convertedGrad e === 'd' ?
         `What Happened ${log.name}, you got a d`
        : `Not Good ${log.name}, you got an f}`;
        };
}

const comments = studentGrades.map(createGreeting());
console.log(comments)
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