

let matrix = [];
let vector = [];
let rowsize;
let colsize;
let determinant;
let resultHTML;

const sizeBtn = document.getElementById("size-btn");
const elementBtn = document.getElementById("element-btn");
const sizeInput = document.getElementById("size-fld");
const elementInput = document.getElementById("element-fld");
const solveBtn = document.getElementById("solve-btn");
const selectOption = document.getElementById("prop");
solveBtn.disabled = true;
elementBtn.disabled = true;

// fix: the logic of sizeInsert
function sizeInsert() {
    rowsize = Number(sizeInput.value);
    colsize = rowsize;

    if (!Number.isInteger(rowsize) || rowsize <= 0) {
        alert('Please enter a positive integer for the matrix size.');
        return;
    }

    matrix = [];
    vector = [];
    sizeBtn.disabled = true;
    elementBtn.disabled = false;
    solveBtn.disabled = true;
    sizeInput.value = "";
    console.log(rowsize + ": the row size is added");
    console.log(colsize + ": the column size is added");
}

function insertToVector() {
    const raw = elementInput.value.trim();
    const value = raw === '' ? 0 : Number(raw);

    vector.push(value);
    elementInput.value = '';
    console.log(value + ": is inserted in [" + vector + "] " + vector.length);

    if (vector.length === colsize) {
        vectorReseter();
    }
}

//fixed the logic of this function
function vectorReseter() {
    console.log("Reset function activated!");

    if (matrix.length < rowsize && vector.length === colsize) {
        matrix.push([...vector]);
        console.log("matrix is inserted", matrix);
        vector = [];
    }

    if (matrix.length === rowsize) {
        console.log("matrix is complete");
        elementBtn.disabled = true;
        solveBtn.disabled = false;
    }
}

// Computes the determinant using LU-style elimination to avoid deep recursion.
function Determinant(mat) {
  const n = mat.length;
  if (n === 0) return 0;

  // Validate matrix is square and numeric
  for (let i = 0; i < n; i++) {
    if (!Array.isArray(mat[i]) || mat[i].length !== n) {
      throw new Error('Determinant requires a square matrix');
    }
  }

  const matrixCopy = mat.map(row => row.map(value => Number(value)));
  let det = 1;

  for (let i = 0; i < n; i++) {
    // Find pivot row
    let pivot = i;
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(matrixCopy[j][i]) > Math.abs(matrixCopy[pivot][i])) {
        pivot = j;
      }
    }

    if (Math.abs(matrixCopy[pivot][i]) < Number.EPSILON) {
      return 0;
    }

    if (pivot !== i) {
      [matrixCopy[i], matrixCopy[pivot]] = [matrixCopy[pivot], matrixCopy[i]];
      det *= -1;
    }

    det *= matrixCopy[i][i];

    for (let j = i + 1; j < n; j++) {
      const factor = matrixCopy[j][i] / matrixCopy[i][i];
      for (let k = i; k < n; k++) {
        matrixCopy[j][k] -= factor * matrixCopy[i][k];
      }
    }
  }

  return det;
}

function Rank() {

}




sizeBtn.addEventListener('click', sizeInsert);
elementBtn.addEventListener('click', insertToVector)
elementBtn.addEventListener('click', vectorReseter)
//fixed: added dynamix html
solveBtn.addEventListener('click', () => {
    determinant = Determinant(matrix);
    resultHTML = document.createElement('p');
    resultHTML.textContent = "The determinant is: " + determinant;
    document.getElementById("resultDiv").appendChild(resultHTML);
    console.log(determinant);
})
