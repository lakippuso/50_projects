const generatePasswordButton = document.getElementById("generate");
const passwordLength = document.getElementById("length");
const result = document.getElementById("result");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const clipboard = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLowerCase,
    upper: getRandomUpperCase,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

clipboard.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = result.innerText

    if(!password) return

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    console.log('Copied to clipboard: '+password)
})

generatePasswordButton.addEventListener("click", () => {
    let password = "";
    let length = passwordLength.value;
    const hasLower = lowercase.checked;
    const hasUpper = uppercase.checked;
    const hasNumbers = numbers.checked;
    const hasSymbols = symbols.checked;
    result.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumbers,
        hasSymbols,
        length
    );
});

function generatePassword(lower, upper, number, symbol, length) {
    let generatePassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
        (item) => Object.values(item)[0]
    );
    if(typesCount === 0){
        return ''
    }
    for (let index = 0; index < length; index+=typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatePassword += randomFunc[funcName]()
        })
    }
    return generatePassword.slice(0, length)
}

function getRandomLowerCase() {
    let rand = Math.floor(Math.random() * 25);
    return String.fromCharCode(97 + rand);
}
function getRandomUpperCase() {
    let rand = Math.floor(Math.random() * 25);
    return String.fromCharCode(65 + rand);
}
function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}
function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.-+_|`~";
    return symbols[Math.floor(Math.random() * symbols.length)];
}
