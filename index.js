// remove main element
let element = document.querySelector("main#main"); 
element.remove();

let newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = 'Stefanie is the champion';
