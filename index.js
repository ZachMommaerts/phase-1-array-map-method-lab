const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

const titleCased = () => {
  return tutorials.map((tutorial) => {
    return tutorial.split(' ').map(word => {
      return `${word[0].toUpperCase()}${word.slice(1)}`;
    }).join(' ');
  });
}

// return `${word[0].toUpperCase()}${word.slice(1)}`;


// const titleCased = () => {
//   //splits each element in the initial array
//   return tutorials.map((tutorial) => {
//     //splits each individual line-array into an array of words
//     return tutorial.split(" ").map((word) => {
//       //uppercases the first letter of each word-array
//       return `${word[0].toUpperCase()}${word.slice(1)}`


// const titleCased = tutorials.map( tutorial => {

//   const newTutorials = tutorial.map(element => {
//     const word = element.split(' ');
//     word.map(letter => {letter.charAt(0).toUpperCase() + letter.substring(1).join(' ');
//   })

//   return newTutorials;
// })

// console.log('titleCased')
// function capitalize(input) {  
//   return input.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');  
// }  