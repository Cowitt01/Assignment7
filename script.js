
/*
Cory Witt
script.js
INFO 1579
Shaw
07/22/2025
*/

"use strict";
// This script handles the creation and management of a list of items.
// It allows users to add items to the list, clear the list, and ensures that the list does not exceed a certain number of items.
// It also checks for duplicate entries and provides user feedback through alerts.

//wait for everything to load before executing this here code
$(document).ready(() => {
    $("#addItemToList").click(() => {
       verifyInput();
       buildList();
       refocusInput();
  });

  $("#clearList").click(() => { // clear the list and build it
    clearList();
    refocusInput();
  });
});


//ADD YOUR CODE BELOW
const listArray = []; // create an empty array to hold the list items
const listArrayCaps = []; // create an empty array to hold the list items in all caps for comparison

function verifyInput() { // check to see if the input is valid
    const itemToAdd = $("#listItemInput").val().trim();
    if (listArray.length >= 6) { // check to see if the list is full
      alert(
        "Error! Franz liszt's list is full. Franz liszt's list can only hold 6 items."
      );
    } else if (itemToAdd === "") { // check to see if the input is empty
      alert(
        "Error! Franz liszt's list item cannot be empty. This is unacceptable. Franz liszt demands you correct his list!."
      );
    } else if (listArrayCaps.includes(itemToAdd.toUpperCase())) { // check to see if the input is a duplicate
      alert("Error! You are attempting to enter a duplicate value.");
    } else { // add the item to the list and build it
        listArray.push(itemToAdd);
        listArrayCaps.push(itemToAdd.toUpperCase());
    }
}

function buildList() { // take the listArray and build the html <li>
  let listHTML = "";
  for (let i = 0; i < listArray.length; i++) {
    listHTML += `<li>${listArray[i]}</li>`;
  }
  $("#listItemsHolder").html(listHTML);
}

function clearList() { //clear the list and build it
    listArray.length = 0;
    listArrayCaps.length = 0;
    buildList();
}

function refocusInput() { // refocus the input
    $("#listItemInput").val("").focus(); // clear the input and focus it
}

 