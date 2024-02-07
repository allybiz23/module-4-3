function countWordsAndMore() {
    var textInput = document.getElementById('textInput').value;

    // Count total words
    var words = textInput.match(/\b\w+\b/g) || [];
    var totalWords = words.length;
    document.getElementById('totalWords').textContent = totalWords;

    // Count complicated words (words with more than 10 characters)
    var complicatedWords = words.filter(word => word.length > 10);
    var totalComplicatedWords = complicatedWords.length;
    document.getElementById('complicatedWords').textContent = totalComplicatedWords;

    // Count total sentences (naive approach)
    var totalSentences = textInput.split(/[.!?]+/).length - 1;
    document.getElementById('totalSentences').textContent = totalSentences;

    // Count total characters
    var totalCharacters = textInput.length;
    document.getElementById('totalCharacters').textContent = totalCharacters;
}