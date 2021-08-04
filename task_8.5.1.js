let yourNamber = prompt("please enter a number");

if (typeof (+yourNamber) === "number"){
    
    if (isNaN(+yourNamber)) {
        console.log("Упс, кажется, вы ошиблись")
    }
    else if (+yourNamber % 2 === 0 || -0) {
        console.log("Четное")
    } else {
        console.log("Нечетное")
    }
    
} else {
    console.log("Упс, кажется, вы ошиблись")
}