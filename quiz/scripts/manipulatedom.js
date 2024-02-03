window.onload = function () {
    document.getElementById("addTableBtn").addEventListener("click", addTable);
};

function createTRNode(colNodes) {
    let trNode = document.createElement("tr");
    colNodes.forEach(function (colNode) {
        trNode.appendChild(colNode);
    });
    return trNode;
}

function createTDNode(childNode) {
    let tdNode = document.createElement("td");
    tdNode.appendChild(childNode);
    return tdNode;
}

function createTxtNode(txt) {
    let txtNode = document.createTextNode(txt);
    return txtNode;
}

function createBtnNode(btnText, btnTarget) {
    let btnNode = document.createElement("button");
    let textInput = document.createElement("input");
    textInput.setAttribute("placeholder", "Enter Cell (x,y) ...");
    btnNode.textContent = btnText;
    btnNode.addEventListener("click", () =>
        document.getElementById(btnTarget).replaceWith(textInput)
    );
    return btnNode;
}

function addTable() {
    const tableNode = document.createElement("table");
    for (let i = 0; i < 3; i++) {
        let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
        col1.setAttribute("id", `cell-${i}`);
        let col2 = createTDNode(createBtnNode("Edit text", `cell-${i}`));
        tableNode.appendChild(createTRNode([col1, col2]));
    }
    document.getElementById("root").appendChild(tableNode);
}
