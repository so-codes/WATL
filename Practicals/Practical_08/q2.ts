function bubbleSort(inputArray:number[]):number[]{
    let outputArray:number[]= inputArray;
    let num = inputArray.length;
    console.log(`Length of the array : ${num}`);
    let i:number;
    for(i=0;i< num;i++){
        let j:number;
        for(j=i;j<=i;j++){
            if(outputArray[j] > outputArray[j+1]){
                let temp = outputArray[j];
                outputArray[j] = outputArray[j+1];
                outputArray[j+1] = temp;
            }
        }
    }
    return outputArray;
}

let  numAarray : number[] = new Array(3,1,6,4,8);

console.log(bubbleSort(numAarray));