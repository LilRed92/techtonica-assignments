// Code for adding items to a list
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

// Code for adding checkboxes to cupcake ingredients list items
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

// Code for adding checkboxes to filling ingredients list items
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

// Code for adding checkboxes to icing ingredients list items
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


// Code for tabs and their content to show on small screens
function openRecipe(evt, recipeName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(recipeName).style.display = "block";
  evt.currentTarget.className += " active";
}
