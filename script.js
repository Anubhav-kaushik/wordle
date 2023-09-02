const wordList = document.getElementById('wordList');

// Load JSON data from a separate file
fetch('words.json')
    .then(response => response.json())
    .then(jsonData => {
        displayWords(jsonData);
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });

function createWordCard(word) {
    const wordCard = document.createElement('div');
    wordCard.classList.add('word');

    const wordHeader = document.createElement('h2');
    wordHeader.innerHTML = `<span class="word-heading">${word.word}</span> <span class="word-speech">(${word.part_of_speech})</span>`;
    wordCard.appendChild(wordHeader);

    const detailsList = document.createElement('ul');
    const details = [
        `<b>Meaning:</b> ${word.meaning}`,
        `<b>Synonyms:</b> ${word.synonyms.join(', ')}`,
        `<b>Antonyms:</b> ${word.antonyms.join(', ')}`,
        `<b>Example:</b> ${word.example}`
    ];

    details.forEach(detail => {
        const listItem = document.createElement('li');
        listItem.innerHTML = detail;
        detailsList.appendChild(listItem);
    });

    wordCard.appendChild(detailsList);
    return wordCard;
}

function displayWords(words) {
    words.forEach(word => {
        const wordCard = createWordCard(word);
        wordList.appendChild(wordCard);
    });
}
