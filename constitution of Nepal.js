
let questions = [
    {
        question: "Right to Freedom is mentioned in which Article?",
        answers: [
            {text: "Article 17", correct: false},
            {text: "Article 18", correct: false},
            {text: "Article 19", correct: false},
            {text: "Article 16", correct: true}
        ],
        explanation: "Constitution of Nepal 2072"
    }, 
    {
        question: "Right to Equality is mentioned in which Article?",
        answers: [
            {text: "Article 17", correct: true},
            {text: "Article 18", correct: false},
            {text: "Article 19", correct: false},
            {text: "Article 16", correct: false}
        ],
        explanation: "Constitution of Nepal 2072"
    }, 
    {
        question: "According to the constitution, within what time a person arrested should be presented in front of the officer who looks after that investigation, excluding the travel time?",
        answers: [
            {text: "12 hours", correct: false},
            {text: "24 hours", correct: true},
            {text: "48 hours", correct: false},
            {text: "1 week", correct: false}
        ],
        explanation: "Constitution of Nepal 2072"
    }, 
    {
        question: "&ldquo;Every citizen shall have the right to demand and receive information on any matter of his or her interest or of public interest.&rdquo; is mentioned in which article of the constitution?",
        answers: [
            {text: "Article 25", correct: false},
            {text: "Article 26", correct: false},
            {text: "Article 27", correct: true},
            {text: "Article 28", correct: false}
        ],
        explanation: "Constitution of Nepal 2072"
    },
    {
        question: "Which of the following Article mentions about Right relating to Education?",
        answers: [
            {text: "Article 31", correct: true},
            {text: "Article 26", correct: false},
            {text: "Article 30", correct: false},
            {text: "Article 34", correct: false}
        ],
        explanation: "Constitution of Nepal 2072"
    },
    {
        question: "Which of the following article has listed out the Duties of citizens?",
        answers: [
            {text: "Article 51", correct: false},
            {text: "Article 48", correct: true},
            {text: "Article 50", correct: false},
            {text: "Article 46", correct: false}
        ],
        explanation: "Every citizen shall have the following duties:<br>(a) to safeguard the nationality, sovereignty and integrity of Nepal,while being loyal to the nation,<br>(b) to abide by the Constitution and law,<br>(c) to render compulsory service as and when the State so requires,<br>(d) to protect and preserve public property."
    },
    {
        question: "Which Article (Clause) of the Constitution mentions that &ldquo;The State shall direct its international relations towards enhancing the dignity of the nation in the world community by maintaining international relations on the basis of sovereign equality, while safeguarding the freedom, sovereignty, territorial integrity and independence and national interest of Nepal.&rdquo;?",
        answers: [
            {text: "Article 50(2)", correct: false},
            {text: "Article 50(3)", correct: true},
            {text: "Article 50(4)", correct: false},
            {text: "Article 51", correct: false}
        ],
        explanation: "Constitution of Nepal 2072"
    },
    {
        question: "Article 51(m) mentions that state forge its policies relating to international relations by conducting an independent foreign policy based on:",
        answers: [
            {text: "Charter of the United Nations", correct: false},
            {text: "Non-alignment", correct: false},
            {text: "Principles of <i>Panchsheel</i>", correct: false},
            {text: "International law and the norms of world peace", correct: false},
            {text: "All of the above", correct: true}
        ],
        explanation: "Constitution of Nepal 2072"
    },


];

// Quotes
let quotes = [
    "\"All persons ought to endeavour to follow what is right, and not what is established.\" - Aristotle",
    "\"Every man takes the limits of his own field of vision for the limits of the world.\" - Arthur Schopenhauer",
    "\"Rarest of all human quality is consistency.\" - Jeremy Bentham",
    "\"Do not fear to be eccentric in opinion, for every opinion now accepted was once eccentric.\" - Bertrand Russell",
    "\"If there were in the world today any large number of people who desired their own happiness more than the desired \
     the unhappiness of others, we could have paradise in a few years.\" - Bertrand Russell",
    "\"I measure the progress of a community by the degree of progress which women have achieved.\" - B R Ambedkar",
    "\"An investment in knowledge always pays the best interest.\" - Benjamin Franklin",
    "\"Early to bed and early to rise makes a man healthy, wealthy and wise.\" - Benjamin Franklin",
    "\"Consideration for others is the basis of a good life and good society.\" - Confucius"
];

