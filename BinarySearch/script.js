function searchB(list, item) {
    let low = 0,
        hight = list.length - 1;

    for (let i = 0; low <= hight; i++) {
        let mid = (low + hight);
        let guess = list[mid];

        if (guess === item) {
            console.log(mid);
            low = hight + 1;
        } else if (guess > item) {
            hight = mid - 1;
        } else {
            low = mid + 1;
        }
    }
}

let myList = [1, 3, 4, 6, 7, 12, 45, 51, 66, 101];
searchB(myList, 66);