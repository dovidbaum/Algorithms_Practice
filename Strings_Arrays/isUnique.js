/* problem: given a string, determine if all charachters are unique
   running time: O(n), space: O(n)
*/

/*
solutions 1: initialize a set then iterate checking if in set - O(n)
solution 2: compare each index with the rest of the array - O(n^2)
solution 3: sort then see if i=i+1 - O(nlogn) does not use any extra memory
*/
/*
ex1: let word = "abbc"
ex2: let word = "abc"
ex3: let word = "cbab"
*/
let word = "cbab";
console.log(isUnique(word));


function isUnique(word){
    let set = new Set();
    for(let i = 0; i< word.length;i++){
        if(set.has(word.charAt(i))){
            return false;
        }else{
            set.add(word.charAt(i));
        }
    }
    return true;
}