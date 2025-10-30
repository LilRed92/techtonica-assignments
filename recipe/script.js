const toppingInput = document.getElementById('toppingInput');
const button = document.getElementById('addTopping');
const toppingsList = document.getElementById('toppings')

button.addEventListener('click', function() {
    newItemText = toppingInput.value.trim();
    const newListItem = document.createElement('li');
    newListItem.textContent = newItemText;
    toppingsList.appendChild(newListItem);
    toppingInput.value = '';
})
