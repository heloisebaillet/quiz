let qA = document.querySelector(".qA");
let questionElement = document.querySelector(".questionElement");
let reponsesElement = document.querySelector(".reponsesElement");
let btnNext = document.querySelector(".btnNext");
const scoreDisplay = document.querySelector(".scoreDisplay");
let comm = document.querySelector(".comm");
let questionID = 1;

// SETTING SCORE
let score = 0;
scoreDisplay.innerHTML = score;

// ARRAY QUESTIONS & RÉPONSES
let questions = [
  {
    questionID: 0,
    question: "",
    reponses: "",
  },
  {
    questionID: 1,
    question: "En quelle année le film Matrix est-il sorti ?",
    reponses: [
      { texte: "1999", correcte: true },
      { texte: "2000", correcte: false },
      { texte: "2001", correcte: false },
      { texte: "2002", correcte: false },
    ],
  },
  {
    questionID: 2,
    question: "Où le film Lord of the Rings a-t-il été tourné ?",
    reponses: [
      { texte: "En Grande-Bretagne", correcte: false },
      { texte: "À la Nouvelle-Zélande", correcte: true },
      { texte: "En Roumanie", correcte: false },
      { texte: "En Australie", correcte: false },
    ],
  },
  {
    questionID: 3,
    question:
      "Quel réalisateur s'est spécifiquement appliqué à explorer un genre différent pour chacun de ses films ?",
    reponses: [
      { texte: "Steven Spielberg", correcte: false },
      { texte: "Stanley Kubrick", correcte: true },
      { texte: "Ridley Scott", correcte: false },
      { texte: "Orson Wells", correcte: false },
    ],
  },
  {
    questionID: 4,
    question: "Quel est le tout premier long métrage ?",
    reponses: [
      { texte: "The Corbett-Fitzsimmons Fight", correcte: true },
      { texte: "Le Voyage dans la Lune", correcte: false },
      { texte: "The Story of the Kelly Gang", correcte: false },
      { texte: "L'Enfant Prodigue", correcte: false },
    ],
  },
  {
    questionID: 5,
    question:
      "Quel est le premier film tourné en 2001 intégralement en numérique ?",
    reponses: [
      { texte: "Dark City", correcte: false },
      { texte: "Memento", correcte: false },
      { texte: "Vidocq", correcte: true },
      { texte: "Requiem for a Dream", correcte: false },
    ],
  },
  {
    questionID: 6,
    question:
      "The Talented Mister Ripley est le remake d'une adaptation d'un roman. Mais de quel film ?",
    reponses: [
      { texte: "Deep Water", correcte: false },
      { texte: "La Piscine", correcte: false },
      { texte: "Der Amerikanische Freund", correcte: false },
      { texte: "Plein Soleil", correcte: true },
    ],
  },
  {
    questionID: 7,
    question: "À bientôt ;)",
  },
];

//FONCTION AFFICHER QUESTION
function afficherQuestion(question) {
  questionElement.innerText = question.question;
  questionElement.style.color = "#483d8b";
  reponsesElement.innerHTML = "";

  question.reponses.forEach((element) => {
    reponsesElement.innerHTML += `<button value= ${element.correcte} class="btnReponses"> ${element.texte}</button>`;

    let btnReponses = document.querySelectorAll(".btnReponses");

    btnReponses.forEach((element) => {
      element.style.color = "#483d8b";
      element.style.borderColor = "#483d8b";
      element.style.border = "1px";

      element.addEventListener("click", () => {
        if (element.value == "true") {
          score++;
          scoreDisplay.innerHTML = score;
          element.style.backgroundColor = "green";
          element.style.color = "white";
          element.disabled = true;
          comm.innerText = "Bravo, c'est la bonne réponse !";
          questionID++;
        }

        if (element.value == "false") {
          scoreDisplay.innerHTML = score;
          element.style.backgroundColor = "red";
          element.style.color = "white";
          comm.innerText = "Eh non ! Réessayez ;)";
          element.disabled = true;
        }

        if (element.disabled == true && element.value == "false") {
          element.style.color = "grey";
        }

        if (questionID == 7 && score > 5) {
          comm.innerText = "Vous êtes un as !";
          comm.style.fontSize = "30px";
        }
      });
    });
  });
}

afficherQuestion(questions[questionID]);

btnNext.addEventListener("click", () => {
  if (questionID == 7) {
    alert("C'est fini ! À bientôt !");
  } else {
    afficherQuestion(questions[questionID]);
  }
});
