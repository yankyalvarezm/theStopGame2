document.getElementById('stop').addEventListener('click', function () {
    window.location.href = './index.html';
});

const nameInput = document.getElementById('name');
const playButton = document.getElementById('play');
const difficultyLevel = document.querySelector('.select-difficulty');
const btns = document.querySelector('.btns-difficulty');
const nameWarning = document.getElementById('name-warning');
const difficultyWarning = document.getElementById('difficulty-warning');

let selectedButton = null;

const checkConditions = () => {
    const isNameFilled = nameInput.value.trim() !== '';
    const isDifficultySelected = selectedButton !== null;

    if (isNameFilled && isDifficultySelected) {
        nameWarning.textContent = '';
        difficultyWarning.textContent = '';
        playButton.disabled = false;
        return true;
    } else {
        let intervalId = setInterval(() => {
            if (!isNameFilled) {
                nameWarning.textContent = 'Please enter your name.';
            } else {
                nameWarning.textContent = '';
            }

            if (!isDifficultySelected) {
                difficultyWarning.textContent = 'Please select a difficulty level.';
            } else {
                difficultyWarning.textContent = '';
            }

            playButton.disabled = true;

        }, 10000);

        clearInterval(intervalId)
        return false;
    }
};

nameInput.addEventListener('input', function () {
    if (this.value.trim() !== '') {
        if (!difficultyLevel.querySelector('h1')) {
            const difficulty = document.createElement('h1');
            difficulty.innerHTML = 'Select Difficulty';
            difficultyLevel.appendChild(difficulty);
        }

        if (!btns.querySelector('button')) {
            ['Easy', 'Medium', 'Hard'].forEach(level => {
                const btn = document.createElement('button');
                btn.innerHTML = level;
                btn.classList.add('btns-style');
                btn.addEventListener('click', function () {
                    if (selectedButton) {
                        selectedButton.classList.remove('active');
                    }
                    btn.classList.add('active');
                    selectedButton = btn;
                    checkConditions();
                    console.log(checkConditions(), selectedButton.innerHTML);
                    localStorage.setItem('difficulty', selectedButton.innerHTML);
                });
                btns.appendChild(btn);
            });
        }
    } else {
        if (difficultyLevel.querySelector('h1')) {
            difficultyLevel.querySelector('h1').remove();
        }
        btns.querySelectorAll('button').forEach(el => el.remove());
    }
    checkConditions();
});

playButton.addEventListener('click', function () {
    if (checkConditions()) {
        console.log("All conditions met. Starting game.");
        window.location.href = '../htmls/play.html';
    } else {
        console.log("Conditions not met.");
    }
});

playButton.addEventListener('click', function () {
    const nameValue = nameInput.value;
    localStorage.setItem('userName', nameValue);
    window.location.href = '../htmls/play.html';
});

document.addEventListener('DOMContentLoaded', function () {
    const enterName = document.getElementById('name');
    const scoreName = document.getElementById('inputName');

    if (enterName && scoreName) {
        enterName.addEventListener('input', function () {
            scoreName.value = enterName.value;
        });
    }
});

console.log(checkConditions());