let arr = [4, 2, 1, 35, 12, 5, 11,123,1266,34,65,23];

function findSmallest(arr) {
    let smallest = arr[0],
        smallestIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}



function selectionSort(arr) {
    let newArr = [];

    for (let i = 0; arr.length > 0; i++) {
        let smallest = findSmallest(arr);
        newArr.push(arr.splice(smallest, 1)[0]);
    }
    console.log(newArr);
}
selectionSort(arr);