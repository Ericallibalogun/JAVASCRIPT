
const filterUnrepeatedWords = function(value) {
    const words = value.split(" ");
    const wordCount = {};
    const uniqueWords = [];

    for (let word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }
    for (let word of words) {
        if (wordCount[word] === 1) {
            uniqueWords.push(word);
        }
    }
    return uniqueWords;
}
module.exports = { filterUnrepeatedWords };
