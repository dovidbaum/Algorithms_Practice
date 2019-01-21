/* Problem: Given two strings, determine if they are one or zero edits away from being the same string. An
            edit can be an inserting a character, removing a character, or replacing a character
   complexity: O(n)
 */
/*
ex1:
let A = "ball";
let B = "bal";
output: true
ex2:
let A = "balls";
let B = "ball";
output: true
ex3:
let A = "bell";
let B = "ball";
output: true
ex4:
let A = "belt";
let B = "ball";
output: false
ex5:
let A = "bealle";
let B = "bell";
output: false
ex6:
let A = "bel";
let B = "bells";
output: false
*/
let A = "belt";
let B = "ball";
console.log("answer: "+isOneEditAway(A,B));

// return true if two strings are zero or one edit away from each other
function isOneEditAway(A,B){
    if(A === B){ // simple case: if two strings are the same, return true
        return true;
    }else if(A.length === B.length){ //if same length check if one character can be REPLACED
        let differentCount = 0;
        for(let i = 0; i< A.length;i++){
            if(A[i] !== B[i]){
                differentCount++;
            }
        }
        if(differentCount > 1){
            return false;
        }else{
            return true;
        }
    }else{ //check which one is larger for REMOVAL and INSERTION
        let larger;
        let smaller;
        if(A.length - B.length == 1){ // A is larger by one
            larger = A;
            smaller = B;
        }else if(B.length - A.length == 1){ //B is larger by one
            larger = B;
            smaller = A;
        }else{ //they are more than one apart and therefore need more than one edit
            return false;
        }
        let l = 0;
        let s = 0;
        let differentCount = 0;
        while(l <= larger.length){
            if(larger[l] !== smaller[s]){
                l++;
                differentCount++;
            }else{ // larger[l] === smaller[s]
                l++;
                s++;
            }
        }
        if(differentCount > 1){
            return false;
        }else{
            return true;
        }

    }

}