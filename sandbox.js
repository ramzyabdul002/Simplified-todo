"use strict"

let addButton = document.querySelector('.button');
let inputPlaceholder = document.querySelector('.place-to-add');
let containerThatStore = document.querySelector('.newactivs');


addButton.addEventListener("click", function () {

  let userInput = inputPlaceholder.value;


  if (userInput.trim() !== "") {
    let newItem = document.createElement('li');

    newItem.textContent = userInput;

    let removeButton = document.createElement('button');

    removeButton.textContent = 'X';

    let itemWrapper = document.createElement('div');
    itemWrapper.appendChild(newItem);
    itemWrapper.appendChild(removeButton);

    itemWrapper.classList.add('list-wrapper');

    removeButton.addEventListener("click", function () {
      itemWrapper.remove();
    });

    containerThatStore.appendChild(itemWrapper);

    inputPlaceholder.value = "";

  } else {
    alert('Please enter item')
  }

});




// itemWrapper.classList.add('list-item');








/*

The line of code containerThatStore.appendChild(itemWrapper); is responsible for adding the itemWrapper (which contains both the item and the “remove” button) to the containerThatStore. Let’s break it down:

containerThatStore: This variable represents the container (usually an HTML element) where you want to display your list items and their corresponding “remove” buttons. It’s the parent element that will hold all the items.
itemWrapper: This is a new <div> element that you’ve created to group the list item (newItem) and the “remove” button (removeButton). By appending both the item and the button to this wrapper, you ensure that they stay together as a unit.
appendChild(itemWrapper): This method adds the itemWrapper (with the item and button inside it) as a child element of the containerThatStore. In other words, it places the entire wrapper within the specified container.
By doing this, you achieve the desired behavior: when you add a new item, it includes both the item text and the “remove” button, and they are displayed together in the container. When you click the “remove” button, the entire wrapper (including both the item and the button) is removed from the container.

Feel free to ask if you have any more questions or need further clarification!

*/


























