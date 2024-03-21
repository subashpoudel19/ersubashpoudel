
let questions = [
    {
        "questions": [
            {
                "question": "When was 'The Public Procurement Regulation, 2064 (2007)' published in the Nepal Gazette?",
                "answers": [
                    {"text": "2064 Bhadra 03", "correct": true},
                    {"text": "2064 Poush 30", "correct": false},
                    {"text": "2064 Mangsir 09", "correct": false},
                    {"text": "2064 Asar 29", "correct": false}
                ],
                "explanation": "The 'The Public Procurement Regulation, 2064 (2007)' was published in the Nepal Gazette on 2064 Bhadra 03. Till date, 12 amendments to the original regulation have been made, with the latest (12th) amendment being made on 2079 Asar 20."
            },
            {
                "question": "Who has the authority to approve the cost estimate of a consultancy work that does not exceed 1 crore rupees?",
                "answers": [
                    {"text": "Head of department", "correct": false},
                    {"text": "Gazetted second-class chief of office", "correct": false},
                    {"text": "Gazetted third-class chief of office", "correct": false},
                    {"text": "Gazetted first-class chief of office", "correct": true}
                ],
                "explanation": "For consultancy work: Up to 20 lakhs->Gazetted third-class chief of office; Up to 50 lakhs->Gazetted second-class chief of office; Up to 1 crore->Gazetted first-class chief of office; More than 1 crore->Head of Department [See Rule 14]"
            },
            {
                "question": "Who has the authority to approve the cost estimate of consultancy services that exceeds 5 crore rupees?",
                "answers": [
                    {"text": "Head of department", "correct": true},
                    {"text": "Gazetted second-class chief of office", "correct": false},
                    {"text": "Gazetted first-class chief of office", "correct": false},
                    {"text": "Gazetted third-class chief of office", "correct": false}
                ],
                "explanation": "For consultancy work: Up to 20 lakhs->Gazetted third-class chief of office; Up to 50 lakhs->Gazetted second-class chief of office; Up to 1 crore->Gazetted first-class chief of office; More than 1 crore->Head of Department [See Rule 14]"
            },
            {
                "question": "According to Rule 8, what is the first step in making preparation for any procurement proceeding by a public entity?",
                "answers": [
                    {"text": "Obtain information of procurement contracts", "correct": false},
                    {"text": "Identify the procurement need", "correct": true},
                    {"text": "Prepare the cost estimate", "correct": false},
                    {"text": "Select the procurement method", "correct": false}
                ],
                "explanation": "The first step in making preparation for any procurement proceeding by a public entity is to identify the procurement need."
            },
            {
                "question": "What is the purpose of the Evaluation Committee, as mentioned in Rule 2?",
                "answers": [
                    {"text": "To approve cost estimates", "correct": false},
                    {"text": "To evaluate sealed quotations and bids", "correct": true},
                    {"text": "To prepare master procurement plans", "correct": false},
                    {"text": "To coordinate procurement actions", "correct": false}
                ],
                "explanation": "The purpose of the Evaluation Committee is to evaluate sealed quotations and bids."
            },
            {
                "question": "What is the maximum percentage by which the price of goods manufactured in Nepal can be higher than foreign goods when procuring through any method specified in the Regulation?",
                "answers": [
                    {"text": "10%", "correct": false},
                    {"text": "15%", "correct": true},
                    {"text": "20%", "correct": false},
                    {"text": "25%", "correct": false}
                ],
                "explanation": "A public entity shall, in making procurement by selecting any method set forth in this Regulation, procure the Nepali goods even though the price of the goods manufactured in Nepal is higher by up to fifteen percent than the foreign goods."
            },
            {
                "question": "Which document is NOT required for registration or updating in the standing list pursuant to Section 6A. of the Act?",
                "answers": [
                    {"text": "Business license", "correct": false},
                    {"text": "Tax clearance certificate", "correct": false},
                    {"text": "PAN or VAT registration certificate", "correct": false},
                    {"text": "Certificate of citizenship", "correct": true}
                ],
                "explanation": "Certificate of citizenship is NOT required for registration or updating in the standing list pursuant to Section 6A. of the Act."
            },
            {
                "question": "How often is the standing list published?",
                "answers": [
                    {"text": "Annually", "correct": false},
                    {"text": "Quarterly", "correct": false},
                    {"text": "Semi-annually", "correct":false},
                    {"text": "Monthly", "correct": false}
                    ],
                    "explanation": "The standing list shall be published semi-annually by posting it on the notice boards of the District Administration Office and the Treasury Controller Office situated in the district or by putting it on the website of the concerned public entity."
            },
            {
                    "question": "Under what circumstances can procurement be made from a supplier not listed in the standing list?",
                    "answers": [
                    {"text": "Only in emergencies", "correct": false},
                    {"text": "If the value-added tax is not leviable", "correct": true},
                    {"text": "In all cases without any restriction", "correct": false},
                    {"text": "If the bidder has political influence", "correct": false}
                    ],
                    "explanation": "Procurement may be made from a supplier not listed in the standing list if the value-added tax is not leviable."
                    },
                    {
                    "question": "In which situations can procurement be made from a supplier in a remote area without a value-added tax registration certificate?",
                    "answers": [
                    {"text": "Procuring goods less than ten thousand rupees", "correct": false},
                    {"text": "Renting a house", "correct": false},
                    {"text": "Executing a construction work with user committees", "correct": false},
                    {"text": "All of the above", "correct": true}
                    ],
                    "explanation": "Procurement may be made from a supplier in a remote area without a value-added tax registration certificate in the mentioned situations: (a) Procuring goods or executing construction works of an amount less than twenty thousand rupees, (b) Procuring any goods, consultancy services or other services on which value-added tax is not leviable. (c) Renting a house, and (d) Executing a construction work with the participation of users' committee or beneficiary community."
                    },
                    {
                    "question": "In the absence of standard bidding documents, what can a public entity do?",
                    "answers": [
                    {"text": "Delay the procurement process", "correct": false},
                    {"text": "Prepare and use tender documents with the consent of the Public Procurement Monitoring Office", "correct": true},
                    {"text": "Cancel the procurement", "correct": false},
                    {"text": "Seek approval from the Ministry of Finance", "correct": false}
                    ],
                    "explanation": "In the absence of standard bidding documents, a public entity can prepare and use tender documents with the consent of the Public Procurement Monitoring Office."
                    },
                    {
                    "question": "How often is the standing list updated by the public entity?",
                    "answers": [
                    {"text": "Monthly", "correct": false},
                    {"text": "Annually", "correct": true},
                    {"text": "Bi-annually", "correct": false},
                    {"text": "Quarterly", "correct": false}
                    ],
                    "explanation": "The standing list is updated by the public entity annually."
                    },
                    {
                    "question": "In what form does a person or organization apply for registration or update in the standing list?",
                    "answers": [
                    {"text": "Schedule-2A", "correct": true},
                    {"text": "Schedule-2B", "correct": false},
                    {"text": "Schedule-2C", "correct": false},
                    {"text": "Schedule-3", "correct": false}
                    ],
                    "explanation": "A person or organization applies for registration or update in the standing list using Schedule-2A."
                    },
                    {
                    "question": "What documents are required for qualification of bidders supplying goods?",
                    "answers": [
                    {"text": "Only tax clearance certificate", "correct": false},
                    {"text": "Only manufacturing records", "correct": false},
                    {"text": "A combination of documents including technical capacity and economic capability", "correct": true},
                    {"text": "Only business license", "correct": false}
                    ],
                    "explanation": "For qualification of bidders supplying goods, a combination of documents including technical capacity and economic capability are required."
                    },
                    {
                    "question": "What is the basis for computing the average annual turnover of a construction entrepreneur in case of national open bidding for a construction work above 2 crore rupees, where they have worked solely or active partner in a joint venture ?",
                    "answers": [
                    {"text": "3 years out of last 10 years", "correct": true},
                    {"text": "2 years out of last 3 years", "correct": false},
                    {"text": "2 years out of last 5 years", "correct": false},
                    {"text": "3 years out of last 7 years", "correct": false}
                    ],
                    "explanation": "In the case where a national open bidding is invited for construction of work above 2 crore rupees, the maximum average turnover of any three years out of ten years shall be taken as the basis."
                    },
                    {
                    "question": "What must be done if a joint venture is selected for a procurement contract?",
                    "answers": [
                    {"text": "Register each partner individually", "correct": false},
                    {"text": "Issue bid security in the name of only one partner", "correct": false},
                    {"text": "Assign the liability to one or some members of the joint venture", "correct": false},
                    {"text": "Register with the permanent account number and value-added tax", "correct": true}
                    ],
                    "explanation": "If a joint venture is selected for a procurement contract, the concerned public entity shall require the joint venture to get registered with the permanent account number and value-added tax in the Inland Revenue Office."
                    },
                    {
                    "question": "What can be requested to prove the bidder’s economic and financial capacity?",
                    "answers": [
                    {"text": "Academic qualification certificates", "correct": false},
                    {"text": "Bank statement", "correct": true},
                    {"text": "Nature of goods supplied", "correct": false},
                    {"text": "Tax clearance certificate", "correct": false}
                    ],
                    "explanation": "To prove the bidder’s economic and financial capacity, a bank statement can be requested."
                    },
                    {
                    "question": "In what form is the standing list published for public access?",
                    "answers": [
                    {"text": "Schedule-2A", "correct": false},
                    {"text": "Schedule-2B", "correct": false},
                    {"text": "Schedule-2C", "correct": true},
                    {"text": "Schedule-3", "correct": false}
                    ],
                    "explanation": "The standing list is published for public access in Schedule-2C format."
                    },
                    {
                    "question": "Who performs the functions of the secretariat of the committee formed for remote areas in case there is no firm with a value-added tax registration certificate?",
                    "answers": [
                    {"text": "Chief, Treasury Controller Office", "correct": true},
                    {"text": "District Chamber of Industry and Commerce", "correct": false},
                    {"text": "Officer level employee designated by the chairperson", "correct": false},
                    {"text": "Representative, District Administration Office", "correct": false}
                ],
                "explanation": "The Treasury Controller Office performs the functions of the secretariat of the committee formed for remote areas in case there is no firm with a value-added tax registration certificate."
                },
                {
                "question": "In procurement contracts allowing sub-contracting, what percentage of the work may be executed through a sub-contractor?",
                "answers": [
                {"text": "15%", "correct": false},
                {"text": "20%", "correct": false},
                {"text": "25%", "correct": true},
                {"text": "30%", "correct": false}
                ],
                "explanation": "In procurement contracts allowing sub-contracting, up to 25% of the work may be executed through a sub-contractor."
                },
                {
                "question": "Under what circumstances shall a public entity procure through bidding, according to Rule 31(1)?",
                "answers": [
                {"text": "For any cost estimate", "correct": false},
                {"text": "When cost estimate exceeds 20 lakh rupees", "correct": true},
                {"text": "When goods are not available locally", "correct": false},
                {"text": "Only in emergencies", "correct": false}
                ],
                "explanation": "A public entity shall procure through bidding any construction works, goods, or services whatsoever of which the cost estimate exceeds two million rupees."
                },
                {
                "question": "According to Rule 31A, what is the maximum cost estimate for construction work to be procured through the lump sum price rate method?",
                "answers": [
                {"text": "1 crore rupees", "correct": false},
                {"text": "1 crore 50 lakhs rupees", "correct": false},
                {"text": "2 crores rupees", "correct": true},
                {"text": "2 crores 50 lakhs rupees", "correct": false}
                ],
                "explanation": "The maximum cost estimate for construction work to be procured through the lump sum price rate method is 2 crores rupees."
                },
                {
                "question": "What is the notice period for procurement through the catalogue shopping method?",
                "answers": [
                {"text": "1-3 days", "correct": false},
                {"text": "7-10 days", "correct": false},
                {"text": "7-15 days", "correct": true},
                {"text": "10-20 days", "correct": false}
                ],
                "explanation": "The notice period for procurement through the catalogue shopping method is 7-15 days."
                },
                {
                "question": "What is required for the registration of an application in the catalogue shopping method?",
                "answers": [
                {"text": "Bid security", "correct": false},
                {"text": "Catalogue or brochure", "correct": true},
                {"text": "Tax clearance certificate", "correct": false},
                {"text": "Bank guarantee", "correct": false}
                ],
                "explanation": "For the registration of an application in the catalogue shopping method, a catalogue or brochure containing the official specification, quality, price, and facilities of the product is required."
                },
                {
                "question": "In procurement through limited tendering method, when can it be used?",
                "answers": [
                {"text": "Whenever desired by the public entity", "correct": false},
                {"text": "When the number of available suppliers is three or below", "correct": true},
                {"text": "Only for multi-year contracts", "correct": false},
                {"text": "In emergencies", "correct": false}
                ],
                "explanation": "Limited tendering method can be used when the number of available suppliers, construction entrepreneurs, consultants, or service providers of such nature is three or below."
                },
                {
                "question": "What is the method for procurement through the buy-back method?",
                "answers": [
                {"text": "Sealed bidding", "correct": false},
                {"text": "Negotiation", "correct": false},
                {"text": "Reverse auction", "correct": false},
                {"text": "Direct procurement", "correct": true}
                ],
                "explanation": "The method for procurement through the buy-back method is direct procurement."
                },
                {
                "question": "In procurement to be made through competition between native bidders only, what cost estimate range does it apply to?",
                "answers": [
                {"text": "2 crores to 3 Arba rupees", "correct": false},
                {"text": "3 crores to 2 Arba rupees", "correct": false},
                {"text": "2 crores to 5 Arba rupees", "correct": true},
                {"text": "5 crores to 3 Arba rupees", "correct": false}
                ],
                "explanation": "Competition between native bidders only applies to a cost estimate range of 2 crores to 5 Arba rupees."
                },
                {
                "question": "What must a bidder submit in two separate envelopes?",
                "answers": [
                {"text": "Technical and financial proposals", "correct": true},
                {"text": "Financial and performance guarantees", "correct": false},
                {"text": "Tax clearance and registration certificates", "correct": false},
                {"text": "Passport and identity proof", "correct": false}
                ],
                "explanation": "A bidder must submit technical and financial proposals in two separate envelopes, clearly stating which proposal each envelope contains."
                },
                {
                "question": "According to PPR 2064, what is the maximum acceptable difference in bid price for giving preference to a domestic bidder?",
                "answers": [
                {"text": "2%", "correct": false},
                {"text": "3%", "correct": false},
                {"text": "4%", "correct": false},
                {"text": "5%", "correct": true}
                ],
                "explanation": "The maximum acceptable difference in bid price for giving preference to a domestic bidder is up to five percent."
                },
                {
                "question": "What procurement method is employed upon termination of a procurement contract?",
                "answers": [
                {"text": "Sealed bidding", "correct": true},
                {"text": "Single-source procurement", "correct": false},
                {"text": "Invitation to financial proposals", "correct": false},
                {"text": "International open bidding", "correct": false}
                ],
                "explanation": "Upon termination of a procurement contract, the procurement method employed is sealed bidding."
            },
            {
                "question": "What documents are included in the bidding documents?",
                "answers": [
                    {"text": "Technical specifications and drawings", "correct": false},
                    {"text": "Bid security and performance security", "correct": false},
                    {"text": "Instruction to bidder and bid form", "correct": false},
                    {"text": "All of the above", "correct": true}
                ],
                "explanation": "All of the above documents are included in the bidding documents."
            },
            {
                "question": "What is the language preference for bidding documents as per PPR, 2064?",
                "answers": [
                    {"text": "Nepali only", "correct": true},
                    {"text": "English only", "correct": false},
                    {"text": "Both Nepali and English", "correct": false},
                    {"text": "Local language of the bidder", "correct": false}
                ],
                "explanation": "The language preference for bidding documents as per PPR, 2064, is Nepali only, except as otherwise provided for in the Act and this Regulation."
            },
            {
                "question": "According to PPR 2064, within how many days must the evaluation committee submit a report after opening the proposals?",
                "answers": [
                    {"text": "Seven days", "correct": false},
                    {"text": "Fifteen days", "correct": true},
                    {"text": "Thirty days", "correct": false},
                    {"text": "Forty-five days", "correct": false}
                ],
                "explanation": "According to PPR 2064, the evaluation committee must submit a report within fifteen days after opening the proposals."
            },
            {
                "question": "In what period should the bid security be valid beyond the bid's validity period?",
                "answers": [
                    {"text": "10 days", "correct": false},
                    {"text": "30 days", "correct": true},
                    {"text": "90 days", "correct": false},
                    {"text": "365 days", "correct": false}
                ],
                "explanation": "The bid security should be valid beyond the bid's validity period for 30 days."
            },
            {
                "question": "How long does the public entity have to return the bid security after the conclusion of the procurement contract?",
                "answers": [
                    {"text": "24 hours", "correct": false},
                    {"text": "3 days", "correct": true},
                    {"text": "7 days", "correct": false},
                    {"text": "30 days", "correct": false}
                ],
                "explanation": "The public entity has three days to return the bid security after the conclusion of the procurement contract, except for a bid security liable to forfeiture."
            },
            {
                "question": "What is the validity period for a bid or proposal of a consultancy service with a cost estimate exceeding 10 crores rupees?",
                "answers": [
                    {"text": "30 days", "correct": false},
                    {"text": "90 days", "correct": false},
                    {"text": "120 days", "correct": true},
                    {"text": "365 days", "correct": false}
                ],
                "explanation": "The validity period for a bid or proposal of a consultancy service with a cost estimate exceeding 10 crores rupees is 120 days."
            },
            {
                "question": "When can an electronic bid or proposal be withdrawn or modified?",
                "answers": [
                    {"text": "After the opening of bids", "correct": false},
                    {"text": "Until the deadline for submission", "correct": true},
                    {"text": "Only during weekends", "correct": false},
                    {"text": "After the bid security is forfeited", "correct": false}
                ],
                "explanation": "An electronic bid or proposal can be withdrawn or modified until the deadline for submission."
            },
            {
                "question": "What is the maximum number of times an application for the withdrawal or modification of a bid can be made?",
                "answers": [
                    {"text": "Unlimited", "correct": false},
                    {"text": "Once", "correct": true},
                    {"text": "Twice", "correct": false},
                    {"text": "Three times", "correct": false}
                ],
                "explanation": "The application for the withdrawal or modification of a bid can be made only once, except where the bid already registered has to be modified as a result of modification made by the public entity itself."
            },
        ],
    },];

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
