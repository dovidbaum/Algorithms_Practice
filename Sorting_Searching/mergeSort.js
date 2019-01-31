/* Implementation of MergeSort algorithm */
// complexity: O(nlogn) time, O(n) space
// ex1: let arr = [10,5,2,7,4,9,12,1,8,6,11,13];
// ex2: let arr = [10,5,2,7,4,9];
// ex3: let arr = [12,1,8,6,11,13];
// ex4:
let arr = [54,26,93,17,77,31,44,55,20,100008,0,18,24234634753,43];
console.log(mergeSort(arr));
function mergeSort(arr){
    // pass to helper method the left and right starting points and temp array to copy elements into during merge
   return mergeSortAux(arr,0,arr.length-1,[]);
}
function mergeSortAux(arr,leftStart,rightEnd,newArr){
    // base case: if out of bounds then return
    if(leftStart >= rightEnd){
        return;
    }
    // else merge the left and right half
    let midIndex = Math.floor((leftStart + rightEnd)/2);
    mergeSortAux(arr,leftStart,midIndex,newArr);
    mergeSortAux(arr,midIndex+1,rightEnd,newArr);
    return mergeHalves(arr,leftStart,rightEnd,newArr);
}
function mergeHalves(arr,leftStart,rightEnd,newArr){
    let leftEnd = Math.floor(((leftStart + rightEnd)/2));
    let rightStart = leftEnd+1;

    let left = leftStart;
    let right = rightStart;
    let index = left;
    // while still in bounds copy the smaller element
    while(left <= leftEnd && right <= rightEnd){
        if(arr[left] <= arr[right]){ // if left is smaller copy in left
            newArr[index] = arr[left];
            left++;
        }else{ // else copy in right
            newArr[index] = arr[right];
            right++;
        }
        index++;
    }
    // copy over the remaining elements - if neccessary
    // on the left side
    while(left <= leftEnd){
        newArr[index] = arr[left];
        index++;
        left++;
    }
    // on the right side
    while(right <= rightEnd){
        newArr[index] = arr[right];
        index++;
        right++;
    }
    // join the two arrays in the changed positions
    newArr = newArr.concat((arr.slice(rightEnd+1,arr.length)));
    for(let i = 0; i<arr.length;i++){
        arr[i] = newArr[i];
    }
    return arr;

}
