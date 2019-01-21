/* problem: given two strings, determine if one is a permutation of the other. permutation means
one can be reordered to be the other
   running time: O(n), space: O(n)
*/
/*
ex1:
let word1 = "racecar"
let word2 = "cecarar"
output: true
ex2:
let word1 = "foood"
let word2 = "doof"
output: false
ex3:
let word1 = "ab"
let word2 = "bab"
output: false
ex4:
let word1 = "abb"
let word2 = "bab"
output: true
*/
let word1 = "racecar";
let word2 = "cecarar";
console.log(isPermutation(word1,word2));



function isPermutation(word1,word2){
    // handle simple case, if not same length then not permutation
    if(word1.length !== word2.length){
        return false;
    }else{
        let hash = {};
        for(let i = 0; i< word1.length; i++){
            if(hash[word1.charAt(i)] != null){
                hash[word1.charAt(i)]++;
            }else{
                hash[word1.charAt(i)] = 1;
            }
        }
        for(let i = 0; i< word2.length; i++){
            if(hash[word2.charAt(i)] != null){ //if in the dictionary
                if(hash[word2.charAt(i)] < 0){ // if an extra of that letter in b
                    return false;
                }else {
                    hash[word2.charAt(i)]--;
                }
            }else{ // if a letter in b does not exist in a
                return false;
            }
        }
        return true;
    }

}