const {expect, test, describe} = require("@jest/globals");

let main = require('./main');

// words that start with vowels… write tests for several different starting vowels

test('translate to pig latin', () => {
    
    let testPiglatin = main('Good Night');

    expect(testPiglatin).toBe('oodGay ightNay');

});

// words that start with vowels with capital letters are converted to lowercase


// words that start with one consonant… write tests for the second letter being several different vowels


// words that start with two consonants


// words that start with more consonants
