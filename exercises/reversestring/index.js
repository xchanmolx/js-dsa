// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('apple');

module.exports = reverse;

// Solution #1
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// Solution #2
// function reverse(str) {
//     let reversed = '';
  
//     for (let character of str) {
//         reversed = character + reversed;
//     }
  
//     return reversed;
// }

// Solution #3
// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, '');
// }

// How to Debug
// function reverse(str) {
//     debugger;
//     return str.split('').reduce((rev, char) => char + rev, '');
// }

// reverse('apple');