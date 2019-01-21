/* Problem: Given two sorted arrays, where A has enough buffer space to hold B, sort the two in sorted order
   Complexity: O(n)
*/
/* ex1:
let A = [2,3,5,6,8,10,null,null,null,null];
let B = [1,3,6,9];
ex2:
let A = [2,3,null];
let B = [1];
ex3:
let A = [2,3,null,null,null];
let B = [1,2,2];
*/
let A = [2,3,5,6,8,10,null,null,null,null];
let B = [1,3,6,9];
let aSize = A.filter(function(value) { return value !== null }).length;
console.log(sortedMerge(A,B,aSize));

/*main idea: start at end of both Arrays, whichever is larger place at the end of A. Decrement
    pointer of array you just took from
  Complexity: O(n)
 */
function sortedMerge(A,B,aSize){
    console.log(A)
    console.log(B)
    console.log(aSize);
    let aCurr = aSize-1  //get index of last non null value in A
    let open = A.length-1 // get index of last value in A
    let bCurr = B.length-1 // get index of last value in B

    // iterate through full length of A
    for(let i = A.length; i>0; i--){
        console.log(aCurr + " " + bCurr + " " + open + " " + i)

        // bCurr will be less than 0 when there are no more values to compare
        if(bCurr < 0){
            return A;
        // if A is larger than place A in first open space
        }else if(aCurr >= 0 && A[aCurr] > B[bCurr]){
            A[open] = A[aCurr];
            aCurr--;
            open--;
         // if equal place both in next two open spaces
        }else if(aCurr >= 0 && A[aCurr] == B[bCurr]){
            A[open] = A[aCurr];
            A[open-1] = B[bCurr];
            open -= 2;
            aCurr--;
            bCurr--;
        // else place B in next open space
        }else{
            A[open] = B[bCurr];
            bCurr--;
            open--;
        }
    }
    return A;
}