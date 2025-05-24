const quizData = [
    {
        question: "Quelle est la capitale de la France ?",
        answers: {
            a: "Berlin",
            b: "Madrid",
            c: "Paris",
            d: "Rome"
        },
        correct: "c"
    },
    {
        question: "Quel est l'océan le plus grand du monde ?",
        answers: {
            a: "Atlantique",
            b: "Indien",
            c: "Arctique",
            d: "Pacifique"
        },
        correct: "d"
    },
    {
        question: "Quel est le plus grand mammifère terrestre ?",
        answers: {
            a: "Éléphant",
            b: "Girafe",
            c: "Baleine bleue",
            d: "Rhinocéros"
        },
        correct: "a"
    },
    {
        question: "Combien de planètes compte notre système solaire (officiellement) ?",
        answers: {
            a: "7",
            b: "8",
            c: "9",
            d: "10"
        },
        correct: "b"
    },
    {
        question: "Quel est le plus haut sommet du monde ?",
        answers: {
            a: "Mont Blanc",
            b: "K2",
            c: "Everest",
            d: "Kilimandjaro"
        },
        correct: "c"
    },
    {
        question: "Quel est le symbole chimique de l'eau ?",
        answers: {
            a: "O2",
            b: "H2O",
            c: "CO2",
            d: "NaCl"
        },
        correct: "b"
    },
    {
        question: "Qui a peint la Joconde ?",
        answers: {
            a: "Vincent van Gogh",
            b: "Pablo Picasso",
            c: "Léonard de Vinci",
            d: "Claude Monet"
        },
        correct: "c"
    },
    {
        question: "Quelle est la langue la plus parlée au monde en termes de locuteurs natifs ?",
        answers: {
            a: "Anglais",
            b: "Espagnol",
            c: "Mandarin",
            d: "Hindi"
        },
        correct: "c"
    },
    {
        question: "Quel pays est connu comme le 'Pays du Soleil-Levant' ?",
        answers: {
            a: "Chine",
            b: "Corée du Sud",
            c: "Japon",
            d: "Thaïlande"
        },
        correct: "c"
    },
    {
        question: "En quelle année l'homme a-t-il marché sur la lune pour la première fois ?",
        answers: {
            a: "1965",
            b: "1969",
            c: "1972",
            d: "1975"
        },
        correct: "b"
    },
    {
        question: " Quel est le plus grand pays du monde par sa superficie ?",
        answers: {
            a: "Chine",
            b: "Canada",
            c: "Russie",
            d: "États-Unis"
        },
        correct: "c"
    },
    {
        question: " Qui a formulé la théorie de la relativité ?",
        answers: {
            a: "Isaac Newton",
            b: "Galilée",
            c: "Albert Einstein",
            d: "Stephen Hawking"
        },
        correct: "c"
    },
    {
        question: " Quelle est la monnaie du Japon ?",
        answers: {
            a: "Won",
            b: "Yuan",
            c: "Yen",
            d: "Dollar"
        },
        correct: "c"
    },
    {
        question: " Combien de cœurs possède une pieuvre ?",
        answers: {
            a: "Un",
            b: "Deux",
            c: "Trois",
            d: "Quatre"
        },
        correct: "c"
    },
    {
        question: " Quel est le sport national du Japon ?",
        answers: {
            a: "Karaté",
            b: "Judo",
            c: "Sumo",
            d: "Kendo"
        },
        correct: "c"
    },
    {
        question: " Quelle est la capitale de l'Australie ?",
        answers: {
            a: "Sydney",
            b: "Melbourne",
            c: "Canberra",
            d: "Perth"
        },
        correct: "c"
    },
    {
        question: " Quel est le plus grand océan du monde ?",
        answers: {
            a: "Océan Atlantique",
            b: "Océan Indien",
            c: "Océan Arctique",
            d: "Océan Pacifique"
        },
        correct: "d"
    },
    {
        question: " Quel est le nom du premier homme à avoir marché sur la Lune ?",
        answers: {
            a: "Buzz Aldrin",
            b: "Michael Collins",
            c: "Neil Armstrong",
            d: "Yuri Gagarin"
        },
        correct: "c"
    },
    {
        question: " Quelle est la plus haute montagne d'Afrique ?",
        answers: {
            a: "Mont Kenya",
            b: "Mont Kilimandjaro",
            c: "Mont Stanley",
            d: "Mont Toubkal"
        },
        correct: "b"
    },
    {
        question: " Quel est le principal ingrédient du guacamole ?",
        answers: {
            a: "Tomate",
            b: "Oignon",
            c: "Avocat",
            d: "Piment"
        },
        correct: "c"
    }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

function buildQuiz() {
    const output = [];

    quizData.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} : ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question">
                <h2>${currentQuestion.question}</h2>
                <div class="answers">${answers.join('')}</div>
            </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correct) {
            numCorrect++;
            answerContainer.style.color = 'green'; // Optionnel: Marquer la bonne réponse en vert
        } else {
            answerContainer.style.color = 'red'; // Optionnel: Marquer la mauvaise réponse en rouge
             // Optionnel: Afficher la bonne réponse
             const correctLabel = answerContainer.querySelector(`input[value="${currentQuestion.correct}"]`).parentNode;
             if (correctLabel) {
                 correctLabel.style.backgroundColor = '#ccffcc'; // Légèrement colorer la bonne réponse
             }
        }
    });

    resultsContainer.innerHTML = `Vous avez obtenu ${numCorrect} bonnes réponses sur ${quizData.length} !`;
    resultsContainer.classList.remove('hidden'); // Afficher les résultats
    submitButton.classList.add('hidden'); // Cacher le bouton de soumission après les résultats
}

// Construction du quiz au chargement de la page
buildQuiz();

// Écouteur d'événement pour le bouton de soumission
submitButton.addEventListener('click', showResults);