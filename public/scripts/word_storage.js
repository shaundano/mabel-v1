const MAX_TOTAL_CHARACTERS = 1000;  // Maintain a buffer of 1000 characters
let totalCharacters = 0;

function updateTable(content) {
    const tableBody = document.getElementById("wordStorageTable").getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    const newCellString = newRow.insertCell(0);
    const newTextString = document.createTextNode(content);
    newCellString.appendChild(newTextString);

    const newCellChars = newRow.insertCell(1);
    const newTextChars = document.createTextNode(content.length);
    newCellChars.appendChild(newTextChars);

    totalCharacters += content.length;

    // Remove rows if total characters exceed the limit
    while (totalCharacters > MAX_TOTAL_CHARACTERS) {
        const firstRow = tableBody.rows[0];
        const charsToRemove = parseInt(firstRow.cells[1].textContent, 10);
        totalCharacters -= charsToRemove;
        tableBody.deleteRow(0);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const textInputContainer = document.getElementById("textInputContainer");

    textInputContainer.addEventListener("paste", function(event) {
        const text = (event.clipboardData || window.clipboardData).getData('text');
        
        if (text) {
            // Update the table with the pasted text
            updateTable(text);
        }
    });
});