// array of objects
const quiz =
[
  {
    q: "which month comes right before june",
    options : ['may','september','july','august'],
    answer:0
  },
  {
    q: "which color is a banana",
    options : ['red','blue','yellow','white'],
    answer:2
  },
  {
    q: "3 + 7 = 7 ?",
    options : ['true','false'],
    answer: 1
  },
  {
    q: "what time of day do you have breakfast",
    options : ['In the afternoon','In the Evening','In the Morining'],
    answer: 2
  },
  {
    q: " 22 + 16",
    options : ['2216','38','36','32'],
    answer: 1
  }
]

const questionNumber = document.querySelector(".question-num");
const questionTxt = document.querySelector(".question-txt");
const questionAnswer = document.querySelector(".options-answer");
let questionCounter = 0 , currentQuestion, availableQuestions = [] , availableOptions = [];



//push the questions into availableQuestions array []
function setAvailableQuestions()
{
  const totalQuestion = quiz.length
  for(let i = 0 ; i < totalQuestion ; i++)
  {
    availableQuestions.push(quiz[i])
  }

}
//set question number and question and its option
function getNewQuestion()
{

    //set question number
    questionNumber.innerHTML = "Question " + ( questionCounter + 1) + " of " + quiz.length ;
    //set question text rondomly
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    questionTxt.innerHTML = currentQuestion.q;
    // get the position of 'questionIndex' from  AvailableQuestions array[]
    const index1 = availableQuestions.indexOf(questionIndex);
    // splice method to remove the index of AvailableQuestions array[]  which appear one time to not repeated
    availableQuestions.splice(index1,1);
    //set options and get the length
    const optionLength = currentQuestion.options.length;
    console.log(optionLength);
    // push options into the availableOptions  array[]
    for(let i = 0 ; i < optionLength ; i++)
     {
       availableOptions.push(i);
     }
    //options in html
    for(let j = 0 ; j < optionLength ; j++)
    {
      //set question text rondomly
      const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
      // get the position of 'OptionIndex' from  AvailableOptions array[]
      const index2 = availableOptions.indexOf(questionIndex);
      // splice method to remove the index of AvailableOptions array[]  which appear one time to not repeated
      availableOptions.splice(index2,1);

      const optionn = document.createElement("div");
      optionn.innerHTML = currentQuestion.options[j];
      optionn.id = j;
      optionn.className = "option";
      questionAnswer.appendChild(optionn);
    }
   questionCounter++;
}

function next()
{
  if (questionCounter === quiz.length)
  {
    console.log("Quiz Over");
  }
  else
  {
    getNewQuestion();
  }

}



window.onload= function()
{
  // first set the questions in the AvailableQuestions array
  setAvailableQuestions();
  // call function getNewquestion()
  getNewQuestion();
}
