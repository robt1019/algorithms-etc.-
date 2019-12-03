const isCharacter = new RegExp('[a-z]');

function isPalindromePermutation(word: string) {
    const charCounts = {};

    word.split('').forEach(char => {

        char = char.toLowerCase();
        if(isCharacter.test(char)) {
            if(charCounts[char]) {
                charCounts[char]++;
            } else {
                charCounts[char] = 1;
            }
        }
    });

    let oddCount = 0;

    Object.keys(charCounts).forEach(char => {
        if(charCounts[char] % 2 === 1) {
            oddCount++;
        }
    });

    return oddCount <= 1;
}

console.log(isPalindromePermutation('Tact Coa'));