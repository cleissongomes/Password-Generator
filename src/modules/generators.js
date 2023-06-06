const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateCapitalLetter = () => String.fromCharCode(rand(65, 91));
const generateLowerCaseLetter = () => String.fromCharCode(rand(97, 123));
const generateNumber = () => String.fromCharCode(rand(48, 58));
const symbols = ',.;~^[]{}!@#$*()_+=-';
const generateSymbols = () => symbols[rand(0, symbols.length)];

export default function generatePassword(quantity, capitalLetters, lowerCaseLetters, numbers, symbols) {
    const arrayPassword = [];
    quantity = Number(quantity);

    for(let i = 0; i < quantity; i++) {
        capitalLetters && arrayPassword.push(generateCapitalLetter());
        lowerCaseLetters && arrayPassword.push(generateLowerCaseLetter());
        numbers && arrayPassword.push(generateNumber());
        symbols && arrayPassword.push(generateSymbols());
    }
    return arrayPassword.join('').slice(0, quantity);
}



