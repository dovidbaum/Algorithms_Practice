//TODO x    
/* problem: return the original string with repeated characters compressed to be one character then count
   running time: O(n)
 */
/*
ex1:
let str ="kkmpppppkkk"
output: k2m1p5k3
ex2:
let str = "abc"
output: a1b1c1
ex3:
let str = "aaac"
output: a3c1
ex4:
let str = "cbaaaaaaaaaa"
output: c1b1a10
*/
let str = "kkmpppppkkk";
console.log(compressRepeatedCharacters(str));

function compressRepeatedCharacters(str){
    let currStart = 0;
    let currEnd = 0;
    let currLetter;
    let nextLetter = str[0];
    let nextCount = 1;
    for(let i = 0; i< str.length;i++){
        if(str[i] === str[i+1]){ //same letter
            nextCount++;
            currEnd++;
        }else{ // different letter
            nextLetter = str[i+1];
            currStart = i+1;
            currEnd = i+1;
        }
    }
}