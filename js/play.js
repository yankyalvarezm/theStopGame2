document.getElementById('stop').addEventListener('click', function () {
    window.location.href = '../index.html'
})

console.log('play.js connected')


// ? --------------------------------------------------------
// ? (Main Functions) - Creates Elements, Classes, innerHTMLs & Assign Parents

function elClass(tag, className,) {
    const element = Object.assign(document.createElement(tag), { className });
    return document.body.appendChild(element);
}

function elClassCont(tag, className, content, parent) {
    const element = Object.assign(document.createElement(tag), { className });
    element.innerHTML = content;
    parent.appendChild(element);
    return element;
}

// ? --------------------------------------------------------
// ? Global Variables

let randomLetter = '';
let timeLeft = 5;
let round = -1;
let timeoutId = null;
let loop = -1;
const maxlooop = 3;
const maxround = 3;
let isEvent = false;
let gameScore = 0;
let totalScore = 0;


let hasAddedCountryScore = false;
let hasDeletedCountryScore = false;


let hasAddedSportScore = false;
let hasDeletedSportScore = false;

let hasAddedProfessionScore = false;
let hasDeletedProfessionScore = false;

const timer = document.createElement('DIV')
timer.id = 'timer'
const roundTitle = document.createElement('DIV')
roundTitle.classList.add('small-rectangle')
roundTitle.classList.add('round-title1')

// const roundtitle = document.getElementsByClassName('round-title');

console.log('loop:', loop)
console.log('Round:', round)
console.log('time left:', timeLeft);

const body = document.querySelector('body'); /* Contains ALL */
const title = document.querySelector('h1'); /* (UPPER LEFT - TITLE)the STOP game */
const timeRound = elClassCont('DIV', 'timeRound-container', '', body) /* Contains Time & Round */
const main = elClass('MAIN', 'container'); /* Contains the Rand Letter, Click me! & Stop btn */
elClass('hr', 'hr-main'); /* HR located under main container */


// ? --------------------------------------------------------


// ? --------------------------------------------------------
// ? (Start the Sequence) - Selects a random letter, Add and remove Restart btn


const generators = elClassCont('SECTION', 'generators', '', main)
elClassCont('DIV', 'small-rectangle letter-holder', 'A', generators);

const sideContainer = elClassCont('DIV', 'side-container', '', generators)
elClassCont('DIV', 'small-rectangle click-me', 'Click Me!', sideContainer);

function startSequence(sideContainer) {
    let currentIndex = 0;
    let loopSequence = 0;
    const maxloopSequence = 2;
    const lettersArray = 'ABCDEFGHIJKLMNOPQRSTUVYZ'.split('');

    if (loop === -1) {
        loop++
        round++
    }

    const intervalId = setInterval(() => {
        document.querySelector('.small-rectangle').innerText = lettersArray[currentIndex];
        currentIndex = (currentIndex + 1) % lettersArray.length;

        if (currentIndex === 0) {
            loopSequence++;
        }

        if (round === 0) {
            roundTitle.innerHTML = `Be Prepare`
        }

        if (loopSequence === maxloopSequence) {
            clearInterval(intervalId);

            const randomIndex = Math.floor(Math.random() * lettersArray.length);

            randomLetter = lettersArray[randomIndex];
            document.querySelector('.letter-holder').innerText = lettersArray[randomIndex];

            console.log('letter:', randomLetter);

            Array.from(document.getElementsByClassName('click-me')).forEach(el => {
                el.style.backgroundColor = '#D5D5D5';
                el.innerText = "<--------";
            });

            const restartBtn = document.getElementsByClassName('restart')[0];

            if (!restartBtn) {
                elClassCont('DIV', 'small-rectangle restart', 'Restart', sideContainer);
            }

            const timerCircle = document.getElementById('timer');
            if (!timerCircle) {

                timeRound.appendChild(timer);
                timeRound.appendChild(roundTitle);

                const timerSpan = elClassCont('SPAN', '', '10', timer);
                timerSpan.id = 'seconds';
                countdown();
                console.log('countdown active')
            }

            document.getElementsByClassName('restart')[0].addEventListener('click', function () {
                console.log('restart')
                timeLeft = 5;
                startSequence(sideContainer);
            });
        }
    }, 50);
}


// ? --------------------------------------------------------
// ? (Event Listener) - Fires the Start Sequence
document.getElementsByClassName('click-me')[0].addEventListener('click', function () {
    if (this.disabled) {
        return;
    }

    this.disabled = true;
    startSequence(sideContainer);

    console.log('Sequence Started')
});

