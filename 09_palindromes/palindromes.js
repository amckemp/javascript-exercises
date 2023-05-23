const palindromes = function (string) {
   const input = [...string.toLowerCase()];
   var punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~\s';
   const filteredInput = input.filter(element => {
    return punctuation.indexOf(element) === -1;
   })
   const reverseInput = [...filteredInput];
   reverseInput.reverse();

   for (let i = 0; i < string.length; i++){
    if (filteredInput[i] != reverseInput[i]){
        return false;
    }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
