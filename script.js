function sayhello (){
    let myname = prompt("как тебя зовут?");
    let span = document.querySelector('span');
    span.textContent = myname;
}

let button = document.querySelector('button');
button.onclick(sayhello());