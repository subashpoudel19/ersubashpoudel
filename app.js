// A list of questions with possible answers.
let questions = [
    {
        question: "What is the number of office bearer in the Municipal Executive(Assuming 11 Wards)?",
        answers: [
            {text: "20", correct: false},
            {text: "21", correct: true},
            {text: "22", correct: false},
            {text: "23", correct: false}
        ],
        explanation: "Mayor-1, Deputy Mayor-1, Ward Chairpersons-11, Female-5, Dalit or Minority Community-3; Total-21"
    }, 
    {
        question: "What is the number of members of the Village Assembly (Assuming 9 Wards)?",
        answers: [
            {text: "48", correct: false},
            {text: "51", correct: false},
            {text: "46", correct: false},
            {text: "49", correct: true}
        ],
        explanation: "Chair-1, ViceChair-1, WardChair-9x1, WardMembers-9x4=36, Persons from Dalit or Minority Community-2; Total=49"
    }, 
    {
        question: "What is the number of members of the Municipal Assembly (Assuming 11 Wards)?",
        answers: [
            {text: "58", correct: false},
            {text: "60", correct: true},
            {text: "62", correct: false},
            {text: "64", correct: false}
        ],
        explanation: "Chair-1, ViceChair-1, WardChair-11x1=11, WardMembers-11x4=44, Persons from Dalit or Minority Community-3; Total=60"
    }, 

    {
        question: "Against which of the office-bearers may the motion of impeachment NOT be introduced as per the Constitution of Nepal?",
        answers: [
            {text: "President, Vice-President", correct: false},
            {text: "Chief Justice of Nepal", correct: false},
            {text: "Justice of Supreme Court", correct: false},
            {text: "Elected member of House of Representative", correct: true}
        ],
        explanation: "In addition, Member of Judicial Council and Chief or Office-bearer of a Consitutional Body are also liable to impeachment as per Article 101."
    }, 
    {
        question: "What is the number of office bearers in Village Executive? (Assume 9 Wards)?",
        answers: [
            {text: "15", correct: false},
            {text: "16", correct: false},
            {text: "17", correct: true},
            {text: "18", correct: false}
        ],
        explanation: "Chairperson-1, Vice Chairperson-1, Ward Chairpersons-9, Female-4, Dalit or minority community-2; Total-17 "
    }, 
    {
        question: "When was the first election held in Nepal?",
        answers: [
            {text: "29 Jestha 2004", correct: true},
            {text: "19 Jestha 2004", correct: false},
            {text: "29 Jestha 2005", correct: false},
            {text: "19 Jestha 2005", correct: false}
        ],
        explanation: "The history of election began in Nepal with an election of Local Body. The election of Kathmandu Municipality was held on 29 Jestha 2004 B.S. (11 June 1947) for the first time in Nepal. Nepalese Women obtained right to vote in the election of the Kathmandu Municipality held in 2010 B.S. (1953). "
    }, 
    {
        question: "Who was the first elected women people's representative in the country?",
        answers: [
            {text: "Puspa Basnet", correct: false},
            {text: "Phupu Lhamu Khatri", correct: false},
            {text: "Sadhana Devi Pradhan", correct: true},
            {text: "Usha Nepal", correct: false}
        ],
        explanation: "The very first elected woman people’s representative in the country was Sadhana Devi Pradhan. She was elected as the Ward Chairperson of Ward No 8 in the election of the Kathmandu Municipality held in 2010 B.S. (1953)."
    }, 
    {
        question: "Who was the first Chief Election Commissioner of Nepal?",
        answers: [
            {text: "Subarna Sumsher Rana", correct: true},
            {text: "Mohan Sumsher Rana", correct: false},
            {text: "King Tribhuvan", correct: false},
            {text: "BP Koirala", correct: false}
        ],
        explanation: "The first Chief Election Commissioner of Nepal was Subarna Sumsher Rana."
    }, 
    {
        question: "Who was the first Woman Chief Election Commissioner of Nepal?",
        answers: [
            {text: "Puspa Basnet", correct: false},
            {text: "Phupu Lhamu Khatri", correct: false},
            {text: "Sadhana Devi Pradhan", correct: false},
            {text: "Usha Nepal", correct: true}
        ],
        explanation: "The first Woman Election Commissioner of Nepal was Usha Nepal."
    }, 
    {
        question: "When was the first parliamentary election of Nepal held?",
        answers: [
            {text: "9 Falgun 2015 (20 February 1958)", correct: false},
            {text: "7 Falgun 2015 (18 February 1958)", correct: true},
            {text: "17 Falgun 2015 (28 February 1958)", correct: false},
            {text: "11 Falgun 2015 (22 February 1958)", correct: false}
        ],
        explanation: "The First Parliamentary Election of Nepal was held in 7 Falgun 2015 B.S. (18 February 1958)."
    }, 
    {
        question: "When was the National Referendum held?",
        answers: [
            {text: "20 Baisakh 2037", correct: true},
            {text: "10 Jestha 2036", correct: false},
            {text: "1 Jestha 2037", correct: false},
            {text: "27 Kartik 2036", correct: false}
        ],
        explanation: "The National Referendum was held in 20 Baishak 2037 B.S. (2 May 1980). In order to conduct National Referendum, Bhagawati Prasad Singh was appointed as Chairperson of the National Election Commission formed in 2036 B.S. (1979)."
    }, 
    {
        question: "How many members in District Co-ordination Committee?",
        answers: [
            {text: "9", correct: true},
            {text: "10", correct: false},
            {text: "11", correct: false},
            {text: "12", correct: false}
        ],
        explanation: "Cheif-1, Deputy Chief-1, Female(at least-3), Dalit or Minority Community (at least-1); Total (MAXIMUM 9)"
    }, 
    {
        question: "What is the english date of Constitution promulgation?",
        answers: [
            {text: "20th September, 2014", correct: false},
            {text: "20th September, 2015", correct: true},
            {text: "21st September, 2014", correct: false},
            {text: "21st September, 2015", correct: false}
        ],
        explanation: "Ashoj 3, 2072"
    },
    {
        question: "Which of the following subjects concerning election have been dealt within the preamble to the Constitution?",
        answers: [
            {text: "Adult franchise", correct: false},
            {text: "Periodic election", correct: false},
            {text: "Both of them", correct: true},
            {text: "None of them", correct: false}
        ],
        explanation: "The Constitution of Nepal has adopted the supremacy of the adult franchise and the principle of inclusive representation"
    },
    {
        question: "How many forms of electoral systems are present for the elections in Nepal?",
        answers: [
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
            {text: "5", correct: true}
        ],
        explanation: "5 (Local Level, State Assembly, Federal Parliament, President and Vice President)"
    },
    {
        question: "Which method is used in the Proportionate Representation seats allocation?",
        answers: [
            {text: "D'Hondt", correct: false},
            {text: "Sainte-Laguë", correct: true},
            {text: "Gallagher Index", correct: false},
            {text: "Wasted Vote", correct: false}
        ],
        explanation: "According to Sainte-Laguë formula, each party's votes are divided by a sequence of odd numbers (1,3,5,7,9,11 and so on) until enough quotients are found to allocate all 110 seats of the House."
    },
    {
        question: "Which article of the Constitution of Nepal, 2072 does NOT mention about Election Commission?",
        answers: [
            {text: "244", correct: true},
            {text: "245", correct: false},
            {text: "246", correct: false},
            {text: "247", correct: false}
        ],
        explanation: "The Election Commission is a Constitutional Body. Articles 245, 246 and 247 of the Constitution has provisioned about the Election Commission."
    },
    {
        question: "What is the minimum age and qualification for appointment of office of Cheif Commissioner/Election Commissioner?",
        answers: [
            {text: "35 years and Bachelor's degree", correct: false},
            {text: "35 years and Master's degree", correct: false},
            {text: "45 years and Bachelor's degree", correct: true},
            {text: "45 years and Master's degree", correct: false}
        ],
        explanation: "The following qualifications are necessary to be appointed as Chief Election Commissioner/Election Commissioner:  Holding a bachelor’s degree from a recognized university; Having attained the age of 45 years"
    },
    {
        question: "On what circumstances are Chief Election Commissioner and Election Commissioners relieved from the office?",
        answers: [
            {text: "Having submitted written resignation to the President", correct: false},
            {text: "Having attained the age of 65 years", correct: false},
            {text: "Having been impeached by the parliament by passing the impeachment motion pursuant to Article 101", correct: false},
            {text: "Having been dismissed by the President on the recommendation of the Constitutional Council for being unable to perform works of the office due to physical or mental ill-health", correct: false},
            {text: "If he or she dies", correct: false},
            {text: "All of above", correct: true}
        ],
        explanation: "The following qualifications are necessary to be appointed as Chief Election Commissioner/Election Commissioner:  Holding a bachelor’s degree from a recognized university; Having attained the age of 45 years"
    },
    {
        question: "How many members are there in the Federal Parliament?",
        answers: [
            {text: "332", correct: false},
            {text: "333", correct: false},
            {text: "334", correct: true},
            {text: "335", correct: false}
        ],
        explanation: "The Federal Parliament shall be bicameral. There shall be a total of 334 members in the Federal Parliament, out of which the House of Representatives will have 275 members and the National Assembly will have 59 members."
    },
    {
        question: "What is the age qualification to become a member of Federal Parliament?",
        answers: [
            {text: "25 years for both House of Representatives and National Assembly", correct: false},
            {text: "25 years for House of Representatives and 35 years for National Assembly", correct: true},
            {text: "35 years for House of Representatives and 25 years for National Assembly", correct: false},
            {text: "35 years for both House of Representatives and National Assembly", correct: false}
        ],
        explanation: "Having attained the age of 25 years in case of the House of Representatives and 35 years in case of the National Assembly"
    },
    {
        question: "In case of a state of emergency, for how long can the term of office of the House of Representatives be extended ?",
        answers: [
            {text: "6 months", correct: false},
            {text: "9 months", correct: false},
            {text: "1 year", correct: true},
            {text: "1 year 6 months", correct: false}
        ],
        explanation: "The term of office may be extended not exceeding one year in case of state of emergency. In case of extension of the term of the office, it shall be ipso facto ended upon the completion of six months from the date of evocation of the state of emergency situation."
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
