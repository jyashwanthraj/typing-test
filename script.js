const textToType = `The quick brown fox jumps over a lazy dog. Pack my box with five dozen liquor jugs. Mr. Jock, TV quiz PhD, bags few lynx. Amazingly few discotheques provide jazz for quiz boys. With glee, I have always enjoyed solving puzzles, whether they involve words, numbers, or symbols. Zephyrs whisper when waves of excitement flow. Jack quickly enjoyed a big red fox. Each amazing sunrise brings joy to my heart. The joy of exploration and learning is like a fire that never burns out.

As you continue to type, remember that practice makes perfect. Zestful experiences enrich our lives, yielding memories that last forever. Now, imagine yourself typing effortlessly, your fingers dancing across the keyboard. The rhythm of your keystrokes creates a symphony of words, ideas, and creativity. Feel the satisfaction as each sentence takes shape under your command. The keyboard becomes an extension of your thoughts, enabling you to express yourself with precision and eloquence.

In today's digital age, typing is an essential skill. From writing emails to creating documents, effective typing can greatly enhance your productivity. The path to mastery is paved with patience and perseverance. As you strive for accuracy and speed, you'll notice improvement with each session. Mistakes are stepping stones to success; they guide you toward areas that need refinement. Embrace them as opportunities to grow.

So, keep typing, keep challenging yourself, and keep refining your skills. With dedication and consistent effort, your fingers will effortlessly glide across the keyboard. The words that once felt distant will flow freely, and your typing journey will be a testament to your commitment and progress. Remember, practice doesn't make perfect – practice makes permanent. Make each keystroke count.`;

const userInput = document.getElementById('user-input');
const timer = document.getElementById('timer');
const loginSection = document.getElementById('login-section');
const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');

let timeLeft = 300; // 5 minutes in seconds

userInput.addEventListener('input', checkText);
userInput.addEventListener('focus', startTimer);

document.getElementById('text-to-type').textContent = textToType;

loginForm.addEventListener('submit', handleLogin);

function checkText() {
    const userText = userInput.value;
    if (textToType.startsWith(userText)) {
        userInput.style.borderColor = 'green';
    } else {
        userInput.style.borderColor = 'red';
    }
}

function startTimer() {
    const interval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timer.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(interval);
            userInput.disabled = true;
            timer.textContent = 'Time\'s up!';
        }
    }, 1000);
}

function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'yash' && password === 'yash123') {
        loginMessage.textContent = 'Login successful!';
        loginSection.style.display = 'none'; // Hide login section
        userInput.disabled = false; // Enable typing area
        startTimer(); // Start timer
    } else {
        loginMessage.textContent = 'Invalid credentials. Please try again.';
    }
}
