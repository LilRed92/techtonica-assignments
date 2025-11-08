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

/////////////////////

// Code for cupcake ingredients and instructions innerHTML
const cupcakeIngredients = document.getElementById('cupcakeIngredients');
cupcakeIngredients.innerHTML =
`<h4>Cupcake Ingredients</h4>
    <ul>
        <li>1 and 3/4 cups - all-purpose flour</li>
        <li>3/4 cup - unsweetened cocoa powder</li>
        <li>1 and 3/4 cups - granulated sugar</li>
        <li>2 tsp - baking soda</li>
        <li>1 tsp - baking powder</li>
        <li>1 tsp - salt</li>
        <li>2 tsp - espresso powder</li>
        <li>1/2 cup - vegetable oil (canola oil or melted coconut oil)</li>
        <li>2 large eggs (room temperature)</li>
        <li>2 tsp - pure vanilla extract</li>
        <li>1 cup - buttermilk (room temperature) ** Note</li>
        <li>1 cup - strong <strong>HOT</strong> coffee</li>
    </ul>`;

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
});

const cupcakeInstructions = document.getElementById('cupcakeInstructions');
cupcakeInstructions.innerHTML =
`<h4>Cupcake Instructions</h4>
<ol>
    <li>Preheat oven to 350°F and place cupcake cups in the tin(s).</li>
    <li>Wisk all of your dry ingredients (flour, cocoa, sugar, baking soda & powder, salt, and espresso) in a large bowl and set aside.</li>
    <li>Using a hand mixer, mix oil, eggs, and vanilla together until well incorporated.</li>
    <li>Add the buttermilk and mix until combined.</li>
    <li>Pour wet ingredients into the dry ingredients and carefully mix just until it gets a bit cakey.</li>
    <li>Pour hot coffee in and carefully mix until the batter until there are no clumps. *Batter will be very runny!</li>
    <li>Fill the cupcake tin(s) and bake for 15 minutes, checking every 5 minutes after if not fully cooked.</li>
    <li>Place cupcakes somewhere to cool.</li>
</ol>`;

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
