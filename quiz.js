const quiz = [
  {q:"What is the capital city of Kenya?", a:["Nairobi","Mombasa","Kisumu","Nakuru"], r:"Nairobi"},
  {q:"How many hours are in a day?", a:["20","22","24","26"], r:"24"},
  {q:"Which planet is known as the blue planet?", a:["Mars","Earth","Neptune","Uranus"], r:"Earth"},
  {q:"Who wrote the play Romeo and Juliet?", a:["Charles Dickens","William Shakespeare","Jane Austen","Mark Twain"], r:"William Shakespeare"},
  {q:"What is the largest continent by land area?", a:["Africa","Asia","Europe","North America"], r:"Asia"},
  {q:"Which country is known as the Land of the Rising Sun?", a:["China","Japan","South Korea","Thailand"], r:"Japan"},
  {q:"How many planets are in our solar system?", a:["7","8","9","10"], r:"8"},
  {q:"What do plants produce during photosynthesis?", a:["Carbon dioxide","Nitrogen","Oxygen","Helium"], r:"Oxygen"},
  {q:"What is the chemical formula for table salt?", a:["H₂O","NaCl","CO₂","O₂"], r:"NaCl"},
  {q:"Which country has the largest population as of 2025?", a:["USA","India","China","Indonesia"], r:"India"},
  {q:"What is 8 × 7?", a:["54","56","64","48"], r:"56"},
  {q:"Which organ is primarily responsible for filtering blood?", a:["Heart","Lungs","Kidneys","Liver"], r:"Kidneys"},
  {q:"Which programming language is primarily used for Android app development?", a:["Swift","Kotlin","Ruby","PHP"], r:"Kotlin"},
  {q:"What does HTML stand for?", a:["Hyper Text Markup Language","High Tech Modern Language","Hyper Transfer Markup Language","Home Tool Markup Language"], r:"Hyper Text Markup Language"},
  {q:"CSS is mainly used for which purpose?", a:["Data storage","Styling web pages","Server logic","Network security"], r:"Styling web pages"},
  {q:"Which of the following is a markup language rather than a programming language?", a:["Python","Java","HTML","C++"], r:"HTML"},
  {q:"What does GPU stand for?", a:["General Processing Unit","Graphics Processing Unit","Global Power Unit","Graphical Program Utility"], r:"Graphics Processing Unit"},
  {q:"Which input device is primarily used for pointing and clicking?", a:["Keyboard","Monitor","Mouse","Printer"], r:"Mouse"},
  {q:"In which year did Zambia gain independence?", a:["1960","1964","1968","1970"], r:"1964"},
  {q:"What is the smallest even prime number?", a:["0","1","2","4"], r:"2"},
  {q:"Which of these is a popular relational database management system?", a:["MongoDB","MySQL","Redis","Cassandra"], r:"MySQL"},
  {q:"Which company developed the macOS operating system?", a:["Microsoft","Google","Apple","IBM"], r:"Apple"},
  {q:"What does URL stand for?", a:["Uniform Resource Locator","Universal Resource Link","User Reference Locator","Unified Resource Location"], r:"Uniform Resource Locator"},
  {q:"Which planet is famous for its prominent ring system?", a:["Jupiter","Mars","Saturn","Venus"], r:"Saturn"},
  {q:"Which symbol is used for multi-line comments in JavaScript?", a:["//","/* */","#","<!-- -->"], r:"/* */"},
  {q:"The decimal number system is based on how many digits?", a:["2","8","10","16"], r:"10"},
  {q:"What does ROM stand for?", a:["Read Only Memory","Random Operating Memory","Runtime Only Module","Rapid Output Memory"], r:"Read Only Memory"},
  {q:"Which HTML element is used to create a hyperlink?", a:["<link>","<a>","<href>","<url>"], r:"<a>"},
  {q:"What is the current year according to the Gregorian calendar in this context?", a:["2024","2025","2026","2027"], r:"2026"},
  {q:"What is the chemical symbol for silver?", a:["Si","Ag","Au","Sr"], r:"Ag"},
  {q:"What is 15 × 15?", a:["200","225","250","215"], r:"225"},
  {q:"Which continent contains the Sahara Desert?", a:["Asia","Australia","Africa","South America"], r:"Africa"},
  {q:"What does HTTPS stand for?", a:["Hyper Text Transfer Protocol Secure","High Transfer Text Protocol System","Hyper Transfer Secure Protocol","Host Text Transfer Protocol Secure"], r:"Hyper Text Transfer Protocol Secure"},
  {q:"Approximately how many bones does an adult human skeleton contain?", a:["186","206","226","246"], r:"206"},
  {q:"What is the freezing point of water in Celsius?", a:["-10°C","0°C","10°C","32°C"], r:"0°C"},
  {q:"Which planet is the second closest to the Sun?", a:["Mercury","Venus","Earth","Mars"], r:"Venus"},
  {q:"What does API stand for in computing?", a:["Application Programming Interface","Advanced Program Integration","Automated Process Interface","Application Process Input"], r:"Application Programming Interface"},
  {q:"How many sides does an octagon have?", a:["6","7","8","9"], r:"8"},
  {q:"What is the approximate speed of sound in air at sea level in m/s?", a:["300","343","400","500"], r:"343"},
  {q:"Which gas makes up the majority of Earth's atmosphere?", a:["Oxygen","Carbon dioxide","Nitrogen","Argon"], r:"Nitrogen"},
];

