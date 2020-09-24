function solve(array, startIndex, endIndex) {

    try {if (!Array.isArray(array)) {
        throw new TypeError('NaN');
    }
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex > array.length - 1) {
        endIndex = array.length - 1;
    }
  
    let sum = 0;
    for(let i=startIndex; i<=endIndex;i++){
        if (typeof array[i] !== 'number') {
            throw new TypeError('NaN');
        }
        sum += array[i] ;
    }console.log(sum);
} catch (ex) {
    console.log(ex);
}
    
    
}

solve('dadads', 3, 300)