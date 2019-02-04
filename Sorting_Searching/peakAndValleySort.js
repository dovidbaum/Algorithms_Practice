/* Sort an array so that it is sorted in an alternating sequence of 'peaks' and 'valleys'
A 'peak' is greater or equal to adjacent numbers, A 'valley' is less than or equal to adjacent numbers
*/
/* ex1:
let arr = [2,3,5,6,8];
ex2:
let arr =  [3, 6, 5, 10, 7, 20]
ex3:
let arr =  [10, 5, 6, 3, 2, 20, 100, 80,3253452,0,234234]
ex4:
let arr =  [20, 10, 8, 6, 4, 2]
ex5:
let arr =  [2, 4, 6, 8, 10, 20,40,80,160]

*/
/* idea 1: sort in O(nlogn) then take from each half in O(n)
   idea 2: Think about the different ways to make and peak and a valley
   0,1,2
   0,2,1 //peak
   1,0,2 //valley
   2,1,0
   2,0,1 //valley
   A peak is made by ensuring the middle element is the largest of the 3
   A valley is made by ensuring the middle element is the smallest of the 3
   Why don't I iterate ensuring this property holds - O(n)
   added note: instead of doing valleys and peaks I could have just done one nad incremented by 2
 */
let arr = [10, 5, 6, 3, 2, 20, 100, 80,3253452,0,234234];
console.log(arrToValleyPeaks(arr));
function arrToValleyPeaks(arr){
    console.log(arr);
    let i = 1;
    let left, middle, right;
    let findPeak = true;
    while(i < arr.length-1){
        if(findPeak){
            getPeak(arr,i-1,i,i+1);
            findPeak = false;
        }else{
            getValley(arr,i-1,i,i+1);
            findPeak = true;
        }
        i++;
    }
    return arr;
}
function getValley(arr,left,middle,right){
    // if left is smallest swap left and middle
    if(arr[left] < arr[middle] && arr[left] < arr[right]){
        swap(arr,left,middle);
    }
    // if right is smallest then swap right and middle
    if(arr[right] < arr[middle] && arr[right] < arr[left]){
        swap(arr,right,middle);
    }
    // if middle is smallest do nothing
}
function getPeak(arr,left,middle,right){
    // if left is largest then put right in the middle
    if(arr[left] > arr[middle] && arr[left] > arr[right]){
        swap(arr,left,middle);
    }
    // if right is largest then pur right in the middle
    if(arr[right] > arr[middle] && arr[right] > arr[left]){
        swap(arr,right,middle);
    }
    // if middle is Largest do nothing
}


function swap(arr,i,k){
    let temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
}