const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function(element){
    //split the current element of the array into words
    element = element.split(" ");
    //iterate through the new array of words
    const newWords = element.forEach(function(word) {
      word = word[0].toUpperCase() + word.slice(1);
    })
    console.log(newWords);
    //for each word, make the first letter capital
    //join it back togeteher into a string
  });
}    
    //return new array
