function bubbleSort(inputArray) {
    var outputArray = inputArray;
    var num = inputArray.length;
    console.log("Length of the array : ".concat(num));
    var i;
    for (i = 0; i < num; i++) {
        var j = void 0;
        for (j = i; j <= i; j++) {
            if (outputArray[j] > outputArray[j + 1]) {
                var temp = outputArray[j];
                outputArray[j] = outputArray[j + 1];
                outputArray[j + 1] = temp;
            }
        }
    }
    return outputArray;
}
var numAarray = new Array(3, 1, 6, 4, 8);
console.log(bubbleSort(numAarray));
