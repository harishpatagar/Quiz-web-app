const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "javascript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (!answer) {
    alert("please select your answer");
  }
  var currectans = quizData[currentQuiz].correct;
  if (answer != currectans) {
    switch (answer) {
      case "a":
        a_text.style.color = "red";
        break;
      case "b":
        b_text.style.color = "red";
        break;
      case "c":
        c_text.style.color = "red";
        break;
      case "d":
        d_text.style.color = "red";
    }
  }
  if (answer) {
    switch (currectans) {
      case "a":
        a_text.style.color = "green";
        break;
      case "b":
        b_text.style.color = "green";
        break;
      case "c":
        c_text.style.color = "green";
        break;
      case "d":
        d_text.style.color = "green";
    }
  }

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      setTimeout(() => {
        loadQuiz();

        a_text.style.color = "white";
        b_text.style.color = "white";
        c_text.style.color = "white";
        d_text.style.color = "white";
      }, 3000);
    } else {
      setTimeout(finalize_score(), 3000);
      function finalize_score() {
        quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
 
            <button onclick="location.reload()">Reload</button>
            `;
      }
    }
  }
});
