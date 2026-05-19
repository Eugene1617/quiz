const quiz = [
  {q:"What is the capital city of Malawi?", a:["Mzuzu","Lilongwe","Zomba","Blantyre"], r:"Lilongwe"},
  {q:"How many days are in a leap year?", a:["365","377","366","367"], r:"366"},
  {q:"Which planet is known as the red planet?", a:["Jupiter","Earth","Mars","Saturn"], r:"Mars"},
  {q:"Who painted the Mona Lisa?", a:["Van Gogh","Picasso","Leonardo da Vinci","Michelangelo"], r:"Leonardo da Vinci"},
  {q:"What is the largest ocean?", a:["Atlantic","Indian","Pacific","Arctic"], r:"Pacific"},
  {q:"Which continent is Malawi in?", a:["Asia","Europe","Africa","Australia"], r:"Africa"},
  {q:"How many continents are there?", a:["5","6","7","8"], r:"7"},
  {q:"Which gas do plants use for photosynthesis?", a:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"], r:"Carbon dioxide"},
  {q:"What is H₂O?", a:["Salt","Water","Oxygen","Hydrogen"], r:"Water"},
  {q:"Which country had the largest population as of 2024?", a:["USA","India","China","Russia"], r:"India"},
  {q:"What is 5 × 6?", a:["11","30","20","25"], r:"30"},
  {q:"Which organ pumps blood?", a:["Brain","Lungs","Heart","Liver"], r:"Heart"},
  {q:"Which language runs natively in the browser?", a:["Python","C","JavaScript","Java"], r:"JavaScript"},
  {q:"HTML stands for?", a:["Hyper Trainer Marking Language","Hyper Text Markup Language","High Text Machine Language","Hyper Transfer Markup Language"], r:"Hyper Text Markup Language"},
  {q:"CSS is primarily used for?", a:["Logic","Styling","Database","Security"], r:"Styling"},
  {q:"Which of these is NOT a programming language?", a:["Python","HTML","Java","C++"], r:"HTML"},
  {q:"What does CPU stand for?", a:["Central Processing Unit","Computer Power Unit","Control Program Unit","Central Program Unit"], r:"Central Processing Unit"},
  {q:"Which device is used to input text?", a:["Monitor","Mouse","Keyboard","Speaker"], r:"Keyboard"},
  {q:"What year did Malawi gain independence?", a:["1964","1957","1970","1960"], r:"1964"},
  {q:"What is the smallest prime number?", a:["0","1","2","3"], r:"2"},
  {q:"Which one is a database system?", a:["MySQL","HTML","CSS","JavaScript"], r:"MySQL"},
  {q:"Which company created Windows?", a:["Apple","Google","Microsoft","IBM"], r:"Microsoft"},
  {q:"What does URL stand for?", a:["Uniform Resource Locator","Universal Resource Link","User Resource Locator","Unified Reference Location"], r:"Uniform Resource Locator"},
  {q:"Which planet is the largest in our solar system?", a:["Earth","Mars","Jupiter","Saturn"], r:"Jupiter"},
  {q:"Which symbol is used for single-line comments in JavaScript?", a:["<!-- -->","//","#","**"], r:"//"},
  {q:"The binary number system uses how many digits?", a:["2","8","10","16"], r:"2"},
  {q:"What does RAM stand for?", a:["Read Access Memory","Random Access Memory","Runtime Application Memory","Rapid Access Module"], r:"Random Access Memory"},
  {q:"Which HTML tag is used for hyperlinks?", a:["<link>","<a>","<p>","<div>"], r:"<a>"},
  {q:"What year is it currently?", a:["2023","2024","2025","2026"], r:"2026"},
  {q:"What is the chemical symbol for gold?", a:["Go","Gd","Au","Ag"], r:"Au"},
  {q:"What is 12 × 12?", a:["124","144","132","148"], r:"144"},
  {q:"Which continent has the most countries?", a:["Asia","Europe","Africa","Americas"], r:"Africa"},
  {q:"What does HTTP stand for?", a:["Hyper Text Transfer Protocol","High Tech Transfer Page","Hyper Transfer Text Protocol","Host Transfer Text Page"], r:"Hyper Text Transfer Protocol"},
  {q:"How many bones are in the adult human body?", a:["196","206","216","226"], r:"206"},
  {q:"What is the boiling point of water in Celsius?", a:["90°C","95°C","100°C","105°C"], r:"100°C"},
  {q:"Which planet is closest to the Sun?", a:["Venus","Earth","Mars","Mercury"], r:"Mercury"},
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