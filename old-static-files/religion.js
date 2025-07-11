
let questions = [
    {
        question: "Which age was there before the Age of Three or Triads (Treta Yuga)?",
        answers: [
            { text: "Satya Yuga", correct: false },
            { text: "Treta Yuga", correct: true },
            { text: "Dwapar Yuga", correct: false },
            { text: "All of the above", correct: false }
        ],
        explanation: "Self-explanatory"
    },
    {
        question: "Which one is not one of the four Purusarthas as per Hindu Religion?",
        answers: [
            { text: "Dharma (righteousness, moral values)", correct: false },
            { text: "Artha (prosperity, economic values)", correct: false },
            { text: "Basna (pleasure, love, psychological values)", correct: true },
            { text: "Moksha (liberation, spiritual values, self-actualization)", correct: false }
        ],
        explanation: "It is a key concept in Hinduism, and refers to the four proper goals or aims of a human life. The four puruṣārthas are Dharma (righteousness, moral values), Artha (prosperity, economic values), Kama (pleasure, love, psychological values) and Moksha (liberation, spiritual values, self-actualization)."
    },
    {
        question: "Which two religions consider the Veda as a common religious book?",
        answers: [
            { text: "Hinduism and Jainism", correct: false },
            { text: "Hinduism and Buddhism", correct: false },
            { text: "Hinduism and Sikhism", correct: true },
            { text: "Jainism and Buddhism", correct: false }
        ],
        explanation: "Hinduism and Sikhism consider the Veda as a common religious book. While the Vedas are primarily associated with Hinduism, Sikhism also holds the Guru Granth Sahib as a central religious text and incorporates some Vedic concepts."
    },
    {
        question: "Which of the following is a religious sect of Buddhism?",
        answers: [
            { text: "Theravada", correct: false },
            { text: "Vajrayana", correct: false },
            { text: "Mahayana", correct: false },
            { text: "All of above", correct: true }
        ],
        explanation: "Theravada, Vajrayana, and Mahayana are all religious sects of Buddhism. Selecting 'All of above' is the correct answer since it includes all the mentioned sects."
    },
    {
        question: "Who is Machhindranath also known as in Newar Buddhism and culture?",
        answers: [
            { text: "Karunamaya", correct: true },
            { text: "Siddhartha", correct: false },
            { text: "Avalokiteshvara", correct: false },
            { text: "Vajrasattva", correct: false }
        ],
        explanation: "Machhindranath is also known as 'Karunamaya' in Newar Buddhism and culture, signifying the deity's association with compassion."
    },
    {
        question: "In which form is Machhindranath primarily revered?",
        answers: [
            { text: "Deity of rain", correct: true },
            { text: "God of knowledge", correct: false },
            { text: "Lord of destruction", correct: false },
            { text: "Protector of animals", correct: false }
        ],
        explanation: "Machhindranath is primarily revered as the 'Deity of rain,' and his worship is associated with the hope for good rainfall and agricultural prosperity."
    },
    {
        question: "Which deity is commonly revered in Shaiva, Vaishnava, and Buddhist traditions?",
        answers: [
            { text: "Lord Vishnu", correct: false },
            { text: "Lord Shiva", correct: true },
            { text: "Goddess Durga", correct: false },
            { text: "Lord Ganesha", correct: false }
        ],
        explanation: "Lord Shiva is a deity commonly revered in Shaiva, Vaishnava, and Buddhist traditions. While each tradition may have its unique interpretations, Lord Shiva holds significance in all three."
    },
    {
        question: "What is the world's oldest religious textbook?",
        answers: [
            { text: "The Bible", correct: false },
            { text: "The Quran", correct: false },
            { text: "The Rigveda", correct: true },
            { text: "The Tao Te Ching", correct: false }
        ],
        explanation: "The world's oldest religious textbook is the Rigveda, which is one of the oldest sacred texts of Hinduism and among the oldest religious texts globally."
    },
    {
        question: "Pushkarini and Siddhartha ponds are situated in which district of Nepal?",
        answers: [
            { text: "Kaski", correct: false },
            { text: "Kathmandu", correct: false },
            { text: "Kapilvastu", correct: true },
            { text: "Chitwan", correct: false }
        ],
        explanation: "Pushkarini and Siddhartha ponds are located in the district of Kapilvastu, Nepal. Lumbini is a significant Buddhist pilgrimage site in this region."
    },
    {
        question: "Where is Baraha Kshetra situated in Nepal?",
        answers: [
            { text: "Kathmandu", correct: false },
            { text: "Kaski", correct: false },
            { text: "Dolakha", correct: false },
            { text: "Sunsari", correct: true }
        ],
        explanation: "Baraha Kshetra is situated in the district of Sunsari, Nepal. It is a significant pilgrimage site with cultural and religious importance."
    },
    {
        question: "What do the two eyes of Swayambhunath (Monkey Temple) in Nepal denote?",
        answers: [
            { text: "Wisdom and compassion", correct: true },
            { text: "Purity and enlightenment", correct: false },
            { text: "Peace and harmony", correct: false },
            { text: "Strength and courage", correct: false }
        ],
        explanation: "The two eyes of Swayambhunath represent wisdom and compassion, essential values in Buddhism. The third eye signifies the path to enlightenment."
    },
    {
        question: "Whom did Ravana kill after kidnapping Sita in the Indian epic Ramayana?",
        answers: [
            { text: "Hanuman", correct: false },
            { text: "Lakshmana", correct: false },
            { text: "Jatayu", correct: true },
            { text: "Sugriva", correct: false }
        ],
        explanation: "Ravana killed Jatayu, a noble vulture, when Jatayu attempted to rescue Sita after her kidnapping. Jatayu played a significant role in the Ramayana story."
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
