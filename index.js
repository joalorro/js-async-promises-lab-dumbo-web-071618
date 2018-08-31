const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]
let question;
const container = document.querySelector('.question-container')

appendQuestion = (question) => {
  container.innerHTML = question.questionText
}

askQuestionThen = (time) => {
  question = questions[0]
  appendQuestion(question)
  return new Promise((resolve,reject) => {
    setTimeout( (function() {

    }),time)
  })
}

removeQuestion = () => {
  container.innerHTML = ''
}

askQuestionThenRemoveQuestion = (time) => {
  askQuestionThen(time)
  return new Promise((resolve,reject) => {
    setTimeout( removeQuestion, time)
  })
}

trueAndFalseButtons = () => {
  return document.querySelectorAll('div.btn')
}

toggleTrueAndFalseButtons = () => {
  let buttons = trueAndFalseButtons()
  for (let button of buttons) {
    button.classList.contains('hide') ? button.classList.remove('hide') : button.classList.add('hide')
  }
}

// displayQuestionOnClick = () => {
//
// }

function displayQuestionOnClick() {
  
}
