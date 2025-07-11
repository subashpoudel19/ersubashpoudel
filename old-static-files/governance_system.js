
let questions = [
    {
        question: "As of October, 2023, how many sovereign countries in the world have a monarch as the head of state?",
        answers: [
            {text: "29", correct: false},
            {text: "32", correct: false},
            {text: "43", correct: true},
            {text: "25", correct: false}
        ],
        explanation: "43"
    },
    {
        question: "When was Nepal formally declared Federal Republic of Nepal?",
        answers: [
            {text: "2065 Jestha 15", correct: true},
            {text: "2063 Mangsir 5", correct: false},
            {text: "2007 Falgun 7", correct: false},
            {text: "2063 Baisakh 11", correct: false}
        ],
        explanation: "On May 28, 2008, the newly elected Constituent Assembly declared Nepal a Federal Democratic Republic, abolishing the 240 year-old monarchy. Nepal today has a President as Head of State and a Prime Minister heading the Government."
    },
    {
        question: "The political system in which two or more political parties take part in election with their manifesto and the party with two-thirds majority forms the government along with the Opposition party helps the current government?",
        answers: [
            {text: "Multi-party Democratic Parliamentary System", correct: true},
            {text: "Authoritarian Regime", correct: false},
            {text: "Presidential Republic", correct: false},
            {text: "Single-party State", correct: false}
        ],
        explanation: "No explanation required."
    },
    {
        question: "What does Zero hour refer to in a parliamentary system?",
        answers: [
            {text: "The time when Parliament convenes for its first session of the year.", correct: false},
            {text: "The time when the Speaker of the House announces the official agenda for the day.", correct: false},
            {text: "A designated period during the parliamentary session for Members of Parliament to raise important issues without prior notice.", correct: true},
            {text: "The final hour of a parliamentary session when important bills are voted on.", correct: false}
        ],
        explanation: "Zero hour in a parliamentary system refers to a designated period during the parliamentary session when Members of Parliament can raise important issues without prior notice. This allows for discussions on urgent matters that may not be on the regular agenda."
    },
    {
        question: "What is the Rule of Law?",
        answers: [
            {text: "The authority of the government to make and enforce laws.", correct: false},
            {text: "The authority of the government to make and enforce laws.", correct: false},
            {text: "A legal system where judges have the final say on all matters.", correct: true},
            {text: "The concept that everyone, including government officials, is subject to and accountable under the law.", correct: false}
        ],
        explanation: "The Rule of Law is the concept that everyone, including government officials, is subject to and accountable under the law. It emphasizes that no one is above the law, and it is a fundamental principle in democratic societies. "
    },
    {
        question: "Who is often credited with promoting and articulating the principles of the Rule of Law?",
        answers: [
            {text: "Thomas Jefferson", correct: false},
            {text: "John Locke", correct: true},
            {text: "Karl Marx", correct: false},
            {text: "Confucius", correct: false}
        ],
        explanation: "John Locke, an English philosopher, is often credited with promoting and articulating the principles of the Rule of Law. His ideas on natural rights, limited government, and the rule of law had a profound influence on the development of democratic principles."
    },
    {
        question: "Who is the legal scholar most closely associated with the concept of the Rule of Law and its articulation, particularly in the context of the British legal system?",
        answers: [
            {text: "Thomas Hobbes", correct: false},
            {text: "John Locke", correct: false},
            {text: "A.V. Dicey", correct: true},
            {text: "Jean-Jacques Rousseau", correct: false}
        ],
        explanation: "A.V. Dicey, or Albert Venn Dicey, is the legal scholar most closely associated with the concept of the Rule of Law, particularly in the context of the British legal system. His work, &quot;Introduction to the Study of the Law of the Constitution&quot; (1885), played a significant role in defining and explaining the principles of the Rule of Law."
    },
    {
        question: "What is the term for a governance system in which there is no one above a specific authority, and all individuals, including government officials, are subject to and accountable under the law?",
        answers: [
            {text: "Autocracy", correct: false},
            {text: "Oligarchy", correct: false},
            {text: "Rule of Law", correct: true},
            {text: "Monarchy", correct: false}
        ],
        explanation: "The Rule of Law is the concept that everyone, including government officials, is subject to and accountable under the law, ensuring that there is no one above the law in a well-functioning governance system. Autocracy refers to a system of government where one person holds absolute power, while oligarchy and monarchy describe different forms of government where power is concentrated in the hands of a few or a single ruler, respectively."
    },
    {
        question: "What does the term &quot;half-hour time&quot; refer to in a parliamentary system?",
        answers: [
            {text: "The duration of a typical parliamentary session, which lasts for half an hour.", correct: false},
            {text: "The time allocated for a coffee break during parliamentary debates.", correct: false},
            {text: "A limited period during parliamentary proceedings when Members of Parliament can ask questions without notice.", correct: true},
            {text: "The time when parliamentary sessions are adjourned for the day.", correct: false}
        ],
        explanation: " In a parliamentary system, &quot;half-hour time&quot; refers to a limited period during parliamentary proceedings when Members of Parliament (MPs) can ask questions without notice. This time is often set aside for spontaneous or urgent questions that may not have been scheduled in advance."
    },
    {
        question: "What is the primary basis of nation-building in a federal structure?",
        answers: [
            {text: "Homogeneous Ethnicity", correct: false},
            {text: "Homogeneous Ethnicity ", correct: false},
            {text: "Regional Autonomy ", correct: true},
            {text: "Single-Party Dominance ", correct: false}
        ],
        explanation: "In a federal structure, regions or states often have a degree of autonomy and self-governance while being part of a larger nation. This helps accommodate diverse cultural, ethnic, and linguistic backgrounds within the framework of a single nation. "
    },
    {
        question: "Which of the following is a key feature of a parliamentary system of government?",
        answers: [
            {text: "Separation of powers ", correct: false},
            {text: "Direct election of the head of state ", correct: true},
            {text: "Bicameral legislature ", correct: false},
            {text: "Appointment of the Prime Minister by the judiciary ", correct: false}
        ],
        explanation: "A: <b>Separation of powers</b> is a feature more commonly associated with a presidential system of government, where there is a clear distinction between the executive, legislative, and judicial branches.<br>B:<b>Direct election of the head of state</b> In a parliamentary system of government, the head of state, such as a monarch or a president, is typically separate from the head of government (the Prime Minister), and the head of state is often elected directly by the people or through an electoral college, depending on the country's constitution.<br>C:<b>Bicameral legislature</b> can exist in both parliamentary and presidential systems.<br>D:<b>Appointment of the Prime Minister by the judiciary</b> s not a feature of a parliamentary system. In a parliamentary system, the Prime Minister is usually appointed from the majority party or coalition in the legislature and not by the judiciary."
    },
    {
        question: "Which of the following is a role typically performed by the head of state in a parliamentary system?",
        answers: [
            {text: "Leading the government and cabinet meetings ", correct: false},
            {text: "Representing the country in foreign affairs ", correct: true},
            {text: "Introducing and passing legislation ", correct: false},
            {text: "Appointing judges to the highest court ", correct: false}
        ],
        explanation: "In a parliamentary system, the head of state, such as a monarch or president, often serves as a ceremonial figurehead and represents the country in foreign affairs, while the Prime Minister is responsible for leading the government and cabinet meetings. "
    },
    {
        question: "In a parliamentary system, the executive branch (the government) is drawn from which branch of government?",
        answers: [
            {text: "Legislative branch ", correct: true},
            {text: "Judicial branch ", correct: false},
            {text: "Executive branch ", correct: false},
            {text: "Military branch ", correct: false}
        ],
        explanation: "In a parliamentary system, the executive branch, including the Prime Minister and the Cabinet, is drawn from the legislative branch, specifically from the majority party or coalition in the legislature. The executive branch is accountable to the legislature, which is a key feature of parliamentary systems. "
    },
    {
        question: "What is one disadvantage of a multi-party system in terms of government formation and stability?",
        answers: [
            {text: "Rapid and efficient decision-making ", correct: false},
            {text: "Difficulty in forming a majority government ", correct: true},
            {text: "Reduced representation of diverse viewpoints ", correct: false},
            {text: "Strong centralized power ", correct: false}
        ],
        explanation: "SEPTEMBER 7: The Supreme Court (SC) today issued a mandamus order to form a council of ministers within 48 hours in the Koshi Province by concluding that the vote of confidence motion taken by Chief Minister Uddhab Thapa was unconstitutional. A division bench of justices Sapana Pradhan Malla, Dr Kumar Chudal and Nahakul Subedi issued the mandamus order in the name of Koshi Province Chief to form new government as per the Article 168 (3) of the Constitution of Nepal.The SC said that the natural options directed by the constitution should be used accordingly adding that the parliamentary party leader of the single largest party is deemed necessary to be appointed as the Chief Minister. The SC has stated that opting for the alternatives given by the constitution is appropriate in terms of healthy constitutional exercise instead of applying a single option repeatedly.The parliamentary party leader of the CPN (UML) Koshi Province Hikmat Kumar Karki had lodged a petition at the SC stating that the process to obtain vote of confidence by Chief Minister Thapa was unconstitutional.Thapa had taken the vote of confidence from the province assembly on August 23. "
    },
    {
        question: "In which year did the United Nations celebrate as International Human Rights Year?",
        answers: [
            { text: "1950", correct: false },
            { text: "1968", correct: true },
            { text: "1975", correct: false },
            { text: "1993", correct: false }
        ],
        explanation: "The United Nations celebrated the International Human Rights Year in 1968, launching various activities and initiatives to promote and protect human rights worldwide."
    },
    {
        question: "When was the Nepal Human Rights Commission established in B.S. (Bikram Sambat)?",
        answers: [
            { text: "2038 Jeth 13", correct: false },
            { text: "2047 Jeth 13", correct: false },
            { text: "2057 Jeth 13", correct: true },
            { text: "2065 Jeth 13", correct: false }
        ],
        explanation: "The National Human Rights Commission of Nepal is an independent and autonomous institution established on 5 June 2000, under the Human Rights Commission Act 1997, passed by the Nepalese Parliament."
    },
    {
        question: "In Bikram Sambat (BS), when did the Parliament of Nepal pass the Convention on the Rights of Persons with Disabilities and its Optional Protocol?",
        answers: [
            { text: "Poush 12, 2057 BS", correct: false },
            { text: "Poush 12, 2066 BS", correct: false },
            { text: "Poush 12, 2067 BS", correct: true },
            { text: "Poush 12, 2075 BS", correct: false }
        ],
        explanation: "The Parliament of Nepal passed the Convention on the Rights of Persons with Disabilities and its Optional Protocol in Bikram Sambat (BS) in the year 2067 BS."
    },
    {
        question: "What is civil society?",
        answers: [
            { text: "A society governed by military rule.", correct: false },
            { text: "A society in which government plays a minimal role.", correct: false },
            { text: "A diverse array of non-governmental organizations and associations that promote civic engagement and social change.", correct: true },
            { text: "A society characterized by a lack of laws and regulations.", correct: false }
        ],
        explanation: "Civil society refers to a diverse array of non-governmental organizations and associations that promote civic engagement, social change, and represent the interests of citizens outside of government institutions."
    },
    {
        question: "According to Larry Diamond, what is the definition of civil society?",
        answers: [
            { text: "A society where only the political elite are engaged in civic activities.", correct: false },
            { text: "A realm of organized social life that is distinct from the state and the market, and where citizens voluntarily associate for common purposes.", correct: true },
            { text: "A society dominated by military organizations.", correct: false },
            { text: "A society characterized by a lack of government control.", correct: false }
        ],
        explanation: "Larry Diamond's definition of civil society is a realm of organized social life that is distinct from the state and the market, where citizens voluntarily associate for common purposes, independent of government control."
    },
    {
        question: "Who is credited with first using the term 'civil society'?",
        answers: [
            { text: "Hegel", correct: true },
            { text: "Karl Marx", correct: false },
            { text: "Jean-Jacques Rousseau", correct: false },
            { text: "John Locke", correct: false }
        ],
        explanation: "The term 'civil society' is often credited to Hegel, who used it to describe the realm of associations, organizations, and institutions that exist between the state and the individual in society."
    },
    {
        question: "In what type of society does civil service typically operate?",
        answers: [
            { text: "Civil service operates in an official capacity.", correct: true },
            { text: "Civil service operates in an unofficial capacity.", correct: false },
            { text: "Civil service operates in a military society.", correct: false },
            { text: "Civil service operates in an agricultural society.", correct: false }
        ],
        explanation: "Civil service typically operates in an official capacity within a society, carrying out various administrative functions on behalf of the government."
    },
    {
        question: "Who is credited with the statement that 'civil society is the spirit of a community'?",
        answers: [
            { text: "Karl Marx", correct: false },
            { text: "Alexis de Tocqueville", correct: true },
            { text: "Jean-Jacques Rousseau", correct: false },
            { text: "John Locke", correct: false }
        ],
        explanation: "The statement that 'civil society is the spirit of a community' is often credited to Alexis de Tocqueville, a French political thinker known for his insights into democracy and society."
    },
    {
        question: "Who is associated with the idea that civil society can be a reflection of dominance within a community?",
        answers: [
            { text: "Karl Marx", correct: true },
            { text: "Alexis de Tocqueville", correct: false },
            { text: "Jean-Jacques Rousseau", correct: false },
            { text: "John Locke", correct: false }
        ],
        explanation: "Karl Marx is known for his critical analysis of civil society, suggesting that it can be a reflection of dominance and power structures within a community."
    },
    {
        question: "In which year was the Administrative Reform Commission of Nepal first established?",
        answers: [
            { text: "2013 BS", correct: false },
            { text: "2045 BS", correct: false },
            { text: "2025 BS", correct: false },
            { text: "2009 BS", correct: true }
        ],
        explanation: "The Administrative Reform Commission of Nepal was established in 2009 BS under the leadership of N.M. Buch to study and recommend administrative reforms in the country."
    },
    {
        question: "Apart from N.M. Buch and K.G. Mathrani, who was a member of the Administrative Reform Commission of Nepal in 2009 BS?",
        answers: [
            { text: "S.K. Aanand", correct: true },
            { text: "R.P. Dhungana", correct: false },
            { text: "M.B. Gurung", correct: false },
            { text: "P.K. Shrestha", correct: false }
        ],
        explanation: "In addition to N.M. Buch and K.G. Mathrani, S.K. Aanand was also a member of the Administrative Reform Commission of Nepal in 2009 BS."
    },
    {
        question: "Who led the Administrative Reform Commission of 2013 BS in Nepal?",
        answers: [
            { text: "Tanka Prasad Acharya", correct: true },
            { text: "Krishna Prasad Bhattarai", correct: false },
            { text: "Krishna Bahadur Mahara", correct: false },
            { text: "Keshav Sthapit", correct: false }
        ],
        explanation: "The Administrative Reform Commission of 2013 BS in Nepal was led by Tanka Prasad Acharya, the then Prime Minister of Nepal."
    },
    {
        question: "Who led the Administrative Reform Commission of 2013 BS in Nepal?",
        answers: [
            { text: "Tanka Prasad Acharya", correct: true },
            { text: "Surya Bahadur Thapa", correct: false },
            { text: "Kirti Nidhi Bista", correct: false },
            { text: "Mahendra Prasad Yadav", correct: false }
        ],
        explanation: "The Administrative Reform Commission of 2013 BS in Nepal was led by Tanka Prasad Acharya, who was the Prime Minister of Nepal during that period."
    },
    {
        question: "What was the upper age limit for civil servants recommended by the Administrative Reform Commission of 2025 BS (Jha Commission) led by Bedananda Jha?",
        answers: [
            { text: "45 years", correct: false },
            { text: "50 years", correct: false },
            { text: "55 years", correct: true },
            { text: "60 years", correct: false }
        ],
        explanation: "The Administrative Reform Commission of 2025 BS (Jha Commission), led by Bedananda Jha, recommended an upper age limit of 55 years for civil servants."
    },
    {
        question: "One of the recommendations of the Jha Commission was to reduce the number of ministries and departments. What other recommendation did they make?",
        answers: [
            { text: "Encourage more political appointments.", correct: false },
            { text: "Follow PSC rules for civil servants' appointments.", correct: true },
            { text: "Eliminate academic qualifications for civil servants.", correct: false },
            { text: "Increase the retirement age of civil servants.", correct: false },
        ],
        explanation: "The Jha Commission recommended reducing the number of ministries and departments and following Public Service Commission (PSC) rules for civil servants' appointments."
    },
    {
        question: "What were some of the variables that the Jha Commission recommended introducing in the promotion of civil servants?",
        answers: [
            { text: "Political affiliations and family connections.", correct: false },
            { text: "Experience, academic qualifications, and training.", correct: true },
            { text: "Physical fitness and sports achievements.", correct: false },
            { text: "Wealth and property holdings.", correct: false }
        ],
        explanation: "The Jha Commission recommended introducing variables like experience, academic qualifications, and training in the promotion of civil servants."
    },
    {
        question: "Which of the following institutions or entities did the Jha Commission recommend establishing?",
        answers: [
            { text: "Private recruitment agencies for civil servants.", correct: false },
            { text: "A national circus for entertainment.", correct: false },
            { text: "A staff college and an administrative court.", correct: true },
            { text: "A department of paranormal research.", correct: false }
        ],
        explanation: "The Jha Commission recommended establishing a staff college and an administrative court among other reforms."
    },
    {
        question: "Who served as the president of the Administrative Reform Commission during the year 2032 BS (1975-1976) in Nepal?",
        answers: [
            { text: "Surya Bahadur Thapa", correct: false },
            { text: "Krishna Prasad Bhattarai", correct: false },
            { text: "Bhesh Bahadur Thapa", correct: true },
            { text: "Kirti Nidhi Bista", correct: false }
        ],
        explanation: "Bhesh Bahadur Thapa, the then General Administration Minister, served as the president of the Administrative Reform Commission during the year 2032 BS (1975-1976) in Nepal."
    },
    {
        question: "When did the Administrative Reform Commission of 2032 BS (1975-1976) submit its report?",
        answers: [
            { text: "2032 Ashadh 20", correct: false },
            { text: "2032 Bhadra 20", correct: false },
            { text: "2033 Shrawan 20", correct: true },
            { text: "2033 Ashwin 20", correct: false }
        ],
        explanation: "The Administrative Reform Commission of 2032 BS (1975-1976) submitted its report on 2033 Shrawan 20, during the tenure of Prime Minister Tulsi Giri."
    },
    {
        question: "One of the recommendations of the Administrative Reform Commission of 2032 BS was to combine ministries related to each other on political and administrative grounds. What other recommendation did they make?",
        answers: [
            { text: "Add two new ministries, MoCTCA and Population and General Administration Ministry.", correct: true },
            { text: "Abolish the Public Service Commission (PSC).", correct: false },
            { text: "Establish a National Sports Council.", correct: false },
            { text: "Create a Department of Paranormal Research.", correct: false }
        ],
        explanation: "The Administrative Reform Commission of 2032 BS recommended combining ministries related to each other on political and administrative grounds and adding two new ministries: MoCTCA and Population and General Administration Ministry."
    },
    {
        question: "What was one of the key recommendations of the Administrative Reform Commission of 2032 BS regarding district-level projects?",
        answers: [
            { text: "District-level projects to be the sole responsibility of the Ministry of Finance.", correct: false },
            { text: "District-level projects to be the sole responsibility of the District Panchayat.", correct: true },
            { text: "District-level projects to be managed by private companies.", correct: false },
            { text: "District-level projects to be managed by international organizations.", correct: false }
        ],
        explanation: "One of the key recommendations of the Administrative Reform Commission of 2032 BS was that district-level projects should be the sole responsibility of the District Panchayat."
    },
    {
        question: "Which of the following recommendations was NOT made by the Administrative Reform Commission of 2032 BS?",
        answers: [
            { text: "Formation of an Institute Council.", correct: false },
            { text: "Creation of a Permanent Administration Reform Committee.", correct: false },
            { text: "Setting up a District-Level Fund.", correct: false },
            { text: "Creation of groups in civil service and division of positions within the grades while classifying the civil service.", correct: true }
        ],
        explanation: "The recommendation 'Creation of groups in civil service and division of positions within the grades while classifying the civil service' was not made by the Administrative Reform Commission of 2032 BS."
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
