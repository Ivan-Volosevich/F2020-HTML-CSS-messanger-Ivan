function ololo(str) {

let count = 0;
const arr = ['a', 'e', 'i', 'o', 'u'];

    for (let i of str) {
        if (arr.includes(i)) {
            count++
        }
    }

    return count;
}