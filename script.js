

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


function sizeInsert() {
    rowsize = sizeInput.value;
    colsize = sizeInput.value;

    console.log(rowsize);
    console.log(colsize);
}


// The logic here is wrong and can cause some malicious insert.
function insertToVector() {
    colsize --;
    if (colsize >= 0) {
        console.log(vector.push(elementInput.value));
        elementInput.value = "";
    }
    else {
        console.log(matrix.push(vector));
        rowsize --;
        colsize = n
        if (colsize <= 0) {
            elementBtn.disabled = true;
        }
        colsize --;
        console.log(vector.push(elementInput.value));
        elementInput.value = ""
    }
    
}

function MatrixSolve() {
    
}


sizeBtn.addEventListener('click', sizeInsert);
elementBtn.addEventListener('click', insertToVector)