// ? --------------------------------------------------------
// ? (Main Function) - CountDown  

function countdown() {
    if (timeLeft === 0 && loop !== maxlooop && round !== maxround) {
        loop++;
        round++

        if (round === 1) {
            roundTitle.innerHTML = `Round: ${round}/3`
        } else if (round === 2) {
            roundTitle.innerHTML = `Round: ${round}/3`
        } else {
            roundTitle.innerHTML = `Round: ${round}/3`
        }

        if (document.querySelector('.restart')) {
            removeRestart()
            console.log('--remove restart btn')
        }

        const clickme = document.querySelector('.click-me');
        clickme.innerHTML = 'Start';

        Array.from(document.getElementsByClassName('click-me')).forEach(el => {
            el.style.backgroundColor = 'white';
            el.style.color = 'black';
            el.innerText = "Start";

            el.addEventListener('mouseenter', function () {
                this.style.backgroundColor = '#D5D5D5';
                this.style.color = 'black';
                this.innerText = "Start";
            });

            el.addEventListener('mouseleave', function () {
                this.style.backgroundColor = 'white';
                this.style.color = 'black';
                this.innerText = "Start";
            });
        });

        console.log('loop:', loop);
        console.log('Round:', round);
    }

    // TODO: Resets time to: 25 and hides elements ------------------------------

    const clickMe = document.getElementsByClassName('click-me')[0];

    document.getElementById("seconds").innerHTML = String(timeLeft);

    if (!isEvent) {

        clickMe.addEventListener('click', function () {
            const gameplayContainer = document.querySelector('.gameplay-container');
            const inputsContainer = document.querySelector('.inputs-container');
            const descriptionID = document.getElementById('descriptionID');
            const roundtitle = document.querySelector('.round-title');
            const clickme = document.querySelector('.click-me')

            // let currentIndex = 0;
            // const lettersArray = 'ABCDEFGHIJKLMNOPQRSTUVYZ'.split('');
            // const randomIndex = Math.floor(Math.random() * lettersArray.length);
            // currentIndex = (currentIndex + 1) % lettersArray.length;

            clickme.classList.toggle('hidden');
            // clickme.setAttribute('disabled')
            console.log('clickme hidden', clickme)



            // randomLetter = lettersArray[randomIndex];
            // document.querySelector('.letter-holder').innerText = lettersArray[randomIndex];

            // console.log('letter:', randomLetter);


            clearTimeout(timeoutId)

            timeLeft = 0;


            if (round === 1) {
                roundTitle.innerHTML = `Round: ${round}/3`
            } else if (round === 2) {
                roundTitle.innerHTML = `Round: ${round}/3`
            } else {
                roundTitle.innerHTML = `Round: ${round}/3`
            }

            const seconds = document.getElementById('seconds')
            seconds.textContent = `${timeLeft}`;

            if (gameplayContainer && inputsContainer && descriptionID && roundTitle) {
                gameplayContainer.classList.toggle('hidden')
                inputsContainer.classList.toggle('hidden')
                descriptionID.classList.toggle('hidden');
                roundtitle.classList.toggle('hidden');
            }

            resetTimer(25)
            countdown()

            console.log('timeLeft:', timeLeft);
            console.log('Stop Sequence');
            console.log('loop:', loop);
            console.log('Round:', round);
        })

        isEvent = true;
    }

    // TODO: Decreas time ---------------------------------------------------

    if (timeLeft > 0) {
        timeLeft--;
        // console.log('time left:', timeLeft);


        timeoutId = setTimeout(countdown, 1000);
    }

    // TODO: Loop #1 ---------------------------------------------------------

    if (timeLeft === 0 && loop === 1) {

        const gameplayContainer = document.querySelector('.gameplay-container');
        const inputsContainer = document.querySelector('.inputs-container');
        const descriptionID = document.getElementById('descriptionID');
        const roundtitle = document.querySelector('.round-title')
        const clickme = document.querySelector('.click-me')

        if (gameplayContainer && inputsContainer && descriptionID && roundTitle) {
            gameplayContainer.classList.toggle('hidden')
            inputsContainer.classList.toggle('hidden')
            descriptionID.classList.toggle('hidden');
            roundtitle.classList.toggle('hidden');
            clickme.classList.toggle('hidden');

            console.log('toggle #1')
        }
        // hideElements()
    }

    if (timeLeft === 24 && loop === 1) {
        Array.from(document.getElementsByClassName('click-me')).forEach(el => {
            el.style.backgroundColor = 'white';
            el.style.color = 'black';
            el.innerText = "Start";

            el.addEventListener('mouseenter', function () {
                this.style.backgroundColor = 'red';
                this.style.color = '#FFFFFF';
                this.innerText = "Start";
            });

            el.addEventListener('mouseleave', function () {
                this.style.backgroundColor = 'white';
                this.style.color = 'black';
                this.innerText = "Start";
            });
        });
    }

    if (timeLeft === 22 && loop === 1) {
        const gameplayDescription = elClass('h3', 'description-gameplay')
        gameplayDescription.id = 'descriptionID';
        gameplayDescription.innerHTML = `Try to fill as much categories as you can, good luck!`;
    }

    if (timeLeft === 19 && loop === 1) {
        console.log('-------- Round #1 -----------')

        // ** Gameplay Structure Section

        // * No. of Round - HEADING
        const roundbar = elClassCont('DIV', 'small-rectangle round-title', ``, body);

        // * Container for all
        const gameplayContainer = elClassCont('DIV', 'gameplay-container', '', body);

        // * Headings & Categories
        const headingsContainer = elClassCont('DIV', 'headings-container', '', gameplayContainer);

        const catContainer = elClassCont('DIV', 'cat-container', '', headingsContainer);
        const countryCat = elClassCont('DIV', 'small-rectangle categories', 'Country', catContainer);
        const sportCat = elClassCont('DIV', 'small-rectangle categories', 'Sport', catContainer);
        const professionCat = elClassCont('DIV', 'small-rectangle categories', 'Profession', catContainer);

        const nameScoreContainer = elClassCont('DIV', 'nameScore-container', '', headingsContainer);
        const playerName = elClassCont('DIV', 'small-rectangle nameScore', 'Player', nameScoreContainer);
        const score = elClassCont('DIV', 'small-rectangle nameScore', 'Score', nameScoreContainer);

        // * Inputs, Names & Score
        const inputsContainer = elClassCont('DIV', 'inputs-container', '', body);

        const inputsCatContainer = elClassCont('DIV', 'inputCatContainer', '', inputsContainer);
        const inputCountry = elClassCont('textarea', 'inputsCat input-country', '', inputsCatContainer);
        inputCountry.id = 'input-country'

        const inputSport = elClassCont('textarea', 'inputsCat input-sport', '', inputsCatContainer);
        inputSport.id = 'input-sport'

        const inputProfession = elClassCont('textarea', 'inputsCat input-profession', '', inputsCatContainer);
        inputProfession.id = 'input-profession'


        const inputNameScore = elClassCont('DIV', 'inputNameScore', '', inputsContainer);
        const inputName = elClassCont('DIV', 'small-rectangle input-name', 'Name', inputNameScore);
        inputName.id = 'inputName';

        const scoreName = document.getElementById('inputName');
        const storedName = localStorage.getItem('userName');

        if (storedName) {
            scoreName.innerText = storedName;
        } else {
            console.log("No name stored");
        }



        const inputScore = elClassCont('DIV', 'small-rectangle input-score', '00', inputNameScore);

        // ** Inputs Alerts ** //

        const inputCountrySelector = document.getElementsByClassName('input-country')
        const inputSportSelector = document.getElementsByClassName('input-sport')
        const inputProfessionSelector = document.getElementsByClassName('input-profession')

        // ** Country
        Array.from(inputCountrySelector).forEach(input => {
            input.addEventListener('input', function () {
                if (this.value.length > 20) {
                    gameplayDescription.innerHTML = `<p style="color: red;"> Max Country Length Reach</p>`
                    this.value = this.value.slice(0, 20);
                } else if (/\d/.test(this.value)) {
                    gameplayDescription.innerHTML = "<p style='color: red;'>Numbers are not permited!</p>";
                }    // } else {
                //     gameplayDescription.innerHTML = "Try to fill as much categories as you can, good luck!";
                // }
            });
        });

        // * Country Validation

        let countryScore = 0;


        Array.from(inputCountrySelector).forEach(input => {
            let debounceTimeout = null;

            input.addEventListener('input', function () {
                clearTimeout(debounceTimeout);

                debounceTimeout = setTimeout(() => {
                    const inputCountry = this.value;
                    console.log('--- Country --')
                    // console.log('Input Country:', inputCountry);

                    const startingLetter = `${randomLetter}`;
                    // console.log('Starting letter:', startingLetter);

                    const verificationResult = verifyCountry(inputCountry, startingLetter);
                    // console.log('Verification Result:', verificationResult);

                    if (verificationResult && !hasAddedCountryScore) {

                        countryScore += 10;
                        gameScore += 10;
                        totalScore += 10
                        // console.log('Country "true" Score:', countryScore);
                        console.log('game score: + 10');
                        console.log('total score:', totalScore);
                        inputScore.innerHTML = `${totalScore}`;


                        hasAddedCountryScore = true;
                        console.log('added:', hasAddedCountryScore)
                        hasDeletedCountryScore = false;
                        console.log('deleted:', hasDeletedCountryScore);

                    } else if (!verificationResult && gameScore > 0 && !hasDeletedCountryScore && hasAddedCountryScore) {

                        countryScore -= 10;
                        gameScore -= 10;
                        totalScore -= 10;
                        // console.log('Country "false" Score:', countryScore);
                        console.log('game score: - 10');
                        console.log('total score:', totalScore);
                        inputScore.innerHTML = `${totalScore}`;


                        hasDeletedCountryScore = true;
                        console.log('deleted:', hasDeletedCountryScore);
                        hasAddedCountryScore = false;
                        console.log('added:', hasAddedCountryScore);
                    }
                }, 500);
            });
        });

        // ** Sports
        Array.from(inputSportSelector).forEach(input => {
            input.addEventListener('input', function () {
                if (this.value.length > 20) {
                    gameplayDescription.innerHTML = `<p style="color: red;"> Max Sport Length Reach</p>`
                    this.value = this.value.slice(0, 20);
                } else if (/\d/.test(this.value)) {
                    gameplayDescription.innerHTML = "<p style='color: red;'>Numbers are not permited!</p>";
                }
            });
        });

        // * Sport Validation

        let sportScore = 0;


        Array.from(inputSportSelector).forEach(input => {
            let debounceTimeout = null;

            input.addEventListener('input', function () {
                clearTimeout(debounceTimeout);

                debounceTimeout = setTimeout(() => {
                    const inputSport = this.value;
                    console.log('--- Sport --')
                    // console.log('Input Sport:', inputSport);

                    const startingLetter = `${randomLetter}`;
                    // console.log('Starting letter:', startingLetter);

                    const verificationResult = verifySport(inputSport, startingLetter);
                    // console.log('Verification Result (Sport):', verificationResult);

                    if (verificationResult && !hasAddedSportScore) {

                        sportScore += 10;
                        gameScore += 10;
                        totalScore += 10;
                        // console.log('Sport "true" Score:', sportScore);
                        console.log('game score: + 10');
                        console.log('total score:', totalScore);
                        inputScore.innerHTML = `${totalScore}`;


                        hasAddedSportScore = true;
                        console.log('added: ', hasAddedSportScore)
                        hasDeletedSportScore = false;
                        console.log('deleted:', hasDeletedSportScore)

                    } else if (!verificationResult && gameScore > 0 && !hasDeletedSportScore && hasAddedSportScore) {

                        sportScore -= 10;
                        gameScore -= 10;
                        totalScore -= 10;

                        // console.log('Sport "false" Score:', sportScore);
                        console.log('game score: - 10');
                        console.log('total score:', totalScore);
                        inputScore.innerHTML = `${totalScore}`;


                        hasDeletedSportScore = true;
                        console.log('deleted:', hasDeletedSportScore)
                        hasAddedSportScore = false;
                        console.log('added:', hasAddedSportScore)
                    }
                }, 500);
            });
        });

        // ** Profession
        Array.from(inputProfessionSelector).forEach(input => {
            input.addEventListener('input', function () {
                if (this.value.length > 20) {
                    gameplayDescription.innerHTML = `<p style="color: red;"> Max Profession Length Reach</p>`
                    this.value = this.value.slice(0, 20);
                } else if (/\d/.test(this.value)) {
                    gameplayDescription.innerHTML = "<p style='color: red;'>Numbers are not permited!</p>";
                }
            });
        });

        // * Profession Validation

        let professionScore = 0;

        Array.from(inputProfessionSelector).forEach(input => {
            let debounceTimeout = null;

            input.addEventListener('input', function () {
                clearTimeout(debounceTimeout);

                debounceTimeout = setTimeout(() => {


                    const inputProfession = this.value;
                    console.log('--- Profession --')
                    // console.log('Input Profession:', inputProfession);

                    const startingLetter = `${randomLetter}`;
                    // console.log('Starting letter:', startingLetter);

                    const verificationResult = verifyProfession(inputProfession, startingLetter);
                    // console.log('Verification Result', verificationResult);

                    if (verificationResult && !hasAddedProfessionScore) {

                        professionScore += 10;
                        gameScore += 10;
                        totalScore += 10;
                        // console.log('Profession "true" Score:', professionScore);
                        console.log('game score: + 10');
                        console.log('total score:', totalScore);
                        inputScore.innerHTML = `${totalScore}`;

                        hasAddedProfessionScore = true;
                        console.log('added:', hasAddedProfessionScore);

                        hasDeletedProfessionScore = false;
                        console.log('deleted', hasDeletedProfessionScore);

                    } else if (!verificationResult && gameScore > 0 && !hasDeletedProfessionScore && hasAddedProfessionScore) {

                        professionScore -= 10;
                        gameScore -= 10;
                        totalScore -= 10;
                        // console.log('Profession "false" Score:', professionScore);
                        console.log('game score: - 10');
                        console.log('total score:', totalScore);
                        inputScore.innerHTML = `${totalScore}`;

                        hasDeletedProfessionScore = true;
                        console.log('deleted: ', hasDeletedProfessionScore);


                        hasAddedProfessionScore = false;
                        console.log('added: ', hasAddedProfessionScore);
                    }
                }, 500);
            });
        });


    }

    // TODO Loop #2 & Loop #3 ------------------------------------------------


    if (timeLeft === 0 && loop === 2) {
        console.log('-------- Round #2 -----------')

        gameScore = 0;

        hasAddedCountryScore = false;
        console.log('added country score:', hasAddedCountryScore)
        hasDeletedCountryScore = false;
        console.log('deleted country score:', hasDeletedCountryScore)

        hasAddedSportScore = false;
        console.log('added sport score:', hasAddedSportScore);
        hasDeletedSportScore = false;
        console.log('deleted sport score:', hasDeletedSportScore);


        hasAddedProfessionScore = false;
        console.log('added profession score:', hasAddedProfessionScore);
        hasDeletedProfessionScore = false;
        console.log('deleted profession score', hasDeletedProfessionScore);


        const country = document.getElementById('input-country');
        country.value = '';

        country.style.border = '2px solid grey';
        country.style.backgroundColor = 'white';

        if (verifyCountry(country.value, randomLetter)) {
            hasAddedCountryScore = true;
            console.log('added country score:', hasAddedCountryScore)
        }


        const sport = document.getElementById('input-sport');
        sport.value = ''

        sport.style.border = '2px solid grey';
        sport.style.backgroundColor = 'white';

        if (verifySport(sport.value, randomLetter)) {
            hasAddedSportScore = true;
            console.log('added sport score:', hasAddedSportScore);
        }


        const profession = document.getElementById('input-profession');
        profession.value = ''

        profession.style.border = '2px solid grey';
        profession.style.backgroundColor = 'white';

        if (verifyProfession(profession.value, randomLetter)) {
            hasAddedProfessionScore = true;
            console.log('added profession score:', hasAddedProfessionScore);
        }

        const intervalId = setInterval(() => {
            clearInterval(intervalId);

            const lettersArray = 'ABCDEFGHIJKLMNOPQRSTUVYZ'.split('');

            const randomIndex = Math.floor(Math.random() * lettersArray.length);

            randomLetter = lettersArray[randomIndex];
            document.querySelector('.letter-holder').innerText = lettersArray[randomIndex];
        }, 100);





        console.log('total score:', totalScore);
        console.log('game score:', gameScore);
    }

    if (timeLeft === 0 && loop === 3) {
        console.log('-------- Round #3 -----------')

        gameScore = 0;

        hasAddedCountryScore = false;
        hasDeletedCountryScore = false;

        hasAddedSportScore = false;
        hasDeletedSportScore = false;


        hasAddedProfessionScore = false;
        hasDeletedProfessionScore = false;


        const country = document.getElementById('input-country');
        country.value = '';

        country.style.border = '2px solid grey';
        country.style.backgroundColor = 'white';


        const sport = document.getElementById('input-sport');
        sport.value = ''

        sport.style.border = '2px solid grey';
        sport.style.backgroundColor = 'white';


        const profession = document.getElementById('input-profession');
        profession.value = ''

        const intervalId = setInterval(() => {
            clearInterval(intervalId);

            const lettersArray = 'ABCDEFGHIJKLMNOPQRSTUVYZ'.split('');

            const randomIndex = Math.floor(Math.random() * lettersArray.length);

            randomLetter = lettersArray[randomIndex];
            document.querySelector('.letter-holder').innerText = lettersArray[randomIndex];
        }, 200);

        profession.style.border = '2px solid grey';
        profession.style.backgroundColor = 'white';

        console.log('total score:', totalScore);
        console.log('game score:', gameScore);

        const gameplayContainer = document.querySelector('.gameplay-container');
        const inputsContainer = document.querySelector('.inputs-container');
        const descriptionID = document.getElementById('descriptionID');
        const roundtitle = document.querySelector('.round-title')
        const clickme = document.querySelector('.click-me')

        if (gameplayContainer && inputsContainer && descriptionID && roundTitle) {
            gameplayContainer.classList.toggle('hidden')
            inputsContainer.classList.toggle('hidden')
            descriptionID.classList.toggle('hidden');
            roundtitle.classList.toggle('hidden');
            clickme.classList.toggle('hidden');

            console.log('toggle #2')
        }
    }

    if (timeLeft === 25 && loop === 2) {

        const gameplayContainer = document.querySelector('.gameplay-container');
        const inputsContainer = document.querySelector('.inputs-container');
        const descriptionID = document.getElementById('descriptionID');
        const roundtitle = document.querySelector('.round-title')
        const clickme = document.querySelector('.click-me')

        if (gameplayContainer && inputsContainer && descriptionID && roundTitle) {
            gameplayContainer.classList.toggle('hidden')
            inputsContainer.classList.toggle('hidden')
            descriptionID.classList.toggle('hidden');
            roundtitle.classList.toggle('hidden');
            clickme.classList.toggle('hidden');

            console.log('toggle #2')
        }
        // hideElements()
    }

    if (timeLeft === 0 && loop === 3) {

        hasAddedCountryScore = false;
        hasDeletedCountryScore = false;

        hasAddedSportScore = false;
        hasDeletedSportScore = false;

        hasAddedProfessionScore = false;
        hasDeletedProfessionScore = false;

        gameScore = 0;

        const country = document.getElementById('input-country');
        country.value = '';

        country.style.border = '2px solid grey';
        country.style.backgroundColor = 'white';


        const sport = document.getElementById('input-sport');
        sport.value = '';

        sport.style.border = '2px solid grey';
        sport.style.backgroundColor = 'white';


        const profession = document.getElementById('input-profession');
        profession.value = '';

        profession.style.border = '2px solid grey';
        profession.style.backgroundColor = 'white';

        let intervalId = setInterval(() => {
            clearInterval(intervalId)
            const lettersArray = 'ABCDEFGHIJKLMNOPQRSTUVYZ'.split('');

            const randomIndex = Math.floor(Math.random() * lettersArray.length);

            randomLetter = lettersArray[randomIndex];
            document.querySelector('.letter-holder').innerText = lettersArray[randomIndex];
        }, 50);

        console.log('total score:', totalScore);
        console.log('game score:', gameScore);
    }

    if (timeLeft === 1 && loop === 3) {
        const difficulty = localStorage.getItem('difficulty')

        if ((difficulty === 'Easy' && totalScore > 50) || (difficulty === 'Medium' && totalScore > 70) || (difficulty === 'Hards' && totalScore >= 90)) {
            window.location.href = "../htmls/winner.html";
            console.log('winners page')

        } else {
            window.location.href = "../htmls/looser.html";
            console.log('lossers page')
        }
    }


};

console.log(localStorage.getItem('difficulty'))

function removeRestart() {
    let restartButton = document.getElementsByClassName('restart')[0]
    let parent = document.getElementsByClassName('side-container')[0]

    parent.removeChild(restartButton)
}

function resetTimer(seconds) {
    timeLeft = seconds;
}

const difficulty = localStorage.getItem('difficulty')

let winnerSelector = document.querySelector('.win-text')

if (winnerSelector) {
    winnerSelector.innerHTML = `Congratulations, you complete the <span>${localStorage.getItem('difficulty')}</span> level ! ! !`
}

let loserSelector = document.querySelector('.loss-text')

if (loserSelector) {
    loserSelector.innerHTML = `So close..., almost complete the <span>${localStorage.getItem('difficulty')}</span> level ! ! !`
}