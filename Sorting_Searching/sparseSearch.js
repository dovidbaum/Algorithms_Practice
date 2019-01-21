/* Problem: given a sorted array of strings that is interspersed with empty strings, write a method to find
the location of a given String
    Complextiy: O(logn)
 */
/*
ex1:
let arr = ["at","-","-","-","ball","-","-","car","-","-","mom","-","-","-"];
let x = "ball";
ex2:
let arr = ["at","-","-","-","ball","-","-","car","-","-","mom","-","-"];
let x = "mom";
ex3:
let arr = ["at","-","-","-","ball"];
let x = "at";
ex4:
let arr = ["-","-","-","-","-","at"];
let x = "at";
*/
let arr = ["at","-","-","-","ball","-","-","car","-","-","mom","-","-","-"];
let x = "ball";
let n = arr.length-1;
console.log("searching for: "+ x);
console.log(sparseSearch(arr,Math.floor(n/2),x,0,n));

// returns index of x in a sparsed array
function sparseSearch(arr,curr,x,min,max){
    //base case
    if(arr[curr] === x){
        return curr;
    }else{
        let goLeft;
        let goRight;
        // attempt to do normal binary search
        if(arr[curr] !== "-"){
            if(x < arr[curr]){
              return sparseSearch(arr,Math.floor(curr/2),x,min,curr-1);
            }else{
               return  sparseSearch(arr,Math.floor(curr + curr/2),x,curr+1,max);
            }
        }else {
            goLeft = curr - 1;
            goRight = curr + 1;
            while ((arr[goLeft] === "-" && arr[goRight] === "-") && goLeft > min) {
                goLeft--;
                goRight++;
            }
        }
        //check value from while loop
        if(arr[goLeft] !== "-"){ // goLeft equals a value
            // base case
            if(arr[goLeft] === x){
                return goLeft;
            }else if(x < arr[goLeft]){ // recusively check left half of array
               return sparseSearch(arr,Math.floor(curr/2),x,min,curr);
            }else{ // recusively check right half of array
                return sparseSearch(arr,Math.floor(curr + curr/2),x,curr,max);
            }
        }else if(arr[goRight] !== "-"){
            // base case
            if(arr[goRight] === x){
                return goRight;
            }else if(x < arr[goRight]){ // recusively check left half of array
                return sparseSearch(arr,Math.floor(curr/2),x,min,curr);
            }else{ // recusively check right half of array
                return sparseSearch(arr,Math.floor(curr + curr/2),x,goRight+1,max);
            }
        }else{ //edge case where goRight did not search it's last value
            return goRight+1
        }
    }
}
