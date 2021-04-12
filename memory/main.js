const cardColors = ["react", "react", "javaScript", "javaScript", "css", "css", "html", "html", "angular", "angular", "vue", "vue", "c", "c", "typeScript", "typeScript", "sql", "sql"];
let cards = document.querySelectorAll("div");
cards = [...cards];

let activeCard = "";
const activeCards = [];
const gameLength = cards.length / 2;
let gameResult = 0;

const clickCard = function () {

    activeCard = this;
    if (activeCard == activeCards[0]) return;
    activeCard.classList.remove("znaki");

    if (activeCards.length === 0) {
        console.log("1 element");
        activeCards[0] = activeCard;
        return;
    }
    else {
        cards.forEach(card => card.removeEventListener("click", clickCard))
        activeCards[1] = activeCard;

        setTimeout(function () {
            if (activeCards[0].className === activeCards[1].className) {
                console.log("wygrane")
                activeCards.forEach(card => card.classList.add("wylosowane"))
                gameResult++;
                cards = cards.filter(card => !card.classList.contains("wylosowane"));

                if (gameResult == gameLength) {
                    alert(`Wygrałeś !`)
                    location.reload();
                }
            }
            else {

                activeCards.forEach(card => card.classList.add("znaki"))
            }
            activeCard = "";
            activeCards.length = 0;
            cards.forEach(card => card.addEventListener("click", clickCard))
        }, 500)
    }
};

const init = function () {
    cards.forEach(card => {
        const position = Math.floor(Math.random() * cardColors.length); //1
        card.classList.add(cardColors[position]);
        cardColors.splice(position, 1);
    })
    setTimeout(function () {
        cards.forEach(card => {
            card.classList.add("znaki")
            card.addEventListener("click", clickCard)
        })
    }, 1000)
};
init()


