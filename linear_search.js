function linear_search(arr, target) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
        return false;
}


function verify(index) {
    if (index === false) {
        console.log('Target not found in array');
    }
    else {
        console.log('Target found at index:', index);

    }
}

let arr = [1, 3, 5, 7, 9];

let target = 5;
verify(linear_search(arr, target));

target = 6;
verify(linear_search(arr, target));


