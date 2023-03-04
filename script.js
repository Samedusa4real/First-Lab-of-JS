// FOREACH
const testArray = [3,5,7,9]
console.log(testArray);

function myCallBack(item){
    return item * 2
}

function myForEach(array, callback){
    for (let index = 0; index < array.length; index++) {
        array[index] = callback(array[index], index, array)
    }
}

myForEach(testArray,myCallBack)
console.log("2:", testArray)

// -----------------------------------------------------------------------

// MAP
const testArray2 = [1,3,5,7]
console.log(testArray2);

function myCallBack2(item){
    return item * 2
}

function myMap(array,callback){
    const array1 = []
    for (let index = 0; index < array.length; index++) {
        array1[index] = callback(array[index], index, array)
    }
    return array1
}

const testArray3 = myMap(testArray2,myCallBack2)
console.log(testArray3);

// ---------------------------------------------------------------------------

// FILTER
const testArray = [2,3,5,7,8,9]
console.log(testArray);

function myCallBack(item){
    if(item%2===0){
        return item
    }
}

function myFilter(array, callback){
    for (let index = 0; index < array.length; index++) {
        array[index] = callback(array[index], index, array)
    }
}

myFilter(testArray,myCallBack)
console.log("2:", testArray)



const testArray = [2,3,5,7,8,9]

console.log(testArray);

function myFilter(array,callback){
    for (let index = 0; index < array.length; index++) {
        callback(array[index])
    } 
    return array
}

function myCallBack(item){
    const testArray7 = []
    if(item%2===0){
        testArray7.push(item)
        return testArray7
    }
}

myForEach(testArray,myCallBack)
console.log("2:", testArray7)

// ---------------------------------------------------------------------------

// SOME
const hasNegativeItems = [1,2,3,4,5]

function myCallBack(item){
    return item < 0
    if(item < 0){
        return true
    }
    else{
        return false
    }
}

function mySomeFunction(array,callback){
    for (let index = 0; index < array.length; index++) {
        if(callback(array[index])){
            return true
        }
    }
    return false
}

testArray10 = mySomeFunction(hasNegativeItems,myCallBack)
console.log(testArray10);

// ---------------------------------------------------------------------------

// EVERY
const isEverythingNegative = [1,2,-3,-4,-5]

function myCallBack(item){
    return item < 0
}

function myEveryFunction(array,callback){
    for (let index = 0; index < array.length; index++) {
        if(!callback(array[index])){
            return false
        }
    }
    return true 
}

testArray10 = myEveryFunction(isEverythingNegative,myCallBack)
console.log(testArray10);

// ---------------------------------------------------------------------------

// SLICE
const testArray = [1,2,3,4,5]
let testArray2 = []
const testArray2 = testArray.slice(1)

console.log(testArray2);

const testArray3 = testArray.shift()
console.log(testArray3);

for (let a = 0; a < testArray.length; a++) {
    for (let b = 0; b < a; b++) {
        console.log(testArray[b]);
    }  
}

function mySliceMethod(array,callback){
    let testArray2 = []
    for (let index = 0; index < array.length; index++) {
        testArray2 = callback(array)
    }
}

function myCallBack(a,b){
    if(a>b){
        return b-a
    }
    else{
        return a-b
    }
}