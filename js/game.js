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
    question: "Who ruined Eren's equipment back in the trainee days?",
    choice1: "<Keith Shadis>",
    choice2: "<Armin>",
    choice3: "<Jean>",
    choice4: "<Mikasa>",
    answer: 1
  },
  {
    question:
      "Who is in charge of the defense of the southern region?",
    choice1: "Nile Dok",
    choice2: "Darius Zackly",
    choice3: "Erwin",
    choice4: "Dot Pixis",
    answer: 4
  },
  {
    question: "What nickname was given to Erwin when he was a child?",
    choice1: "Blondie",
    choice2: "Idiot",
    choice3: "Eyebrows",
    choice4: "Smartass",
    answer: 3
  },
  {
    question: "According to Ian, Mikasa is worth a thousand ordinary soldiers.",
    choice1: "True",
    choice2: "False",
    answer: 2
  },
  {
    question: "Who tended to Levi's wounds after he was attacked by the First Interior Squad?",
    choice1: "Armin",
    choice2: "Sasha",
    choice3: "Moblit",
    choice4: "Hange",
    answer: 2
  },
  {
    question:
      "How did Eren find out that he was the one who killed Grisha?",
    choice1: "Grisha appeared in his memory and told him the truth",
    choice2: "Keith Shadis told him",
    choice3: "Rod Reiss and Historia triggered the memories",
    choice4: "Frieda Reiss helped him remember",
    answer: 3
  },
  {
    question: "What did Carla do for living before she met Grisha?",
    choice1: "She was a soldier",
    choice2: "She was a Waitress",
    choice3: "She was a doctor",
    choice4: "She was a teacher",
    answer: 2
  },
  {
    question: "Whom did Grisha eat in order to steal the Coordinate?",
    choice1: "Uri Reiss",
    choice2: "Ulkiin Reiss",
    choice3: "Abel Reiss",
    choice4: "Frieda Reiss",
    answer: 4
  },
  {
    question: "What is the only thing that protects the Colossal Titan?",
    choice1: "His speed",
    choice2: "His ability to harden",
    choice3: "The size of his body",
    choice4: "The steam he relases from his body",
    answer: 4
  },
  {
    question:
      "Why did Levi join the Scouting Legion?",
    choice1: "He was blackmailed into joining them",
    choice2: "He wanted to kill Titans",
    choice3: "He always admired them",
    choice4: "He wanted to become the commander",
    answer: 1
  },
  {
    question: "Why are the northern districts considered more desirable places to live than the southern districts?",
    choice1: "Weapons are more advanced there",
    choice2: "They are full of useful resources",
    choice3: "The climate is more suitable there",
    choice4: "There is minimal Titan activity there",
    answer: 4
  },
  {
    question: "Who killed the monstrous boar in Sudden Visitors OVA?",
    choice1: "Jean",
    choice2: "Sasha",
    answer: 2
  },
  {
    question: "'I want to know what's become of the outside world. I don't want to ignorantly live out my entire life inside these walls. And if there's nobody around to carry on anymore, then all the lives of the people who've died so far would become pointless!' Who said this?",
    choice1: "Marco",
    choice2: "Jean",
    choice3: "Eren",
    choice4: "Armin",
    answer: 3
  },
  {
    question: "Why was Pastor Nick tortured and killed?",
    choice1: "He revealed some secrets about the Military Police Brigade to the Scouting Legion",
    choice2: "His devotion to the Wall Cult wasn't strong enough",
    choice3: "He stole treasure from the Wall Cult",
    choice4: "He refused to reveal information concerning the Scouting Legion",
    answer: 4
  },
  {
    question: "When did the Retake of Wall Maria begin?",
    choice1: "Chapter 73",
    choice2: "Chapter 70",
    choice3: "Chapter 71",
    choice4: "Chapter 72",
    answer: 4
  },
  {
    question: "'You've won your bet, but this is where my bet begins!' Who said this?",
    choice1: "Armin",
    choice2: "Jean",
    choice3: "Mikasa",
    choice4: "Annie",
    answer: 4
  },
  {
    question: "Why couldn't Mikasa fight the Smiling Titan along with Hannes?",
    choice1: "She broke her equidment",
    choice2: "She broke her leg",
    choice3: "A titan broke her ribs",
    choice4: "A titan stepped on her arm",
    answer: 3
  },
  {
    question: "Who killed Rod Reiss?",
    choice1: "Historia",
    choice2: "Eren",
    choice3: "Mikasa",
    choice4: "Levi",
    answer: 1
  },
  {
    question: "Mike was the second strongest soldier in the Scouting Legion.",
    choice1: "False",
    choice2: "True",
    answer: 2
  },
  {
    question: "Sasha was supposed to die in chapter 36, but the editor made Isayama change his mind.",
    choice1: "True",
    choice2: "False",
    answer: 1
  },
  {
    question:
      "What were the names of Connie's siblings?",
    choice1: "Sonny and Martin",
    choice2: "Sunny and Martina",
    choice3: "Sonny and Martina",
    choice4: "Sunny and Martin",
    answer: 4
  },
  {
    question: "How many graduates from the 104 Trainees Squad joined the Scouting Legion?",
    choice1: "25",
    choice2: "21",
    choice3: "19",
    choice4: "23",
    answer: 2
  },
  {
    question: "Who was entrusted with the Titan serum in chapter 70?",
    choice1: "Mike",
    choice2: "Erwin",
    choice3: "Levi",
    choice4: "Hange",
    answer: 3
  },
  {
    question: "How did the Smiling Titan die?",
    choice1: "Other Titans devoured him when Eren activated the Coordinate",
    choice2: "Hannes killed him",
    choice3: "Mikasa killed him",
    choice4: "<He was killed by Eren who was in his Titan form",
    answer: 1
  },
]
//CONSTANTS
const CORRECT_BONUS = 4;
const MAX_QUESTIONS = 25;

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


