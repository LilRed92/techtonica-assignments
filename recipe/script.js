//Code for adding items to a list
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

//Code for adding checkboxes to cupcake ingredients list items
const cupcakeListItems = document.querySelectorAll('#cupcakeIngredients li');

cupcakeListItems.forEach((li, index) => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = `item-${index}`;
    checkbox.id = `checkbox-${index}`;
    li.prepend(checkbox);
    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
             li.classList.add('checked');
        } else {
            li.classList.remove('checked');
        }
    })
})

//Code for adding checkboxes to filling ingredients list items
const fillingListItems = document.querySelectorAll('#fillingIngredients li');

fillingListItems.forEach((li, index) => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = `item-${index}`;
    checkbox.id = `checkbox-${index}`;
    li.prepend(checkbox);
    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
             li.classList.add('checked');
        } else {
            li.classList.remove('checked');
        }
    })
})

//Code for adding checkboxes to icing ingredients list items
const icingListItems = document.querySelectorAll('#icingIngredients li');

icingListItems.forEach((li, index) => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = `item-${index}`;
    checkbox.id = `checkbox-${index}`;
    li.prepend(checkbox);
    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
             li.classList.add('checked');
        } else {
            li.classList.remove('checked');
        }
    })
})

