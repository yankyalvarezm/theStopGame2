document.getElementById('stop').addEventListener('click', function () {
    window.location.href = '../index.html'
})

console.log('howtoplay connected')

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

// ? Written Instrucions

const main = elClass('MAIN', 'container')
const summary = elClassCont('SECTION', 'upper-container', '', main)

const winning = elClassCont('SECTION', 'middle-container', '', main)
const winningHead = elClassCont('DIV', 'middle-title', '', winning)

const lossing = elClassCont('SECTION', 'bottom-container', '', main)

elClassCont('DIV', 'small-rectangle', 'Summary', summary);
elClassCont('DIV', 'small-circle', '1', summary);
elClassCont('DIV', 'large-rectangle',
    ' <p><span style="color: red;">"Stop"</span> is a word game where players have to quickly come up with words that start with a randomly generated letter. This letter is used to fill out different categories as professions, sports, and countries, all within a 20 seconds timer.</p>'
    , summary);

elClassCont('DIV', 'small-rectangle', 'How to win?', winningHead);
elClassCont('DIV', 'small-circle', '2', winningHead);
elClassCont('DIV', 'large-rectangle',
    '<p>You score points by <span style="color: red;">listing unique words in each category</span> that start with the given letter. The objective is to have the most points by the end of the game.</p>'
    , winning);

elClassCont('DIV', 'small-rectangle', 'How to lose?', lossing);
elClassCont('DIV', 'small-circle', '3', lossing);
elClassCont('DIV', 'large-rectangle',
    '<p>You lose by failing to come up with unique words in the one minute time frame or by not accumulating enough points at the end of the game. This game <span style="color: red;">is all about quick thinking, a good vocabulary and strategic word choices!</span></p> '
    , lossing); 