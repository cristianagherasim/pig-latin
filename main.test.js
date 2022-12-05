const {expect, test, describe} = require("@jest/globals");

const main = require('./main');

// words that start with vowels… write tests for several different starting vowels

test('starts with e', () => {
        let testPiglatin = main.translate('egg');
        expect(testPiglatin).toBe('eggway');
   })

test('starts with o', () => {
    let testPiglatin = main.translate('orange');
    expect(testPiglatin).toBe('orangeway');
})
                                                                                                                                                                                                                                                                                                                                                                                    

// words that start with vowels with capital letters are converted to lowercase

test('starts with capital Vowel', () => {
    let testPiglatin = main.translate('Orange');
    expect(testPiglatin).toBe('orangeway');
})

test('starts with capital Vowel', () => {
    let testPiglatin = main.translate('Alaska');
    expect(testPiglatin).toBe('alaskaway');
})

test('starts with capital Vowel', () => {
    let testPiglatin = main.translate('Expecting');
    expect(testPiglatin).toBe('expectingway');
})

// words that start with one consonant… write tests for the second letter being several different vowels
test('starts with consonant…different  vowels', () => {
    let testPiglatin = main.translate('bee');
    expect(testPiglatin).toBe('eebay');
})

test('starts with consonant…different  vowels', () => {
    let testPiglatin = main.translate('target');
    expect(testPiglatin).toBe('argettay');
})

test('starts with consonant…different  vowels', () => {
    let testPiglatin = main.translate('poser');
    expect(testPiglatin).toBe('oserpay');
})

// words that start with two consonants

test('starts with two consonants', () => {
    let testPiglatin = main.translate('pray');
    expect(testPiglatin).toBe('aypray');
})

test('starts with two consonants', () => {
    let testPiglatin = main.translate('score');
    expect(testPiglatin).toBe('orescay');
})

test('starts with two consonants', () => {
    let testPiglatin = main.translate('growing');
    expect(testPiglatin).toBe('owinggray');
})
// words that start with more consonants

test('starts with more consonants', () => {
    let testPiglatin = main.translate('throwing');
    expect(testPiglatin).toBe('owingthray');
})

test('starts with more consonants', () => {
    let testPiglatin = main.translate('school');
    expect(testPiglatin).toBe('oolschay');
})

test('starts with more consonants', () => {
    let testPiglatin = main.translate('christmas');
    expect(testPiglatin).toBe('istmaschray');
})