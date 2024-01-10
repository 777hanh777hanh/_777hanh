const emojis = [
    '💩',
    '💩',
    '😂',
    '😂',
    '😘',
    '😘',
    '❤️',
    '❤️',
    '💕',
    '💕',
    '😤',
    '😤',
    '👿',
    '👿',
    '🐧',
    '🐧',
];

const gameBlock = document.querySelector('.game');
const resetBtn = document.querySelector('.reset');

let flippedCardReady = [];
let matchedCards = [];

const shuffle = function (array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

const createCard = function (emoji) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.emoji = emoji;
    card.innerHTML = emoji;

    card.addEventListener('click', () => {
        if (flippedCardReady.length < 2) {
            card.classList.add('flipped');
            flippedCardReady.push(card);
            checkMatch();
            card.addEventListener('transitionend', checkWin, { once: true });
        }
    });

    return card;
};

shuffle(emojis).forEach((emoji) => {
    gameBlock.appendChild(createCard(emoji));
});

const checkMatch = () => {
    if (flippedCardReady.length > 1) {
        const firstCard = flippedCardReady[0];
        const secondCard = flippedCardReady[1];

        if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
            firstCard.classList.add('matched');
            secondCard.classList.add('matched');
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            if (flippedCardReady.indexOf(firstCard) > -1) {
                flippedCardReady.splice(flippedCardReady.indexOf(firstCard), 1);
                matchedCards.push(firstCard);
            }
            if (flippedCardReady.indexOf(secondCard) > -1) {
                flippedCardReady.splice(flippedCardReady.indexOf(secondCard), 1);
                matchedCards.push(secondCard);
            }
        } else {
            setTimeout(() => {
                if (flippedCardReady.indexOf(firstCard) > -1) {
                    firstCard.classList.remove('flipped');
                    flippedCardReady.splice(flippedCardReady.indexOf(firstCard), 1);
                }
                if (flippedCardReady.indexOf(secondCard) > -1) {
                    secondCard.classList.remove('flipped');
                    flippedCardReady.splice(flippedCardReady.indexOf(secondCard), 1);
                }
            }, 500);
        }
    }
};

const checkWin = () => {
    if (matchedCards.length === emojis.length) {
        alert('win');
        resetGame();
    }
};

// Reset
resetBtn.addEventListener('click', () => {
    resetGame();
});

const resetGame = () => {
    const allCards = document.querySelectorAll('.card');
    Array.from(allCards).forEach((card) => {
        card.remove();
    });
    shuffle(emojis).forEach((emoji) => {
        gameBlock.appendChild(createCard(emoji));
    });

    flippedCardReady = [];
    matchedCards = [];
};
