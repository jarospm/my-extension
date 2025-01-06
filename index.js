let myLinks = [];

const saveBtn = document.getElementById("input-btn");

saveBtn.addEventListener("click", function() {
    saveInput()
    renderLinks()
});

// INPUT
const inputFld = document.getElementById("input-el");

function saveInput() {
    myLinks.push(inputFld.value);
    console.log(myLinks);
}

// OUTPUT
const outputLst = document.getElementById("ul-el");


function renderLinks() {
    let listItems = "";

    for (let i = 0; i < myLinks.length; i++) {    
        listItems += "<li>" + myLinks[i] + "</li>";
    }

    outputLst.innerHTML = listItems
}

