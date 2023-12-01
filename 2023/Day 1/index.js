const fs = require('fs');
const regex = new RegExp('[0-9]', 'g');
const replacements = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
};
const convertRegex = new RegExp(`(?=(${Object.keys(replacements).join('|')}))`, 'g');

let input = fs.readFileSync('./input.txt', 'utf-8');
input = input.replace(convertRegex, (match, group) => {
    return group ? replacements[group] : match;
});
console.log(input);

const lines = input.split('\n');

let value = 0;

console.log(value);
lines.forEach(line => {
    const match = [...line.matchAll(regex)];

    if (match[0]) {
        console.log(`+ ${match[0][0]}${match[match.length - 1][0]} (${line})`);

        value += parseInt(match[0][0] + match[match.length - 1][0]);
    }
})

console.log(`‾‾‾‾‾‾‾‾‾‾\n${value}`);