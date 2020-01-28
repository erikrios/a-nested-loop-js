var arrayOfNumber = [5, 8, 0, 10, 15, 19, 2]
console.log(isDuplicate(arrayOfNumber))

// A function to check is an array duplicated
function isDuplicate(array) {
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (i != j && array[i] == array[j]) {
                return true
            }
        }
    }
    return false
}