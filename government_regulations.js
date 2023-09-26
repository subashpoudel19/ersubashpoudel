
let questions = [
    {
        question: "Who can make the transfer, placement and deputation of personnel up to gazetted Third Class officer working under the department?",
        answers: [
            {text: "Head of the Department", correct: false},
            {text: "Secretary", correct: false},
            {text: "Chief Secretary", correct: true},
            {text: "Chief Office-holder", correct: false}
        ],
        explanation: "Secretary-> Upto Gazetted Class Two officers, Head of Department-> Upto Gazetted Class Three officers, Chief Office-holder-> Non-Gazetted Officers"
    }, 
    {
        question: "What is the maximum and minimum number of wards permissible in Rural Municipality?",
        answers: [
            {text: "Min.5 Max.21", correct: true},
            {text: "Min.7 Max.27", correct: false},
            {text: "Min.9 Max.35", correct: false},
            {text: "Min.10 Max.25", correct: false}
        ],
        explanation: "LSGA 2074"
    }, 
    {
        question: "How many days before the new fiscal year, the Dar-Rate of local level should be published?",
        answers: [
            {text: "7 days", correct: false},
            {text: "15 days", correct: true},
            {text: "21 days", correct: false},
            {text: "1 month", correct: false}
        ],
        explanation: "LSGA 2074"
    }, 
    {
        question: "What is the title of officer who is responsible for managing the complaints of consumers?",
        answers: [
            {text: "Information Officer", correct: false},
            {text: "Modal Officer", correct: false},
            {text: "Section Officer", correct: false},
            {text: "Nodal Officer", correct: true}
        ],
        explanation: "LSGR 2075"
    }, 
    {
        question: "How many members are envisaged on the central monitoring and evaluation commmittee established as per Local Self-Governance Rules 2075?",
        answers: [
            {text: "11", correct: false},
            {text: "9", correct: true},
            {text: "8", correct: false},
            {text: "7", correct: false}
        ],
        explanation: "Chief Secretary will be the co-ordinator"
    }, 
    {
        question: "While sending work from one governmental office to another, a Head of Department or Office-holder or Section Officer labels the work as 'URGENT', what is the time period within which the receiver officer should send the answer?",
        answers: [
            {text: "3 days", correct: false},
            {text: "2 days", correct: true},
            {text: "7 days", correct: false},
            {text: "15 days", correct: false}
        ],
        explanation: "URGENT-> (Head of Department or Office-holder or Section Officer) 2 days; VERY IMPORTANT-> (Same as above) 5 days; IMPORTANT (one level lower than Office-holder) 7 days; NORMAL-> (Related Officer) 15 days"
    }, 
    {
        question: "What is the punishment for taking graft of amount between Twenty thousands rupees and Fifty thousands rupees?",
        answers: [
            {text: "Imprisonement for 4 to 6 months", correct: false},
            {text: "Imprisonement for 6 to 1 year", correct: false},
            {text: "Imprisonement for 3 to 4 months", correct: true},
            {text: "Imprisonement for less than 3 months", correct: false}
        ],
        explanation: "<Rs.20,000(<3 months); 20,000 to 50,000(3-4 months); 50,000 to 1 lakh (4-6 months); 1 lakh to 5 lakhs (6 months-1.5yrs); 5 lakhs to 10 lakhs (1.5yrs-2.5yrs); 10 lakhs to 25 lakhs (2.5yrs-4yrs); 25 lakhs to 50 lakhs (4-6 yrs); 50 lakhs to 1 crore (6-8 yrs); >1 crore (8-10 yrs) "
    }, 
    {
        question: "What is the punishment for taking gift, present, award or donation for a public servant?",
        answers: [
            {text: "3-6 months", correct: true},
            {text: "4-6 months", correct: false},
            {text: "Only goods confiscated", correct: false},
            {text: "less than 3 months", correct: false}
        ],
        explanation: "Whoever, being a public servant, accepts, without a prior approval Government of Nepal or a public institution, any type of donation, gifts, presents, awards or any type of benefit him/herself or through any member of his/her family or other person, so as to causing an impact in any way on any of his/her works which is supposed to be carried out by him/her according to the office he/she assumes; or any public servant who borrows from a person related to a work which he/she has to carry out according to the office he assumes, shall be liable to a punishment of imprisonment from three to six months depending on the degree of the offence and the amount shall be confiscated. "
    }, 
    {
        question: "What is the punishment for public servant for preparing false documents?",
        answers: [
            {text: "Imprisonement 3-6 months & fine 10 thousands to 20 thousands", correct: false},
            {text: "Imprisonement 3-9 months & fine 10 thousands to 30 thousands", correct: false},
            {text: "Imprisonement 3 months - 1 year & fine 10 thousands to 50 thousands", correct: true},
            {text: "Imprisonement 3 months - 1 year 3 months & fine 30 thousands to 70 thousands", correct: false}
        ],
        explanation: "Whoever, being a public servant under the duty of preparing documents, prepares false documents with mala fide intention of causing loss to Government of Nepal or Government or public institution, shall be liable to a punishment of imprisonment for a term from three months to one year, and a fine from ten thousand to fifty thousand rupees."
    }, 
    {
        question: "What is the punishment for public servant for tempering government documents?",
        answers: [
            {text: "Imprisonement 3-6 months & fine <10 thousands", correct: false},
            {text: "Imprisonement 3-9 months & fine < 20 thousands", correct: false},
            {text: "Imprisonement 3 months - 1 year & fine < 30 thousands", correct: false},
            {text: "Imprisonement 3 months - 2 years & fine <50 thousands ", correct: true}
        ],
        explanation: "Whoever, either a public servant or any other person, corrects, adds, or changes in documents belonging to a government or public institution without authority or in an illegal manner, shall be liable to a punishment of imprisonment for a term from three months to two years and a fine not exceeding fifty thousands rupees. "
    }, 
    {
        question: "What is the punishment for public servant for causing damage to government or public documents?",
        answers: [
            {text: "Imprisonement 3-6 months & fine 10 thousands to 20 thousands", correct: false},
            {text: "Imprisonement 6 months - 1 year & fine 10 thousands to 50 thousands", correct: true},
            {text: "Imprisonement 3 months - 1 year & fine 10 thousands to 50 thousands", correct: false},
            {text: "Imprisonement 3 months - 1 year 3 months & fine 30 thousands to 70 thousands", correct: false}
        ],
        explanation: "Whoever, being a public servant, conceals a document belonging to government or to a public institution or causes damage to, or destroys, such document, shall be lia ble to a punishment of im prisonment from six month to one year and shall be fined from ten thousand to fifty thousa nd rupee s. In case any loss is incurred due to such concealment, damage or destruction, the losses shall also be recovered."
    }, 
    {
        question: "What is the punishment for authorized person for disclosing secrecy of question papers or altering the result of examination?",
        answers: [
            {text: "Imprisonement 3 months - 1 year & fine 5 thousands to 10 thousands", correct: true},
            {text: "Imprisonement 6 months - 1 year & fine 10 thousands to 15 thousands", correct: false},
            {text: "Imprisonement 3 months - 6 months & fine 5 thousands to 15 thousands", correct: false},
            {text: "Imprisonement 3 months - 1 year & fine 10 thousands to 20 thousands", correct: false}
        ],
        explanation: "Save in cases where the authorized person discloses or causes to disclose question papers of an examination to be conducted by a governme nt body or a public institution be fore the prescribed time having given reasons of special circumstances. Whoever, being a public servant, discloses or causes to disclose the secrecy of such question paper in any manner whatsoe ver, or alters or causes to alter the results of examinations with the intention of making illegal advantage to him/herself or any other person, shall be liable to a punishment of imprisonment from three months to one year and shall be fined from five thousand to ten thousand rupees."
    }, 
    {
        question: "What is the punishment for public servant for engaging in illegal trade or business?",
        answers: [
            {text: "Imprisonement 3 months - 9 months & fine 10 thousands to 30 thousands", correct: false},
            {text: "Imprisonement 3 months - 6 months & fine 10 thousands to 50 thousands", correct: true},
            {text: "Imprisonement 3 months - 6 months & fine 20 thousands to 60 thousands", correct: false},
            {text: "Imprisonement 3 months - 1 year & fine 30 thousands to 70 thousands", correct: false}
        ],
        explanation: "Whoever, being a public servant, engages in trade or business in his/her own name or in the name of other person or in partnership with others, takes part in auction or bidding, or becomes a partner in any firm or company or a cooperative organization while being prohibited by law, shall be liable a punishment of imprisonment for a term from three months to six months and a fine from ten thousand to fifty thousand rupees, and the property earned in such a manner shall be confiscated."
    },
    {
        question: "What is the punishment for public servant for claiming false designation?",
        answers: [
            {text: "Imprisonement 3 months - 9 months & fine 10 thousands to 30 thousands", correct: false},
            {text: "Imprisonement 6 months - 1 year & fine 30 thousands to 70 thousands", correct: false},
            {text: "Imprisonement 6 months - 1 year 6 months & fine 40 thousands to 80 thousands", correct: false},
            {text: "Imprisonement 1 year - 2 years & fine 50 thousands to 1 lakh", correct: true}
        ],
        explanation: "Whoever, either a public servant or any other person falsely claims that he/she holds any position, power, capacity or facility or enjoys such position, power, capacity or facility of a public servant which he/she is not entitled to or displays any symbol, dress or mark relating to a position of a public servant or wears or displays any object resembling to such symbol, dress or mark with the intention of leading others to falsely believe that these are the official symbols, dresses or marks of a public servant, shall be liable to a punishment of imprisonment for a term from one year to two years and with a fine from fifty thousand to one hundred thousand rupees, depending on the degree of the offence committed."
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
