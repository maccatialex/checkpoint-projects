function analyzeSentence(sentence) {
    // Initialize counters//
    let characterCount = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Define a string of vowels for easy checking//
    const vowels = "aeiouAEIOU";

    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        // Count characters
        characterCount++;

        // Count vowels
        if (vowels.includes(char)) {
            vowelCount++;
        }

        // Count words (only count when we encounter a space or the end of the sentence)
        if (char === ' ' || char === '.') {
            if (i > 0 && sentence[i - 1] !== ' ' && sentence[i - 1] !== '.') {
                wordCount++;
            }
        }
    }

    // If the last character is a period, we need to count the last word//
    if (sentence.length > 0 && sentence[sentence.length - 1] === '.') {
        if (sentence[sentence.length - 2] !== ' ' && sentence[sentence.length - 2] !== '.') {
            wordCount++;
        }
    }

    // Output //
    console.log("Character Count:", characterCount);
    console.log("Word Count:", wordCount);
    console.log("Vowel Count:", vowelCount);
}
