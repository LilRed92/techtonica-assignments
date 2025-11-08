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

/////////////////////

// Code for filling ingredients and instructions innerHTML
const fillingIngredients = document.getElementById('fillingIngredients');
fillingIngredients.innerHTML =
`<h4>Filling Ingredients</h4>
<ul>
    <li>3 large egg <strong>whites</strong> (room temperature)</li>
    <li>1/2 tsp - cream of tartar</li>
    <li>3/4 cup - corn syrup or honey</li>
    <li>3/4 cup - granulated sugar</li>
    <li>1/3 cup - water</li>
    <li>1 tsp - vanilla extract</li>
</ul>`;

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
});

const fillingInstructions = document.getElementById('fillingInstructions');
fillingInstructions.innerHTML =
`<h4>Filling Instructions</h4>
<ol>
    <li>Ensure the bowl and wisk of stand mixer are clean, dry, and completely grease free. Add egg whites and cream of tartar to bowl.</li>
    <li>Add sugar, water, and corn syrup/honey to medium sauce pan on medium heat and wisk until sugar has dissolved. Insert a candy thermometer.</li>
    <li><strong><b>IMPORTANT!</b></strong> Do not wisk after sugar has dissolved and mixture begins to bubble. This will cause sugar to crystalize.</li>
    <li>Let mixture simmer until thermometer reads 240°F then remove from heat.</li>
    <li>Turn the stand mixer on to medium speed and whip egg whites and cream of tartar until soft peaks are achieved.</li>
    <li>While mixer is still running, slowly pour the heated sugar mixture into the egg whites, using the side of the bowl to cool the sugar as you pour.</li>
    <li>Once all of the sugar mixture is poured in, increase the speed of the mixter and beat until it is thick, glossy, and doubles in size.</li>
    <li>Add vanilla and continue to beat until the fluff has cooled then place in the refridgerator.</li>
    <li>Take cooled cupcakes and using scissors, cut a small hole in the cupcake cups on one side.</li>
    <li>Take a sturdy drinking straw and hollow out each cupcake using the previous hole you cut in the cup.</li>
    <li>Get a piping bag (with or without a tip, but ensuring it is small enough to fit into cupcake hole) add filling to bag.</li>
    <li>Push tip of piping bag into each cupcake and fill until you barely see cupcake begin to expand.</li>
</ol>`;

/////////////////////

// Code for icing ingredients and instructions innerHTML
const icingIngredients = document.getElementById('icingIngredients');
icingIngredients.innerHTML =
`<h4>Icing Ingredients</h4>
<ul>
    <li>8 oz - at least 70% cacao (I use chips, but you could use baking bars.)</li>
    <li>1 cup - heavy cream</li>
    <li>A couple of Tbsp of corn syrup or honey</li>
</ul>`;

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
});

const icingInstructions = document.getElementById('icingInstructions');
icingInstructions.innerHTML =
`<h4>Icing Instructions</h4>
<ol>
    <li>Once the cupcakes have cooled and been filled.</li>
    <li>Chop the chocolate (unless using small chips) and place in a heatproof bowl. Add in honey or corn syrup.</li>
    <li>In a small - medum sauce pan heat the heavy cream until just before it boils then pour over chocolate.</li>
    <li>Let chocolate and heavy cream sit, covered, for 5 minutes then mix with a wisk.</li>
    <li>Dip filled cupcakes into the chocolate icing, using a spatula to smooth the top.</li>
    <li>Using leftover filling and piping bag, decorate the top with loops.</li>
</ol>`;


/////////////////////

// Code for tabs and their content to show on small screens
function openRecipe(evt, recipeName) {
  // Declare all variables
  let i, tablinks;


  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  recipeContent = document.getElementById(recipeName)
  evt.currentTarget.className += " active";
    
  if (recipeName === 'Cupcake') {

    cupcakeIngredients.classList.remove('hide-on-small');
    cupcakeInstructions.classList.remove('hide-on-small');

    fillingIngredients.classList.add('hide-on-small');
    fillingInstructions.classList.add('hide-on-small');

    icingIngredients.classList.add('hide-on-small');
    icingInstructions.classList.add('hide-on-small');

  } else if (recipeName === 'Filling') {
    
    fillingIngredients.classList.remove('hide-on-small');
    fillingInstructions.classList.remove('hide-on-small');

    cupcakeIngredients.classList.add('hide-on-small');
    cupcakeInstructions.classList.add('hide-on-small');

    icingIngredients.classList.add('hide-on-small');
    icingInstructions.classList.add('hide-on-small');

  } else {

    icingIngredients.classList.remove('hide-on-small');
    icingInstructions.classList.remove('hide-on-small');

    cupcakeIngredients.classList.add('hide-on-small');
    cupcakeInstructions.classList.add('hide-on-small');

    fillingIngredients.classList.add('hide-on-small');
    fillingInstructions.classList.add('hide-on-small');
  }
  
};