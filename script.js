let arr1 = [2, 5, 6, 15, 8, 11, 5];
let arr2 = [3, 5, 12, 8, 14, 0, 5];
let arr3 = [5, 19, 5, 2, 16, 6, 11, 5, 6, 2];
let arr4 = [1, 5, 18, 12, 13, 9, 8, 6];

// Function 
const Arrays = (arr) => {
    const findMax = (arr) => Math.max(...arr);
    const sumOfElements = arr.reduce((sum, num) => sum + num, 0);
    const oddNumbersCount = arr.filter(num => num % 2 !== 0).length;
    console.log("Array:", arr);
     console.log("Maximum number :", findMax(arr));
    console.log("Sum of all elements:", sumOfElements);
    console.log("Count of odd numbers:", oddNumbersCount);
    
};


Arrays(arr1);
Arrays(arr2 );
Arrays(arr3);
Arrays(arr4);

