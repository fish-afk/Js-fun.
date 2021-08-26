let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playername = document.getElementById("name-input")

let name_entered = document.getElementById("name-entered")
let entered = false
let cash = document.getElementById("cash-el")

function render_name() {

    entered = length_check(playername.value)
    
    if (entered == false) {
        name_entered.textContent = "Name should be atleast 3 characters..."

    } else {
        
        messageEl.textContent = "Want to play a round ? Press start game ..."
        name_entered.textContent = "Welcome " + playername.value + "!"
    }

}

function length_check(name) {

    if (name.length <= 2){

        return false

    }else{

        return true
    }

} 

function getRandomCard() {

    let randomNumber = Math.floor( Math.random()*13 ) + 1

    if (randomNumber > 10) {

        return 10
    } else if (randomNumber === 1) {

        return 11
    } else {
        return randomNumber
    } 
}

function startGame() {

    hasBlackJack = false

    if (entered == true) {

        isAlive = true

        let firstCard = getRandomCard()

        let secondCard = getRandomCard()

        cards = [firstCard, secondCard]

        sum = firstCard + secondCard

        renderGame()

    } else {
        document.getElementById("name-entered").textContent = "Please Enter your name"
    }

}

function renderGame() {

    cardsEl.textContent = "Cards recieved : "

    for (let i = 0; i < cards.length; i++) {

        cardsEl.textContent += cards[i] + ", "

    }

    
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {

        messageEl.style.fontSize = "16px"

        cash.innerHTML =   "<i> Your cash: $" + sum * 2 + "</i>"  

        message = "Do you want to draw a new card?"

    } else if (sum === 21) {

        cash.innerHTML = "<i> Your just won : $" + (20 * 2) + 2000 + " !</i>" 

        cash.style.color = "red"

        messageEl.style.fontSize = "32px"

        message = "You've got Blackjack!"

        hasBlackJack = true

    } else {

        messageEl.style.fontSize = "20px"

        message = `you're out of the game!   ${sum}  is > 21 .. 
                       please press start game again...`

        isAlive = false
    }
    messageEl.textContent = message

}


function newCard() {

    if (isAlive === true && hasBlackJack === false) {

        let card = getRandomCard()

        sum += card
        
        cards.push(card)
        renderGame()        
    }
}