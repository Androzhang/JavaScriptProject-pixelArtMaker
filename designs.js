//loop over to build grid
function makeGrid(row, column) {
    const $canvas = document.getElementById("pixelCanvas");
    $canvas.innerHTML = "";
    for (let i = 0; i < row; i ++) {
        let newRow = $canvas.insertRow();
        for (let j = 0; j < column; j ++) {
            let newCell = newRow.insertCell();
            newCell.onclick = fillColor;
            newCell.ondblclick = eraseColor;
        }
    }
}

//build default grid
makeGrid(20,20);

//get size input and build customized grid
document.getElementById("sizePicker").addEventListener("submit", function(event){
    event.preventDefault();
    let row = document.getElementById("inputHeight").value;
    let column = document.getElementById("inputWidth").value;
    makeGrid(row, column);
});    

//fill color
function fillColor() {
    const favColor = document.getElementById("colorPicker").value;
    this.style.background = favColor;
}

//erase color
function eraseColor() {
    this.style.background = '#fff';
}







