/* problem: Given an MxN matrix in which each row and each column is sorted in ascending order, write a method to find an element.
 */
/*
ex1:
let toFind = 7;
let twoD = [];
twoD.push([1,2,4,7]);
twoD.push([2,3,6,10]);
twoD.push([3,5,8,11]);
twoD.push([4,8,9,2]);
ex2:
let toFind = 7;
let twoD = [];
twoD.push([1,2,4,98]);
twoD.push([2,6,12,99]);
twoD.push([3,7,13,10001]);
twoD.push([4,20,109,10002]);
*/
/*
idea1: iterate each row and column - O(n^2)
idea2: Do Binary search in each row, iterate column by column
idea3: THIS IS THE ONE I IMPLEMENTED - go through diagonal comparing toFind - O(n)
idea4: BST through diagonal - O(log(n))
*/
let toFind = 7;
let twoD = [];
twoD.push([1,2,4,98]);
twoD.push([2,6,12,99]);
twoD.push([3,7,13,10001]);
twoD.push([4,20,109,10002]);
sortedMatrixSearch(twoD,toFind)
function sortedMatrixSearch(matrix,toFind){
    let curr;
    let k = matrix[0].length-1;
    let i = 0;
    // starting at top right corner
    while(true){
        curr = matrix[i][k];
        if(curr == toFind){
            console.log("index: "+i+","+k);
            return;
        }
        // if toFind is less than start of column, then toFind is to left of column
        if(toFind < matrix[i][k]){
            k--;
        }
        // if toFind is larger than end of a row, then toFind is below that row
        if(toFind > matrix[i][k]){
            i++;
        }
        // ensure not out of bounds
        if(i < 0 || k < 0){
            return -1;
        }
    }
}