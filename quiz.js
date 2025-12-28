const buttons = document.querySelectorAll(".btn");
const paragraph = document.querySelector(".paragraph");
const nxt = document.querySelector(".next");
const reset = document.querySelector(".reset");
const sc = document.querySelector("#score");

let currentQuestion = 0;
let score = 0;


 const quiz =[      
  { question: "What is the capital city of Malawi?", answers: ["Mzuzu", "Lilongwe", "Zomba", "Blantyre"], res: "Lilongwe" },
  { question: "How many days are there in a leap year?", answers: ["365", "377", "366", "367"], res: "366" },
  { question: "Which planet is known as the red planet?", answers: ["Jupiter", "Earth", "Mars", "Saturn"], res: "Mars" },
  { question: "Who painted the Mona Lisa?", answers: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"], res: "Leonardo da Vinci" },
  { question: "What is the largest ocean?", answers: ["Atlantic", "Indian", "Pacific", "Arctic"], res: "Pacific" },
  { question: "Which continent is Malawi in?", answers: ["Asia", "Europe", "Africa", "Australia"], res: "Africa" },
  { question: "How many continents are there?", answers: ["5", "6", "7", "8"], res: "7" },
  { question: "Which gas do plants use?", answers: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], res: "Carbon dioxide" },
  { question: "What is H₂O?", answers: ["Salt", "Water", "Oxygen", "Hydrogen"], res: "Water" },
  { question: "Which country has the largest population?", answers: ["USA", "India", "China", "Russia"], res: "China" },

  { question: "What is 5 × 6?", answers: ["11", "30", "20", "25"], res: "30" },
  { question: "Which organ pumps blood?", answers: ["Brain", "Lungs", "Heart", "Liver"], res: "Heart" },
  { question: "Which language runs in the browser?", answers: ["Python", "C", "JavaScript", "Java"], res: "JavaScript" },
  { question: "HTML stands for?", answers: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "High Text Machine Language", "None"], res: "Hyper Text Markup Language" },
  { question: "CSS is used for?", answers: ["Logic", "Styling", "Database", "Security"], res: "Styling" },
  { question: "Which is not a programming language?", answers: ["Python", "HTML", "Java", "C++"], res: "HTML" },
  { question: "What does CPU stand for?", answers: ["Central Processing Unit", "Computer Power Unit", "Control Program Unit", "Central Program Unit"], res: "Central Processing Unit" },
  { question: "Which device is used to input text?", answers: ["Monitor", "Mouse", "Keyboard", "Speaker"], res: "Keyboard" },
  { question: "What year did Malawi gain independence?", answers: ["1964", "1957", "1970", "1960"], res: "1964" },
  { question: "What is the smallest prime number?", answers: ["0", "1", "2", "3"], res: "2" },

  { question: "Which one is a database?", answers: ["MySQL", "HTML", "CSS", "JS"], res: "MySQL" },
  { question: "Which company created Windows?", answers: ["Apple", "Google", "Microsoft", "IBM"], res: "Microsoft" },
  { question: "What does URL stand for?", answers: ["Uniform Resource Locator", "Universal Resource Link", "User Resource Locator", "None"], res: "Uniform Resource Locator" },
  { question: "Which planet is the largest?", answers: ["Earth", "Mars", "Jupiter", "Saturn"], res: "Jupiter" },
  { question: "Which symbol is used for comments in JS?", answers: ["<!-- -->", "//", "#", "**"], res: "//" },
  { question: "Binary number system uses?", answers: ["2", "8", "10", "16"], res: "2" },
  { question: "What is RAM?", answers: ["Storage", "Memory", "Processor", "Software"], res: "Memory" },
  { question: "Which tag is used for links in HTML?", answers: ["<link>", "<a>", "<p>", "<div>"], res: "<a>" },
  { question: "Which year are we in now?", answers: ["2023", "2024", "2025", "2026"], res: "2026" }
];

function loadQuestion() {
  if (currentQuestion >= quiz.length) {
    paragraph.textContent = "Quiz Finished!";
    sc.textContent = `Score: ${Math.round(score*100/ quiz.length)}% `;
    reset.style.display= "block";
    reset.onclick = () => location.reload();
    nxt.disabled = true;
    return;
  }

  const q = quiz[currentQuestion];
  paragraph.textContent = q.question;

  buttons.forEach((btn, index) => {
    btn.textContent = q.answers[index];
    btn.disabled = false;
    btn.style.background = "";

    btn.onclick = () => checkAnswer(btn, q.res);
  });
}

function checkAnswer(button, correctAnswer) {
  if (button.textContent === correctAnswer) {
    button.style.background = "lightblue";
    score++;
  } else {
    button.style.background = "red";
  }

  buttons.forEach(btn => btn.disabled = true);
}

nxt.addEventListener("click", () => {
  currentQuestion++;
  loadQuestion();
});

loadQuestion();
