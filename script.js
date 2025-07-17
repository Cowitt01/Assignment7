
/*
Cory Witt
script.js
INFO 1579
Shaw
07/22/2025
*/

"use strict";

// Franz's Liszt's List program will allow the user to manage a list of items.
// The user can add items to the list, verify that the input is not empty, 
// not a duplicate, and that the list does not exceed 6 items.
 
$(document).ready(() => {  // when the document is ready, set up the event listeners
    $("#addItemToList").click(() => {  // when the add button is clicked, verify the user input, build the list, and refocus the input
       verifyUserInput();   // verify the user input
       buildList();         // build the list from the temporary array
       refocusInput();      // refocus the input field
  });

  $("#clearList").click(() => { // clear the list and build it
    clearList();                // clear the list and input field
    refocusInput();             // refocus the input field
  });
});

 
const tmpListArray = [];        // create a temporary array to hold the list items
const listArrayLowerCase = [];  // create an empty array to hold the list items in all caps for comparison

function verifyUserInput() { //this function will verify the user input to see if it is empty, duplicate in the existing list, and no more than 6 entries are present in the list.

    if (tmpListArray.length >= 6) { // check to see if the list is full, no more than 6 items can be added
      alert(
        "The list is full. Franz liszt's list can only hold 6 items."
      );
    } else if ($("#listItemInput").val().trim() === "") {   // check to see if the user's input is empty
      alert(    
        "List item cannot be empty. Please correct your input."
      );
    } else if (listArrayLowerCase.includes($("#listItemInput").val().trim().toLowerCase())) {   //check to see if the input is a duplicate (case insensitive by converting to lower case)
      alert("List Item " + $("#listItemInput").val().trim() + " is a duplicate. Please enter a different value."); 
    } else {
        tmpListArray.push($("#listItemInput").val().trim());                                  // add the input to the temporary array
        listArrayLowerCase.push($("#listItemInput").val().trim().toLowerCase());              // add the input to the listArrayLowerCase array in lower case for comparison
    }
}

function buildList() { // this function will build the list from the temporary array (tmpListArray) and display it to the user ("#listItemsHolder")
  let listHTML = "";
  for (let i = 0; i < tmpListArray.length; i++) {   // loop through the temporary array and build the list in HTML
    listHTML += `<li>${tmpListArray[i]}</li>`;
  }
  $("#listItemsHolder").html(listHTML);
}

function clearList() {   //clear the array lists and build the list in HTML.
    tmpListArray.length = 0;           // clear the temporary array(tmpListArray)
    $("#listItemsHolder").html("");    // clear the HTML list display
    $("#listItemInput").val("");       // clear the input field
    listArrayLowerCase.length = 0;     // clear the case insensitive array
    buildList();                       // rebuild the list to show it is empty
}

function refocusInput() {                   // refocus the input
    $("#listItemInput").val("").focus();    // clear the input and focus it

}

 