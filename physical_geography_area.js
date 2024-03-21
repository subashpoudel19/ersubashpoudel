
let questions = [
    
    {
        question: "Where is Soda commonly found in Nepal?",
        answers: [
            { text: "Chitwan", correct: false },
            { text: "Kaski", correct: false },
            { text: "Doti", correct: true },
            { text: "Syangja", correct: false }
        ],
        explanation: "Soda is commonly found in Doti, Nepal."
    },
    {
        question: "Which district houses the tourist destination Ramaroshan?",
        answers: [
            { text: "Bajhang", correct: false },
            { text: "Bajura", correct: false },
            { text: "Achham", correct: true },
            { text: "Baitadi", correct: false }
        ],
        explanation: "The tourist destination Ramaroshan is located in Achham district."
    },
    {
        question: "In which district is the Jagadulla Hydropower located?",
        answers: [
            { text: "Rukum West", correct: false },
            { text: "Taplejung", correct: false },
            { text: "Humla", correct: false },
            { text: "Dolpa", correct: true }
        ],
        explanation: "The Jagadulla Hydropower is located in Dolpa district."
    },
    {
        question: "On what date was the Labour Court established according to the decision made?",
        answers: [
            { text: "2075/04/29", correct: false },
            { text: "2078/05/29", correct: false },
            { text: "2077/06/29", correct: true },
            { text: "2076/07/29", correct: false }
        ],
        explanation: "The Labour Court was established on 2077/06/29."
    },
    {
        question: "When was Province No. 3 officially renamed Bagmati Province?",
        answers: [
            { text: "2075/11/01", correct: false },
            { text: "2076/08/15", correct: false },
            { text: "2077/09/27", correct: true },
            { text: "2078/10/12", correct: false }
        ],
        explanation: "Province No. 3 was officially renamed Bagmati Province on 2077/09/27."
    },
    {
        question: "Who observes the Trohote festival?",
        answers: [
            { text: "Sherpa", correct: false },
            { text: "Gurung", correct: true },
            { text: "Magar", correct: false },
            { text: "Tamang", correct: false }
        ],
        explanation: "The Trohote festival is observed by the Gurung community."
    },
    {
        question: "Which plan aimed to eliminate social disparities?",
        answers: [
            { text: "1st plan", correct: false },
            { text: "4th plan", correct: false },
            { text: "3rd plan", correct: true },
            { text: "2nd plan", correct: false }
        ],
        explanation: "The 3rd plan aimed to eliminate social disparities."
    },
    {
        question: "What was the target HDI at the end of the current five-year plan?",
        answers: [
            { text: "0.782", correct: false },
            { text: "0.624", correct: true },
            { text: "0.602", correct: false },
            { text: "0.592", correct: false }
        ],
        explanation: "The target HDI at the end of the current five-year plan was 0.624."
    },
    {
        question: "Which theory suggests that individuals always make rational decisions in their self-interest?",
        answers: [
            { text: "Keynesian Economics", correct: false },
            { text: "Marxist Economics", correct: false },
            { text: "Behavioral Economics", correct: false },
            { text: "Economic Man Theory/Approach", correct: true }
        ],
        explanation: "The Economic Man Theory/Approach suggests that individuals always make rational decisions in their self-interest."
    },
    {
        question: "What is the name of the Parliament in Bangladesh?",
        answers: [
            { text: "National Assembly", correct: false },
            { text: "Majlis-e-Shura", correct: false },
            { text: "Storlin", correct: false },
            { text: "Jatiya Sangsad", correct: true }
        ],
        explanation: "The Parliament in Bangladesh is called Jatiya Sangsad."
    },
    {
        question: "In what order did Nepal establish bilateral relations with SAARC countries?",
        answers: [
            { text: "India->Sri Lanka->Pakistan->Afghanistan->Bangladesh->Maldives->Bhutan", correct: true },
            { text: "Bhutan->India->Pakistan->Sri Lanka->Maldives->Bangladesh->Afghanistan", correct: false },
            { text: "India->Pakistan->Sri Lanka->Bangladesh->Bhutan->Maldives->Afghanistan", correct: false },
            { text: "Sri Lanka->India->Pakistan->Bangladesh->Maldives->Bhutan->Afghanistan", correct: false }
        ],
        explanation: "Nepal established bilateral relations with SAARC countries in the following order: India->Sri Lanka->Pakistan->Afghanistan->Bangladesh->Maldives->Bhutan."
    },
    {
        question: "Who proposed the Two-Factor Theory of Motivation?",
        answers: [
            { text: "McGregor", correct: false },
            { text: "Maslow", correct: false },
            { text: "McCauley", correct: false },
            { text: "Herzberg", correct: true }
        ],
        explanation: "The Two-Factor Theory of Motivation was proposed by Herzberg."
    },
    {
        question: "Which province has the highest population in Nepal?",
        answers: [
            { text: "Koshi", correct: false },
            { text: "Gandaki", correct: false },
            { text: "Madhesh", correct: false },
            { text: "Bagmati", correct: true }
        ],
        explanation: "Bagmati Province has the highest population in Nepal."
    },
    {
        question: "In what year was the declaration of the referendum made?",
        answers: [
            { text: "2037 Jeth 10", correct: false },
            { text: "2036 Baisakh 20", correct: false },
            { text: "2037 Baishakh 20", correct: false },
            { text: "2036 Jeth 10", correct: true }
        ],
        explanation: "The declaration of the referendum was made in the year 2036 Jeth 10."
    },
    {
        question: "In which year was the cyber law in Nepal, also known as Electronics Transactions Act (ETA), promulgated?",
        answers: [
            { text: "2080", correct: false },
            { text: "2070", correct: false },
            { text: "2065", correct: false },
            { text: "2063", correct: true },
        ],
        explanation: "The cyber law in Nepal, also known as the Electronics Transactions Act (ETA), was promulgated in the year 2063."
    },
    {
        question: "What is Nepal's ranking among the countries that have become members of the UN?",
        answers: [
            { text: "50th", correct: false },
            { text: "15th", correct: false },
            { text: "30th", correct: false },
            { text: "72nd", correct: true }
        ],
        explanation: "Nepal's ranking among the countries that have become members of the UN is 72nd."
    },
    {
        question: "What membership should a country obtain before joining the World Bank?",
        answers: [
            { text: "UN", correct: false },
            { text: "WTO", correct: false },
            { text: "ASEAN", correct: false },
            { text: "IMF", correct: true }
        ],
        explanation: "A country should obtain membership in the IMF before joining the World Bank."
    },
    {
        question: "What is the punishment for government officials who receive amounts ranging from Rs 1 million to Rs 2.5 million from service seekers under the Prevention of Corruption Act?",
        answers: [
            { text: "5-7 years imprisonment", correct: false },
            { text: "6 months-1 year imprisonment", correct: false },
            { text: "1-2.5 years imprisonment", correct: false },
            { text: "2.5-5 years imprisonment", correct: true }
        ],
        explanation: "The punishment for government officials who receive amounts ranging from Rs 1 million to Rs 2.5 million from service seekers under the Prevention of Corruption Act is 2.5-5 years imprisonment."
    },
    {
        question: "Who proposed the Principal-Agent theory?",
        answers: [
            { text: "Adam Smith", correct: false },
            { text: "Karl Marx", correct: false },
            { text: "John Maynard Keynes", correct: false },
            { text: "Friedrich and Robert Dye", correct: true }
        ],
        explanation: "The Principal-Agent theory was proposed by Friedrich and Robert Dye."
    },
    {
        question: "Who serves as the chairman of the committee formed in each district to determine the rent of houses and lands rented by the public body?",
        answers: [
            { text: "District Education Officer", correct: false },
            { text: "District Development Officer", correct: false },
            { text: "District Attorney", correct: false },
            { text: "District Chief Officer", correct: true }
        ],
        explanation: "The chairman of the committee formed in each district to determine the rent of houses and lands rented by the public body is the District Chief Officer."
    },
    {
        question: "Which of the following is NOT typically formulated by a governing body or authority?",
        answers: [
            { text: "Policy", correct: false },
            { text: "Program", correct: false },
            { text: "None of the above", correct: true },
            { text: "Constitution", correct: false }
        ],
        explanation: "None of the above is typically formulated by a governing body or authority."
    },
    {
        question: "According to the Employee Adjustment Act 2075, within how many days do bureaucrats need to be present in their office?",
        answers: [
            { text: "30 days", correct: false },
            { text: "15 days", correct: false },
            { text: "10 days", correct: false },
            { text: "21 days", correct: true }
        ],
        explanation: "According to the Employee Adjustment Act 2075, bureaucrats need to be present in their office within 21 days."
    },
    {
        question: "How many days in advance can the purchaser organize a pre-bid meeting of Bidders, as per the Public Procurement Act and Rules 2063 and 2064?",
        answers: [
            { text: "Five (5) days", correct: false },
            { text: "Fifteen (15) days", correct: false },
            { text: "Twenty (20) days", correct: false },
            { text: "Ten (10) days", correct: true }
        ],
        explanation: "The purchaser can organize a pre-bid meeting of Bidders ten (10) days in advance, as per the Public Procurement Act and Rules 2063 and 2064."
    },
    
        {
            question: "Who proposed the Two-Factor Theory of Motivation?",
            answers: [
                { text: "McGregor", correct: false },
                { text: "Maslow", correct: false },
                { text: "McCauley", correct: false },
                { text: "Herzberg", correct: true }
            ],
            explanation: "The Two-Factor Theory of Motivation was proposed by Herzberg."
        },
        {
            question: "Which province has the highest population in Nepal?",
            answers: [
                { text: "Koshi", correct: false },
                { text: "Gandaki", correct: false },
                { text: "Madhesh", correct: false },
                { text: "Bagmati", correct: true }
            ],
            explanation: "Bagmati Province has the highest population in Nepal."
        },
        
        
        {
            question: "How is the right to employment, as stated in Article 33 of the Constitution of Nepal, implemented by the Government?",
            answers: [
                { text: "Labor Act, 2072", correct: false },
                { text: "Employment Opportunities Act, 2077", correct: false },
                { text: "Labor and Employment Act, 2074", correct: false },
                { text: "Prime Minister Employment Program, 2075", correct: true }
            ],
            explanation: "The right to employment, as stated in Article 33 of the Constitution of Nepal, is implemented by the Government through the Prime Minister Employment Program, 2075."
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
