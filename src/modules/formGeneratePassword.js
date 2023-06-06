import generatePassword from './generators';

const generatedPassword = document.querySelector('.generated-password');
const characters = document.querySelector('.characters');
const chkNumbers = document.querySelector('.chk-numbers');
const chkCapitalLetters = document.querySelector('.chk-capital-letters');
const chkLowerCase = document.querySelector('.chk-lower-case');
const chkSymbols = document.querySelector('.chk-symbols');
const generatesPassword = document.querySelector('.generates-password');

export default () => {
    generatesPassword.addEventListener('click', () => {
        generatedPassword.innerHTML = generate();
    });
};

function generate() {
    const password = generatePassword(
        characters.value,
        chkNumbers.checked, 
        chkCapitalLetters.checked, 
        chkLowerCase.checked, 
        chkSymbols.checked
    );
    return password || 'Nothing selected.';
}
