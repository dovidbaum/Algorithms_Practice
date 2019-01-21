/*Problem: given a rotated array that at some initially was sorted, write code to dins an element in the array
 complexity: O(logn)
 */
/*
arr1 = [6,7,8,1,2]

arr2 = [10,1,11,12,13]

arr3 = [10,16,18,19,22,1,2,3,4,5,8,9]

 */
var arr = [10,16,18,19,22,1,2,3,4,5,8,9]
var toFind = 16;
var curr = Math.floor(arr.length/2);
console.log(searchInRotatedArray(arr,toFind,curr));

function searchInRotatedArray(arr,toFind,curr) {
    //base case - this is the element you are looking for
    if (arr[curr] == toFind) {
        return curr;
    }
    // case 1: left half is sorted
    if (arr[0] < arr[curr]) {
        // case 1a: toFind is in left sorted half
        if (arr[0] < toFind && arr[curr] > toFind) {
            return binarySearch(arr.slice(0, curr), toFind,Math.floor(curr / 2));
            // case 1b: toFind is in right half so search right half
        } else {
            return searchInRotatedArray(arr.slice(curr + 1, arr.length), toFind, Math.floor(curr + (curr / 2)));
        }
        // case 2: right half is sorted
    } else {
        // case 2a: toFind is in right sorted half
        if (arr[curr] < toFind && arr[arr.length - 1] > toFind) {
            return binarySearch(arr.slice(curr + 1, arr.length), toFind,Math.floor(curr + (curr / 2)));
            // case 2b: toFind is in leg half so search right half
        } else {
            return searchInRotatedArray(arr.slice(0, curr), toFind, Math.floor(curr / 2));
        }
    }
}

//returns index of to find in array using binary search
function binarySearch(arr,toFind,curr){
    //base case
    if (arr[curr] == toFind) {
        return curr;
    }

    if(toFind > arr[curr]){
        return(binarySearch(arr.slice((curr+1),arr.length),toFind,Math.floor(curr + (curr / 2))));
    }else{ //less than curr
        return(binarySearch(arr.slice(0,curr),toFind,Math.floor((curr / 2))));
    }
}