// Function that accepts a string value as an argument and returns a random index number from string
function randomIndex(str) {
    return Math.floor(Math.random() * str.length);
};

console.log(randomIndex('Chicken'));

function getRandomLower() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    return letters[randomIndex(letters)]
};

console.log(getRandomLower());

function getRandomUpper() {
    const letter = getRandomLower();
    return letter.toUpperCase();
};

console.log(getRandomUpper());

function getRandomNumber(){
    const numbers = '1234567890';
    return numbers[randomIndex(numbers)]
}
console.log(getRandomNumber());

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[randomIndex(symbols)]
};
console.log(getRandomSymbol());

const randomFunctions = {
    lower: getRandomLower,
    upper: getRandomUpper, 
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

const resultEl = document.querySelector('#result');
const clipboardEl = document.querySelector('#clipboard');
const lowercaseEl = document.querySelector('#lowercase');
const uppercaseEl = document.querySelector('#uppercase');
const numbersEl = document.querySelector('#numbers');
const symbolsEl = document.querySelector('#symbols');
const lengthEl = document.querySelector('#length');
const generateEl = document.querySelector('#generate');

function generatePassword(lower, upper, numbers, symbols, lengths) {
    let generatePassword = '';

    const typesCount = lower + upper + number + symbol;
    console.log(typesCount);

    if (typesCount === 0){
        alert('Please Select at least one option')
        return '';
    }

    let typesArr = [
        ['lower', lower],
        ['upper', upper],
        ['numbers', numbers],
        ['symbols', symbols]
    ];
    console.log(typesArr);

    typesArr = typesArr.filter((item) => {
        console.log(item[1]);
        return item[1]
    });
    console.log(typesARR);

    for (i = 0; i < length; i+=typesCount){
        typesArr.forEach((type) => {
            const funcName = type[0];
            console.log(funcName);
            generatePassword += randomFunctions[funcName]
            console.log(generatePassword);
        });
    }

    const finalPassword = generatePassword.slice(0, length)
    console.log(finalPassowrd);

    return finalPassword;

};

generateEl.addEventListener('click', () => {

    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    const length = parseInt(lengthEl.value);
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});


clipboardEl.addEventListener('click', () => {
    
    const password = resultEl.innerText;
    if (password === ''){
        alert('Please generate a password first');
        return
    }
    navigator.clipboard.writeText(password);

    alert('Copied to clipboard');

});