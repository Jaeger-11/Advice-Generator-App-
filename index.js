const q = document.getElementsByTagName('q')[0];
const adviceId = document.getElementsByTagName('h5')[0];
const dice = document.getElementsByClassName('diceBox')[0];

url = "https://api.adviceslip.com/advice"

let slip = {}
const fetchAdvice = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            q.textContent = data.slip.advice
            adviceId.innerHTML = `ADVICE #${data.slip.id}`
        })
        .catch(error => {
            console.log(error)
    })
}
console.log(slip)

document.addEventListener('DOMContentLoaded', fetchAdvice)
dice.addEventListener('click', fetchAdvice)