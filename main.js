// function translate(str){
//     let strArr = str.split(' ');
//     let pigLatin = [];
  
//     for(let word of strArr){
//       if((/([a-zA-Z])/).test(word)){
//         pigLatin.push(word.substring(1) + word[0] + "ay");
//       }else{
//         pigLatin.push(word);
//       }
//     }
//     return pigLatin.join(" ");
//   }

//   module.exports = (translate);

function translate(rawWord) {
    word = rawWord.toLowerCase();
    let vowels = ["a","e","i","o","u"];

    if(vowels.indexOf(word[0]) > -1) {
        return word + "way";
    } else {
        for (var i=0; i < word.length; i++) {
            if (vowels.includes(word[i])) {
              let firstConsonants = word.slice(0,i);
              let restOfWord = word.slice(i, word.length);
            return restOfWord + firstConsonants + "ay";
            }
        }
    }
}

module.exports = {translate};