// Get the elements for each ID of the question box, options, and next button.
const welcomeTextElement = document.getElementById("welcome-text");
const questionElement = document.getElementById("question-text");
const optionsButtons = document.getElementById("options-buttons");
const nextButton = document.getElementById("next");
let explanation = document.getElementById("explanation");

// Keeps track of the question while we can go next and the score.
var currentQuestionIndex = 0;
var score = 0;

// Shuffle the order of the questions.
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayRandomVerse() {
    const index = Math.floor(Math.random() * quotes.length);
    const verseElement = document.getElementById("verse");
    verseElement.innerHTML = quotes[index];
}

// Starts the quiz.
function startQuiz() {
    welcomeTextElement.style.display = "block";
    displayRandomVerse();
    setInterval(displayRandomVerse, 10000);

    // Shuffle the questions array to randomize the order.
    questions = shuffleQuestions(questions);
    
    // Reset count.
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Resets the quiz after answering all questions.
function resetQuiz() {
    nextButton.style.display = "none";
    while (optionsButtons.firstChild) {
        optionsButtons.removeChild(optionsButtons.firstChild);
    }
    startQuiz();
}

// Shows question to user.
function showQuestion() {
    // Clear the previous answer buttons.
    optionsButtons.innerHTML = "";
    
    // Make the "next" button disappear.
    nextButton.style.display = "none";

    // Hide explanation after moving on to the next question.
    explanation.style.display = "none";

    // Get current question from questions list.
    let currentQuestion = questions[currentQuestionIndex];

    // Get the question number.
    let questionNumber = currentQuestionIndex + 1;

    // Show proper question on display
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    // Show each of the possible answers from the question.
    // For each answer for the current question...
    currentQuestion.answers.forEach(answer => {
        // Create the button for the answer with the corresponding answer text.
        const button = document.createElement("button");
        button.innerHTML = answer.text;

        // Add the button to the options.
        button.classList.add("options-buttons");
        optionsButtons.appendChild(button);

        // Set "data-correct" attribute on the button if the answer 
        // is correct for later use in handling user input.
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        // When the button is clicked, we check if the option is right or wrong,
        // displaying green or red.
        button.addEventListener("click", selectAnswer);
    });
}

// Updates the score and shows if the selected answer is correct or incorrect
// by the color of green or red after clicking on an answer.
function selectAnswer(e) {
    // Get the selected button that the user clicked on.
    const selectedButton = e.target;

    // Check if the selected answer is correct by accessing the "data-correct" attribute
    // previously created on showQuestion().
    const isCorrect = selectedButton.dataset.correct === "true";

    // If the selected answer is correct, add it to "correct" to display green, and increase score.
    // If the selected answer is incorrect, add it to "incorrect" to display red.
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }

    // Disable all answer buttons to prevent further selections after the user has chosen an answer.
    // Store every correct answer into "correct" to prevent further selection of options.
    Array.from(optionsButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }

        // Disable button.
        button.disabled = true;
    });

    explanation.innerHTML = "Explanation: " + questions[currentQuestionIndex]['explanation'];
    explanation.style.display = "block";

    // Make the "next" button appear for user to click and move on.
    nextButton.style.display = "block";
}

// After clicking "next", check if there's another question after the current one.
nextButton.addEventListener("click", checkNext);

// Displays the next question.
function nextQuestion() {
    // Go to the next question.
    currentQuestionIndex++;

    // Display question if there are more questions, show score, otherwise.
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Show the score at the end of the quiz.
function showScore() {
    // Hide explanation from last question.
    explanation.style.display = "none";

    // Remove the options to show the score only.
    while (optionsButtons.firstChild) {
        optionsButtons.removeChild(optionsButtons.firstChild);
    }

    // Show score that the user got and update text of the "next" button to 
    // "Play Again" for user to play again.
    questionElement.innerHTML = "You scored " + score + " out of  " + questions.length + "! -> " + (score / questions.length * 100).toFixed(1) + "\%";
    nextButton.innerHTML = "Play Again";

    // Remove the previous click event listener from nextButton.
    nextButton.removeEventListener("click", checkNext);

    // Add the click event listener to start the quiz again when "Play Again" is clicked.
    nextButton.addEventListener("click", resetQuiz);
}

// Checks if there are more questions to be answered. Reset quiz otherwise.
function checkNext() {
    // Hide the welcome text.
    welcomeTextElement.style.display = "none";

    if (currentQuestionIndex < questions.length) {
        nextQuestion();
    } else {
        showScore();
    }
}

startQuiz();
