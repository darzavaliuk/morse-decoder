const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const DECOD_TABLE = {
    '**********': ' ',
    '10': '.',
    '11': '-',
    '00': '',
};

function decode(expr) {
    const arrayCodedLetters = expr.match(/.{1,10}/g);

    return arrayCodedLetters.map((letter) => {
        if (DECOD_TABLE[letter])
            return DECOD_TABLE[letter];

        const arrayCodingKey = letter.match(/.{2}/g);

        const morseLetter = arrayCodingKey.map(e => DECOD_TABLE[e]).join('')

        return MORSE_TABLE[morseLetter];
    }).join('')
};


module.exports = {
    decode
}