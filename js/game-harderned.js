const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: "The Beast Titan is a __ Meter Class.",
        choice1: "15",
        choice2: "18",
        choice3: "17",
        choice4: "16",
        answer: 3
      },
      {
        question:
          "Who was the first member of Levi's squad to be killed by Annie, the Female Titan?",
        choice1: "Eld",
        choice2: "Petra",
        choice3: "Oluo",
        choice4: "Gunther",
        answer: 4
      },
      {
        question: "Good balance and good at making sharp turns, but slow in assessing the situation and his grasp of strategy is often less than perfect. Whose description is this?",
        choice1: "Bertold's",
        choice2: "Jean's",
        choice3: "Eren's",
        choice4: "Connie's",
        answer: 4
      },
      {
        question: "For how many years did Ymir wander outside of the Walls as a Titan?",
        choice1: "For 60 years",
        choice2: "For 50 years",
        choice3: "For 40 years",
        choice4: "For 70 years",
        answer: 1
      },
      {
        question: "What is the name of the newspaper headquarters in Stohess district?",
        choice1: "Berg Newspaper",
        choice2: "Beaure Newspaper",
        choice3: "Roy Newspaper",
        choice4: "Stohess NewsPaper",
        answer: 1
      },
      {
        question:
          "'I don't know... what's right anymore... But... I do know that I have to face the consequences of my actions... and carry out... my duty as a warrior to the end.' Who said this?",
        choice1: "Bertoldt",
        choice2: "Ymir",
        choice3: "Reiner",
        choice4: "Annie",
        answer: 3
      },
      {
        question: "'Someone who can't sacrifice anything can never change anything!' Who said this?",
        choice1: "Erwin",
        choice2: "Armin",
        choice3: "Jean",
        choice4: "Mikasa",
        answer: 2
      },
      {
        question: "When is a yellow signal flare used?",
        choice1: "When an emergency happens",
        choice2: "When there is a change in direction",
        choice3: "When an order to retreat is issued",
        choice4: "When the mission is over, be it a success or a failure",
        answer: 4
      },
      {
        question: "What was the name of Historia' mother?",
        choice1: "Elena",
        choice2: "Frieda",
        choice3: "Almy",
        choice4: "Amy",
        answer: 3
      },
      {
        question:
          "Who overtook the position of CEO in the Reeves' company after Dimo Reeves' murder?",
        choice1: "His wife",
        choice2: "His son",
        choice3: "His father",
        choice4: "His brother",
        answer: 2
      },
  
  ];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();
