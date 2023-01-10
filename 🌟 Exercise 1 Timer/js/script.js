//Part I

/**
 * @description: this function call alerte
 */
function hello() {
  alert("Hello World!");
}

// Call hello function after 2 second
setTimeout(hello, 2000);

//Part II

//Get div container
let div = document.getElementById("container");

//Initial var
let compte = 0;

/**
 * @description: this function add new paragraph on div
 * @returns: void
 */
function putMessage() {
  let newParagraphe = document.createElement("p");
  let paragrapheContent = document.createTextNode('Howdy Everybody!')
  newParagraphe.appendChild(paragrapheContent);
  div.appendChild(newParagraphe);
 
  if (compte == 5) {
    clearInterval( pAdd);
  }

  compte++;
}

setTimeout(putMessage, 2000);

//Part III
let btn = document.getElementById("clear");

btn.addEventListener("click", stop);

function stop() {
  clearInterval( pAdd );
}

let pAdd = setInterval(putMessage, 2000);
