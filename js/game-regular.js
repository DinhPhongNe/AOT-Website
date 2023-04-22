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
        question: "What's the name of Jean's horse?",
        choice1: "Chibi",
        choice2: "Shall",
        choice3: "Bufpart",
        choice4: "Jeanbo",
        answer: 3
      },
      {
        question:
          "Why was Armin getting picked on so often?",
        choice1: "He loved to read books about the outside world",
        choice2: "He insulted the bullies",
        choice3: "He didn't want to borrow his books to anyone",
        choice4: "He picked fights with the bullies",
        answer: 1
      },
      {
        question: "Why did Marco want to join the Military Police Brigade?",
        choice1: "He wanted to escape from the Titans",
        choice2: "He wanted to work near the king",
        choice3: "He wanted to change the Military Police Brigade's corruption",
        choice4: "He wanted to live a comfortable life in Wall Sina",
        answer: 2
      },
      {
        question: "How big was the biggest Titan ever seen?",
        choice1: "120m",
        choice2: "50m",
        choice3: "60m",
        choice4: "100m",
        answer: 1
      },
      {
        question: "Sonny was a _ Meter Class.",
        choice1: "3",
        choice2: "5",
        choice3: "4",
        choice4: "7",
        answer: 3
      },
      {
        question:
          "Who achieved 14 solo kills and 32 Titan kill assists?",
        choice1: "Eld",
        choice2: "Oluo",
        choice3: "Gunther",
        choice4: "Petra",
        answer: 1
      },
      {
        question: "'Only the victors are allowed to live. This world is merciless like that.' Who said this?",
        choice1: "Annie",
        choice2: "Eren",
        choice3: "Jean",
        choice4: "Mikasa",
        answer: 4
      },
      {
        question: "Who saved Jean's life in chapter 58?",
        choice1: "Levi",
        choice2: "Armin",
        choice3: "Connie",
        choice4: "Mikasa",
        answer: 2
      },
      {
        question: "Who taught Annie how to fight?",
        choice1: "Her father",
        choice2: "Reiner",
        choice3: "Her sister",
        choice4: "Bertoldt",
        answer: 1
      },
      {
        question:
          "When she became queen, Historia founded an orphanage.",
        choice1: "True",
        choice2: "False",
        answer: 1
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
