const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let clickCount = 0
let generateButton = document.getElementById("generate-button")

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

generateButton.addEventListener("click", function() {
    
    clickCount++

    if(clickCount === 1) {

        for (let i = 0; i < 15; i++) {
            passwordOne.textContent += characters[getRandomNumber(0, characters.length - 1)]
        }
    }
    else if(clickCount === 2) {
        for (let i = 0; i < 15; i++) {
            passwordTwo.textContent += characters[getRandomNumber(0, characters.length - 1)]
        }
    }
    else {
        generateButton.disabled = true;
    }
})

let themeStyle = document.getElementById("theme-style")
let themeButton = document.getElementById("theme-button")

themeButton.addEventListener("click", function() {
    
    if(themeStyle.href.includes("light-theme.css") && themeButton.textContent === "Dark Mode") {
        themeStyle.href = "dark-theme.css"
        themeButton.textContent = "Light Mode"
    } else {
        themeStyle.href = "light-theme.css"
        themeButton.textContent = "Dark Mode"
    }
})
