function addJob() {
    
    const oldDiv = document.getElementById("we");
    const addWork = document.getElementById("addWorkBtn");

    // console.log(Div);
    // console.log(addWork);

    const newDiv = document.createElement('div');
    newDiv.innerHTML = document.getElementById("workField").innerHTML;
    newDiv.classList.add("input");
    newDiv.setAttribute("style", "margin-top: 30px;");

    const newBtn = document.getElementById("remBtn");
    newBtn.classList.add("removeBtn");
    newBtn.setAttribute("style", "display:block;");


    function addToBeginning(parent, toInsert) {
        const secondChild = parent.querySelector("#addWorkBtn");
        parent.insertBefore(toInsert, secondChild);

    }

    addToBeginning(oldDiv, newDiv);
    
    
}