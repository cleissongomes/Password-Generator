const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateCapitalLetter = () => String.fromCharCode(rand(65, 91));
const generateLowercaseLetter = () => String.fromCharCode(rand(97, 123));
const generateNumber = () => String.fromCharCode(rand(48, 58));
const symbols = ',.;~^[]{}!@#$*()_+=-';
const generateSymbol = () => symbols[rand(0, symbols.length)];



