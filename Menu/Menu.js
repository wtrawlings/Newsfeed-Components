/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
    'Students',
    'Faculty',
    "What's New",
    'Tech Trends',
    'Music',
    'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.
*/
const createMenu = array => {
    const div = document.createElement('div');
    div.classList.add('menu');

    const ul = document.createElement('ul');

    const lis = [];
    let li;
    //we moved let LI out of the function so it doesn't have to be 
    //remade every time we do this- it happens once
    for (let i = 0; i < array.length; i++) {
        li = document.createElement('li');
        li.textContent = array[i];
        lis.push(li);
    }

    lis.forEach(listItem => ul.appendChild(listItem));
    div.appendChild(ul);
    //here is the other way
    // ul.append(...lis);
    //div.appendChild(ul);

    return div;
}
console.log(createMenu(menuItems))

const menu = createMenu(menuItems);

document.querySelector('.header').append(menu);

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', event => {
    event.preventDefault();
    menu.classList.toggle('menu--open')

})



/*
  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/