const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish #restart");
const btnRanking = document.querySelector(".finish #ranking");
const btnMudarDificuldade = document.querySelector(".finish #mudar_dificuldade");
var dificuldade = sessionStorage.DIFICULDADE;

import questions1 from "./questionsEasy.js";
import questions2 from "./questionsMedium.js"
import questions3 from "./questionsHard.js"

if (dificuldade == 'FÁCIL') {
  titulo_quiz.innerHTML = `QUIZ COPA DO MUNDO (${dificuldade})`
  let currentIndex = 0;
  let questions1Correct = 0;
  let pontuacao = 0;

  btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";

    currentIndex = 0;
    questions1Correct = 0;
    pontuacao = 0;
    loadQuestion();
  };


  btnRanking.onclick = () => {
    window.location = '../quizmain.html'
  };


  btnMudarDificuldade.onclick = () => {
    window.location = '../quizmain.html'
  };

  function nextQuestion(e) {
    if (e.target.getAttribute("data-correct") === "true") {
      questions1Correct++;
      pontuacao += 10;
    }

    if (currentIndex < questions1.length - 1) {
      currentIndex++;
      loadQuestion();
    } else {
      sessionStorage.PONTUACAO_USUAIO = pontuacao
      guardarNoBanco();
      finish();
    }
  }

  function finish() {
    textFinish.innerHTML = `você acertou ${questions1Correct} de ${questions1.length} <br> Pontuação: ${pontuacao}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
  }

  function loadQuestion() {
    spnQtd.innerHTML = `${currentIndex + 1}/${questions1.length}`;
    const item = questions1[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
      const div = document.createElement("div");

      div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

      answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
      item.addEventListener("click", nextQuestion);
    });
  }

  loadQuestion();
}

else if (dificuldade == 'MÉDIO') {
  titulo_quiz.innerHTML = `QUIZ COPA DO MUNDO (${dificuldade})`
  let currentIndex = 0;
  let questions2Correct = 0;
  let pontuacao = 0;

  btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";

    currentIndex = 0;
    questions2Correct = 0;
    pontuacao = 0;
    loadQuestion();
  };


  btnRanking.onclick = () => {
    window.location = '../quizmain.html'
  };


  btnMudarDificuldade.onclick = () => {
    window.location = '../quizmain.html'
  };

  function nextQuestion(e) {
    if (e.target.getAttribute("data-correct") === "true") {
      questions2Correct++;
      pontuacao += 12;
    }

    if (currentIndex < questions2.length - 1) {
      currentIndex++;
      loadQuestion();
    } else {
      sessionStorage.PONTUACAO_USUAIO = pontuacao
      guardarNoBanco();
      finish();
    }
  }

  function finish() {
    textFinish.innerHTML = `você acertou ${questions2Correct} de ${questions2.length} <br> Pontuação: ${pontuacao}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
  }

  function loadQuestion() {
    spnQtd.innerHTML = `${currentIndex + 1}/${questions2.length}`;
    const item = questions2[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
      const div = document.createElement("div");

      div.innerHTML = `
      <button class="answer" data-correct="${answer.correct}">
        ${answer.option}
      </button>
      `;

      answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
      item.addEventListener("click", nextQuestion);
    });
  }

  loadQuestion();
}

else if (dificuldade == 'DIFÍCIL') {
  titulo_quiz.innerHTML = `QUIZ COPA DO MUNDO (${dificuldade})`
  let currentIndex = 0;
  let questions3Correct = 0;
  let pontuacao = 0;

  btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";

    currentIndex = 0;
    questions3Correct = 0;
    pontuacao = 0;
    loadQuestion();
  };


  btnRanking.onclick = () => {
    window.location = '../quizmain.html'
  };


  btnMudarDificuldade.onclick = () => {
    window.location = '../quizmain.html'
  };

  function nextQuestion(e) {
    if (e.target.getAttribute("data-correct") === "true") {
      questions3Correct++;
      pontuacao += 15;
    }

    if (currentIndex < questions3.length - 1) {
      currentIndex++;
      loadQuestion();
    } else {
      sessionStorage.PONTUACAO_USUAIO = pontuacao
      guardarNoBanco();
      finish();
    }
  }

  function finish() {
    textFinish.innerHTML = `você acertou ${questions3Correct} de ${questions3.length} <br> Pontuação: ${pontuacao}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
  }

  function loadQuestion() {
    spnQtd.innerHTML = `${currentIndex + 1}/${questions3.length}`;
    const item = questions3[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
      const div = document.createElement("div");

      div.innerHTML = `
        <button class="answer" data-correct="${answer.correct}">
          ${answer.option}
        </button>
        `;

      answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
      item.addEventListener("click", nextQuestion);
    });
  }

  loadQuestion();
}

function guardarNoBanco() {

  var userVar = sessionStorage.ID_USUARIO;
  var pontuacaoVar = sessionStorage.PONTUACAO_USUAIO;


  // Enviando o valor da nova input
  fetch("/pontuacoes/guardarNoBanco", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      userServer: userVar,
      pontuacaoUserServer: pontuacaoVar,
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok == false) {
      console.log('Erro ao salvar resultados no banco de dados!')
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);

  });

  return false;
}