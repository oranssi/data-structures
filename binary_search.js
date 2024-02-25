function binarySearch(arr, target) {
    let first = 0;
    let last = arr.length - 1;

    while (first <= last) {
        let mid = Math.floor((first + last) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            first = mid + 1;
        } else {
            last = mid - 1;
        }
        return false;
    }
}

function verify(index) {
    if (index === false) {
        console.log('Target not found in array');
    } else {
        console.log('Target found at index:', index);
    }
}

let arr = [1, 3, 5, 7, 9];
let target = 5;
verify(binarySearch(arr, target));

target = 6;
verify(binarySearch(arr, target));
