

let matrix = [[]];
let vector = [];
let rowsize;
let colsize;
let isVectorFull = false;
const n = rowsize;

const sizeBtn = document.getElementById("size-btn");
const elementBtn = document.getElementById("element-btn");
const sizeInput = document.getElementById("size-fld");
const elementInput = document.getElementById("element-fld");
const solveBtn = document.getElementById("solve-btn");
solveBtn.disabled = true;
elementBtn.disabled = true;


function sizeInsert() {
    rowsize = sizeInput.value;
    colsize = sizeInput.value;

    console.log(rowsize + ": the row size is added");
    console.log(colsize + ": the column size is added");
    sizeBtn.disabled = true;
    elementBtn.disabled = false;
}


// The logic here is wrong and can cause some malicious insert.
function insertToVector() {
    const value = elementInput.value.trim();

    if (!value) {
        vector.push(0); 
    } else {
        vector.push(elementInput.value);
    }
    console.log(value + ": is inserted in [" + vector + "] " + vector.length);
}

function vectorReseter() {
    console.log("Reset function activated!");
    if (matrix.length <= rowsize) {
        console.log("I reached here " + colsize);
        if (vector.length == colsize) {
            matrix.push(vector);
            console.log("matrix is inserted" + matrix);
            vector = [];
        }
    } else {
        console.log("matrix is complete");
        elementBtn.disabled = true;
    }
}

function MatrixSolve() {
    
}


sizeBtn.addEventListener('click', sizeInsert);
elementBtn.addEventListener('click', insertToVector)
elementBtn.addEventListener('click', vectorReseter)