const buttons = document.querySelectorAll(".btn");
const paragraph = document.querySelector(".paragraph");
const nxt = document.querySelector(".next");
const reset = document.querySelector(".reset");
const sc = document.querySelector("#score");
const qNum = document.querySelector("#question-number");
const timerDisplay = document.querySelector("#timer"); // Required: <span id="timer"></span> in HTML

let currentQuestion = 0;
let score = 0;
let timeLeft = 20;
let timer = null;
const TIME_PER_QUESTION = 20; // seconds

function updateTimerDisplay() {
  if (timerDisplay) {
    timerDisplay.textContent = timeLeft;
  }
}

function clearTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

function startTimer() {
  clearTimer();
  timeLeft = TIME_PER_QUESTION;
  updateTimerDisplay();

  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearTimer();
      // Time expired: disable all answer buttons (no score awarded)
      buttons.forEach(btn => {
        btn.disabled = true;
      });
      // Optional visual indication
      if (timerDisplay) {
        timerDisplay.textContent = "0 – Time’s up";
      }
    }
  }, 1000);
}

function loadQuestion() {
  clearTimer();

  if (currentQuestion >= quiz.length) {
    paragraph.textContent = "Quiz Finished!";
    if (qNum) qNum.textContent = "";
    if (timerDisplay) timerDisplay.textContent = "";
    sc.textContent = `Score: ${Math.round(score * 100 / quiz.length)}%`;
    reset.style.display = "block";
    reset.onclick = () => location.reload();
    nxt.disabled = true;
    return;
  }

  const q = quiz[currentQuestion];

  if (qNum) qNum.textContent = `Question ${currentQuestion + 1} of ${quiz.length}`;

  paragraph.textContent = q.q;

  buttons.forEach((btn, index) => {
    btn.textContent = q.a[index];
    btn.disabled = false;
    btn.style.background = "";
    btn.onclick = () => checkAnswer(btn, q.r);
  });

  startTimer();
}

function checkAnswer(button, correctAnswer) {
  clearTimer(); // Stop the timer once an answer is selected

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

loadQuestion();  {q:"Which planet is closest to the Sun?", a:["Venus","Earth","Mars","Mercury"], r:"Mercury"},
  {q:"What does SQL stand for?", a:["Structured Query Language","Simple Query Logic","Standard Question Language","System Query List"], r:"Structured Query Language"},
  {q:"How many sides does a hexagon have?", a:["5","6","7","8"], r:"6"},
  {q:"What is the approximate speed of light in km/s?", a:["200,000","300,000","400,000","150,000"], r:"300,000"},
  {q:"Which gas do humans breathe in?", a:["Carbon dioxide","Nitrogen","Oxygen","Hydrogen"], r:"Oxygen"},
];

const buttons = document.querySelectorAll(".btn");
const paragraph = document.querySelector(".paragraph");
const nxt = document.querySelector(".next");
const reset = document.querySelector(".reset");
const sc = document.querySelector("#score");
const qNum = document.querySelector("#question-number"); // add <span id="question-number"></span> to your HTML

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  if (currentQuestion >= quiz.length) {
    paragraph.textContent = "Quiz Finished!";
    if (qNum) qNum.textContent = "";
    sc.textContent = `Score: ${Math.round(score * 100 / quiz.length)}%`;
    reset.style.display = "block";
    reset.onclick = () => location.reload();
    nxt.disabled = true;
    return;
  }

  const q = quiz[currentQuestion];

  if (qNum) qNum.textContent = `Question ${currentQuestion + 1} of ${quiz.length}`;

  paragraph.textContent = q.q;

  buttons.forEach((btn, index) => {
    btn.textContent = q.a[index];
    btn.disabled = false;
    btn.style.background = "";
    btn.onclick = () => checkAnswer(btn, q.r);
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
