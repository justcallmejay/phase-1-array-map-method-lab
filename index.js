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

const titleCall = tutorials.map(function titles(names) {
  return names
})

// const titleCap = tutorials.split(' ');

function titleCased(){ 
  const titles = tutorials.map((title) => { // console.log(title.split(' '))}
                                                                            
    let titleSplit = title.split(' ');
    const split = titleSplit.map(function(perTitle) {
      return (perTitle[0].toUpperCase() + perTitle.slice(1))
    })
    return split.join(' ')
  })
  return titles
};

// function titleCasing(titles) {
//   return titles[0].toUpperCase();
// }

// function titleCombine(titles) {
//   return titles.slice(1);
// }






// const titleCased = () => tutorials.map( => correctTutorial.split(" ") + correctTutorial[0].toUpperCase().slice(1)});

// tutorials.map(newTut => {
// return newTut[0].toUpperCase() + newTut.slice(1);});

// function titleCased(tutorial){ 
//   let tut = tutorial.split(" ")
//   return tut
// };

// function titleCased2(titleSpace){
//   return titleSpace.map(titles => titles);
// }
//   (correctTutorial){
// return correctTutorial.splice().toUpperCase() + correctTutorial.slice(1)
//      });
//     }
// const titleUpper = tutorials.map(titleCased);

// function titleCased(
// }

// .map()

// .split()

