const questions = [
    {
        question: "Which language is mainly used for web page structure?",
        options: ["CSS", "HTML", "Java", "Python"],
        answer: "HTML"
    },

    {
        question: "Which data structure follows LIFO?",
        options: ["Queue", "Stack", "Array", "Tree"],
        answer: "Stack"
    },

    {
        question: "Which keyword is used to create a class in Java?",
        options: ["class", "Class", "new", "object"],
        answer: "class"
    },

    {
        question: "What does DBMS stand for?",
        options: [
            "Data Backup Management System",
            "Database Management System",
            "Database Machine System",
            "Data Base Memory System"
        ],
        answer: "Database Management System"
    },

    {
        question: "Which of the following is a programming language?",
        options: ["HTML", "CSS", "Java", "HTTP"],
        answer: "Java"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {

    const questionData = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    document.getElementById("question").textContent =
        questionData.question;

    const optionsDiv = document.getElementById("options");

    optionsDiv.innerHTML = "";

    questionData.options.forEach(function(option) {

        const button = document.createElement("button");

        button.textContent = option;
        button.className = "option";

        button.onclick = function() {
            checkAnswer(option);
        };

        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    const optionButtons = document.querySelectorAll(".option");

    optionButtons.forEach(function(button) {
        button.disabled = true;
    });
}

function nextQuestion() {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        loadQuestion();

    } else {

        document.getElementById("question").textContent =
            "Test Completed!";

        document.getElementById("question-number").textContent = "";

        document.getElementById("options").innerHTML = "";

        document.getElementById("next-btn").style.display = "none";

        document.getElementById("result").textContent =
            "Your Score: " + score + " / " + questions.length;
    }
}

if (document.getElementById("question")) {
    loadQuestion();
}
const aptitudeQuestions = [
    {
        question: "What is 20% of 200?",
        options: ["20", "30", "40", "50"],
        answer: "40"
    },

    {
        question: "If a number is increased from 100 to 120, what is the percentage increase?",
        options: ["10%", "15%", "20%", "25%"],
        answer: "20%"
    },

    {
        question: "What is the average of 10, 20 and 30?",
        options: ["15", "20", "25", "30"],
        answer: "20"
    },

    {
        question: "A train travels 60 km in 2 hours. What is its speed?",
        options: ["20 km/h", "30 km/h", "40 km/h", "60 km/h"],
        answer: "30 km/h"
    },

    {
        question: "If 5 pens cost ₹50, what is the cost of one pen?",
        options: ["₹5", "₹10", "₹15", "₹20"],
        answer: "₹10"
    }
];

let aptitudeCurrent = 0;
let aptitudeScore = 0;

function loadAptitudeQuestion() {

    const q = aptitudeQuestions[aptitudeCurrent];

    document.getElementById("aptitude-number").textContent =
        "Question " + (aptitudeCurrent + 1) +
        " of " + aptitudeQuestions.length;

    document.getElementById("aptitude-question").textContent =
        q.question;

    const optionsDiv =
        document.getElementById("aptitude-options");

    optionsDiv.innerHTML = "";

    q.options.forEach(function(option) {

        const button = document.createElement("button");

        button.textContent = option;
        button.className = "option";

        button.onclick = function() {
            checkAptitudeAnswer(option);
        };

        optionsDiv.appendChild(button);
    });
}

function checkAptitudeAnswer(selectedAnswer) {

    if (selectedAnswer === aptitudeQuestions[aptitudeCurrent].answer) {
        aptitudeScore++;
    }

    const buttons = document.querySelectorAll(
        "#aptitude-options .option"
    );

    buttons.forEach(function(button) {
        button.disabled = true;
    });
}
function nextAptitudeQuestion() {

    if (aptitudeCurrent < aptitudeQuestions.length - 1) {

        aptitudeCurrent++;
        loadAptitudeQuestion();

    } else {

        document.getElementById("aptitude-number").textContent = "";

        document.getElementById("aptitude-question").textContent =
            "Test Completed!";

        document.getElementById("aptitude-options").innerHTML = "";

        document.getElementById("aptitude-next").style.display = "none";

        document.getElementById("aptitude-result").textContent =
            "Your Score: " + aptitudeScore + " / " + aptitudeQuestions.length;

        document.getElementById("aptitude-restart").style.display =
            "inline-block";
    }
}

loadAptitudeQuestion();
function restartAptitudeTest() {

    aptitudeCurrent = 0;
    aptitudeScore = 0;

    document.getElementById("aptitude-next").style.display =
        "inline-block";

    document.getElementById("aptitude-restart").style.display =
        "none";

    document.getElementById("aptitude-result").textContent = "";

    loadAptitudeQuestion();
}
function startJavaTest() {
    window.location.href = "java.html";
}
const javaQuestions = [
    {
        question: "Which keyword is used to create a class in Java?",
        options: ["class", "Class", "new", "object"],
        answer: "class"
    },

    {
        question: "Which method is the starting point of a Java program?",
        options: ["start()", "main()", "run()", "execute()"],
        answer: "main()"
    },

    {
        question: "Which concept allows one class to acquire properties of another class?",
        options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
        answer: "Inheritance"
    },

    {
        question: "Which keyword is used to inherit a class in Java?",
        options: ["inherits", "extends", "implements", "super"],
        answer: "extends"
    },

    {
        question: "Which of these is NOT a Java primitive data type?",
        options: ["int", "float", "String", "char"],
        answer: "String"
    }
];

let javaCurrent = 0;
let javaScore = 0;

function loadJavaQuestion() {

    const q = javaQuestions[javaCurrent];

    document.getElementById("java-number").textContent =
        "Question " + (javaCurrent + 1) +
        " of " + javaQuestions.length;

    document.getElementById("java-question").textContent =
        q.question;

    const optionsDiv =
        document.getElementById("java-options");

    optionsDiv.innerHTML = "";

    q.options.forEach(function(option) {

        const button = document.createElement("button");

        button.textContent = option;
        button.className = "option";

        button.onclick = function() {
            checkJavaAnswer(option);
        };

        optionsDiv.appendChild(button);
    });
}

function checkJavaAnswer(selectedAnswer) {

    if (selectedAnswer === javaQuestions[javaCurrent].answer) {
        javaScore++;
    }

    const buttons =
        document.querySelectorAll("#java-options .option");

    buttons.forEach(function(button) {
        button.disabled = true;
    });
}

function nextJavaQuestion() {

    if (javaCurrent < javaQuestions.length - 1) {

        javaCurrent++;
        loadJavaQuestion();

    } else {

        document.getElementById("java-number").textContent = "";

        document.getElementById("java-question").textContent =
            "Test Completed!";

        document.getElementById("java-options").innerHTML = "";

        document.getElementById("java-next").style.display =
            "none";

        document.getElementById("java-result").textContent =
            "Your Score: " + javaScore +
            " / " + javaQuestions.length;
    }
}

if (document.getElementById("java-question")) {
    loadJavaQuestion();
}
function startPythonTest() {
    window.location.href = "python.html";
}
function startDBMSTest() {
    window.location.href = "dbms.html";
}
function startDSATest() {
    window.location.href = "dsa.html";
}
function startOSTest() {
    window.location.href = "os.html";
}