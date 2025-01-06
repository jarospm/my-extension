let myLinks = [];

const saveBtn = document.getElementById("input-btn");

saveBtn.addEventListener("click", function() {
    saveInput()
    renderLinks()
    console.log(myLinks);
});

// INPUT
const inputFld = document.getElementById("input-el");

function saveInput() {
    myLinks.push(inputFld.value);
    inputFld.value = "";
}

// OUTPUT
const outputLst = document.getElementById("ul-el");

function renderLinks() {
    let listItems = "";
    for (let i = 0; i < myLinks.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href="${myLinks[i]}">${myLinks[i]}</a>
            </li>
        `
    }
    outputLst.innerHTML = listItems
}

