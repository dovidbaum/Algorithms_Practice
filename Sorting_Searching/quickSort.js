/* Quicksort (Hoare’s parition scheme) - O(nlogn)on average, O(n^2) worst case
    You pick an element to be the pivot. Then walk through the array from both sides - left to right & right to left
    Swap the elements if they are out of order - every element less than the pivot should be before every element greater
    than the pivot.
    Recursively do quickSort on both sides
    • Ideally the pivot is the median value so you split the array in half each time - O(logn). However in worst case you
    pick the largest or smallest element ech time - O(n^2)
 */
/*
ex1: let arr = [1];
ex2: let arr = [2,1,3,9,2];
ex3: let arr = [6,3,1,2,5,8,7,9,15];
ex4: let arr = [12, 11, 13, 5, 6, 33, 4234, 35, 66, 77, 234, 534, 53, 4545, 456, 5, 6, 87, 78];
*/
let arr = [12, 11, 13, 5, 6, 33, 4234, 35, 66, 77, 234, 534, 53, 4545, 456, 5, 6, 87, 78];
quickSort(arr);
console.log(arr);

// returns a sorted arr in O(nlogn) average time
function quickSort(arr){
    let left = 0;
    let right = arr.length-1;
    return quickSortHelper(arr,left,right);
}
function quickSortHelper(arr,left,right) {
    if (left >= right) {
       // console.log(arr);
        return arr;
    }
    let pivot = right;
    // partition will return the partition point - the dividing point between the left and right side
    let index = partition(arr, left, right, pivot);
    quickSortHelper(arr, left, index - 1);
    quickSortHelper(arr, index, right);
}
// returns the point that partitions the left half and right half
// all elements smaller than the pivot will be to the left, all elements greater to the right, return partition point
function partition(arr,left,right,pivot){
    while(left <= right){
        while(arr[left] < arr[pivot]){ // will
            left++;
        }
        while(arr[right] > arr[pivot]){
            right--;
        }
        if(left >= right){
            return left;
        }else{
            swap(arr,left,right);
            left++;
            right--;
        }
    }
    return left;
}

function swap(arr,left,right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}