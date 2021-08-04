let arr = [2, 3, null, 0, 6, "-", 124, 0];

console.log("количество четных чисел =", arr.filter(n => typeof(n) == "number" && n%2 == 0 && n/2 !== 0).length);

console.log("количество нечетных чисел =", arr.filter(n => typeof(n) == "number" && n%2 !== 0).length);

console.log("количество нулевых элементов =", arr.filter(n => typeof(n) == "number" && n/2 == 0).length);