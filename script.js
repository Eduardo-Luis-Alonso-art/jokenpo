const optionImages = document.querySelectorAll(".option-image")
const container = document.querySelector(".container")
const resultText = document.querySelector(".result-text")
const computerResult = document.querySelector(".computer-result img")
const userResult = document.querySelector(".user-result img")

const computerSrcImg = ['img/pedra.png', 'img/papel.png', 'img/tesoura.png']

const winner = {
    RR: "Empate",
    RP: "Computador",
    RS: "Você",
    PR: "Você",
    PP: "Empate",
    PS: "Computador",
    SR: "Computador",
    SP: "Você",
    SS: "Empate"
}

function handleOptionClick(event) {
    const clickedImage = event.currentTarget
    const userIndex = Array.from(optionImages).indexOf(clickedImage)



    container.classList.add("start")
    resultText.textContent = ". . ."

    userResult.src = computerResult.src = 'img/pedra.png'

    setTimeout(() => {
        container.classList.remove("start")

        userResult.src = computerSrcImg[userIndex]

        const randomNumber = Math.floor(Math.random() * computerSrcImg.length)
        computerResult.src = computerSrcImg[randomNumber]

        const userValue = ['R', 'P', 'S'][userIndex]
        const computerValue = ['R', 'P', 'S'][randomNumber]
        const userComputerResult = userValue + computerValue
        const finalResult = winner[userComputerResult]

        resultText.textContent = userValue === computerValue ? 'Empate' : finalResult + ' Ganhou'
    }, 2000);
}

optionImages.forEach(img => {
    img.addEventListener("click", handleOptionClick)
})