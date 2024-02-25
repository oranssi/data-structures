function recursive_binary_search(arr, target) {
    if(arr.length === 0) {
        return false;
    } else {
        let mid = Math.floor(arr.length / 2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            let result = recursive_binary_search(arr.slice(mid +1), target);
            if 
            (result === false) {
                return false;
            } else {
                return result + mid + 1;
            }

        } else {
            return recursive_binary_search(arr.slice(0, mid), target);
        }
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

verify(recursive_binary_search(arr, target));

target = 1;

verify(recursive_binary_search(arr, target));
