
function addCard(listId) {
    const inputElement = document.getElementById(`search`);
    const cardText = inputElement.value.trim();

    if (cardText === "") {
        alert("Please enter text for the card.");
        return;
    }

    const cardId = `card_${Date.now()}`;
    const cardHTML = `<div id="${cardId}" class="card" draggable="true" ondragstart="drag(event)">${cardText}
    <button class="delete-btn" onclick="deleteCard('${cardId}')">Delete</button>
    </div>`;

    const listElement = document.getElementById(listId);
    listElement.insertAdjacentHTML('beforeend', cardHTML);

    inputElement.value = "";
}
function allowDrop(event) {
    event.preventDefault();
}
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
    event.preventDefault();
    const cardId = event.dataTransfer.getData("text");
    const card = document.getElementById(cardId);
    const newList = event.target.closest('#list');
    newList.appendChild(card);
}
function handleKeyPress(event, listId) {
    if (event.key === 'Enter') {
        addCard(listId);
    }
}
function deleteCard(cardId) {
    const card = document.getElementById(cardId);
    card.remove();
}
