let currentQuestion = 0;

const questions = [
    {
        image: 'fase1.jpg',
        answer: 'limaduarte'
    },
    {
        image: 'fase2.jpg',
        answer: 'santosdumond'
    },
    {
        image: 'fase3.jpeg',
        answer: 'guarana'
    },
    {
        image: 'fase4.jpeg',
        answer: 'marilac'
    },
    {
        image: 'fase5.jpeg',
        answer: 'mesquita'
    },
    {
        image: 'fase6.jpg',
        answer: 'fama'
    },
    {
        image: 'fase7.jpg',
        answer: 'bomsucesso'
    },
    {
        image: 'fase8.jpg',
        answer: 'sem-peixe'
    },
    {
        image: 'fase9.jpg',
        answer: 'cachoeiradourada'
    },
    {
        image: 'fase10.jpg',
        answer: 'olaria'
    },
    {
        image: 'fase11.jpg',
        answer: 'fim'
    }
];

function checkAnswer() {
    const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();
    
    if (userAnswer === questions[currentQuestion].answer.toLowerCase()) {
        // Correct answer
        currentQuestion++;
        
        // Check if game is over
        if (currentQuestion >= questions.length) {
            document.getElementById("feedback").innerText = "Congratulations! You've finished the game!";
            // Optionally, you can hide the input and button here
        } else {
            // Load the next question
            document.getElementById("gameImage").src = questions[currentQuestion].image;
            document.getElementById("answerInput").value = ""; // Clear the input
            document.getElementById("feedback").innerText = "Correct! Try the next one.";
        }
    } else {
        document.getElementById("feedback").innerText = "Wrong answer. Try again.";
    }
}
const inputField = document.getElementById('answerInput');
const submitButton = document.querySelector('button');

inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitButton.click();
    }
});
