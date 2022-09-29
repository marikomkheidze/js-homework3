"use strict"
// ამოცანა 1
// let array  = [5, 25, 89, 120, 36]
// let sum=0
// array.push ("javascript", "python")
// console.log(array);
// array.unshift ("html", "css")
// console.log(array);
// console.log(array.length);
// console.log();
// array.shift ()
// console.log(array);
// array.pop()
// console.log(array);
// console.log(array.length);

// ამოცანა 2
// let array = ["orange", "banana", "pear"]
// console.log(array.length);
// array.push("apple", "ananas")
// console.log(array);
// array.unshift("watermelon");
// console.log(array);
// console.log(array.length);
// array.splice(2,0, "mango")
// console.log(array);
// array.shift ();
// console.log(array);
// array.pop ();
// console.log(array);
// console.log(array.length);

// ამოცანა 3
// let array = [12, 25, 3, 6, 8, 14, 7, 23];
// let NewArray = array.map(function(x){
//     return x / 3;
// })
// console.log(NewArray);

// ამოცანა 4 
// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// let newArray = array.filter ((x) => typeof x === "number");
// console.log(newArray);

// ამოცანა 5

// let languages = ["html", "css", "javascript", "python", "php"];
// let newLanguages = languages.filter ( (x) => x.length > 3 )
// console.log(newLanguages);

// ამოცანა 6

// let item = [12, "google", 32, null, "yahoo", 25];
// let NewItem = item.map ((x) => { 
// if (typeof x === "number"){ return Math.pow(x,2)}
// else if(typeof x === "string") { return x.toUpperCase()}else {return x}})
// console.log(NewItem);
// console.log(typeof 32);

// ამოცანა 7
// let citys = ["Madrid", "Rome", "Milan","Berlin"];
// let newCitys = citys.filter( (x) => x.includes("M") || x.includes("m"));
// console.log(newCitys);

// ამოცანა 8

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];
// let allArreys = arr1.concat(arr2).concat(arr3);
// console.log(allArreys);

// ამოცანა 9 
// let arr = [1, 2, 3, 4, 5];
// let sum = 0
// arr.forEach(item => {
//     sum+=item
// })
// console.log(sum);

// ამოცანა 10 
// let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];
// let newNumbers = numbers.filter (x => x > 0);
// console.log(newNumbers);

// ამოცანა 11
// let arr = [-1, -2, -3, 4];
// arr.some(check);
// function check(n) {return n>0; };
