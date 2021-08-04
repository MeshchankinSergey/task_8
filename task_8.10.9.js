function checkParity(arr = [0, 0, 0]) {

console.log("количество четных чисел =", arr.filter(n => typeof(n) == "number" && n%2 == 0 && n/2 !== 0).length);

console.log("количество нечетных чисел =", arr.filter(n => typeof(n) == "number" && n%2 !== 0).length);
console.log("количество нулевых элементов =", arr.filter(n => typeof(n) == "number" && n/2 == 0).length);
};

checkParity();