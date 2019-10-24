
function isEven(a) {
    if (typeof (a) == "string") { //se stringa
        return undefined;
    }
    if (typeof (a) == "number") { // se numero
        if (a > 0 && a % 2 === 0 || a === 0) //numero pari o 0 
        {
            return true;
        }
        else if (a % 1 != 0 || a < 0) //decimale
        {
            return undefined;
        }
        else { //altrimenti
            return false;
        }
    };
}
console.log("Test numbers");
console.log(isEven(252) === true);
console.log(isEven("ciao") === undefined);
console.log(isEven(0) === true);
console.log(isEven(87) === false);
console.log(isEven(8.7) === undefined);
console.log(isEven(-654) === undefined);




function speed(distance, time) {
    if (typeof (distance) === "number" && typeof (time) === "number")
        if (distance !== 0 && time !== 0) {
            return distance / time;
        }
}

console.log("Test for Speed");
console.log(speed(10, 2) === 5);
console.log(speed(10, 0) === undefined);
console.log(speed("ciao", "ehu") === undefined);
console.log(speed(2.42, 2) === 1.21);
console.log(speed(2.42, "value") === undefined);
console.log(speed("value", 7) === undefined);
console.log(speed(12.42, 2.6) === 4.776923076923077);

console.log("Test Somma cifre in un numero");
function digitSum(number) {
    if (!Number.isInteger(number)) {
        return undefined;
    }
    let sum = 0;
    while (number > 0 && Number.isInteger(number)) {
        resto = number % 10;
        sum = sum + resto;
        number = (number - resto) / 10;
    }
    return sum;
}

console.log(digitSum(8716));
console.log(digitSum(8.716) === undefined);
console.log(digitSum("8.716") === undefined);

console.log("Test Somma cifre in una stringa");
function digitSumLetter(value) {
    if (!Number.isInteger(value)) {
        return undefined;
    }


    let sumLetter = 0;
    value = value.toString();
    if (value > 0) {
        for (let i = 0; i < value.length; i++) {
            c = value[i];
            let conversione = parseInt(c);

            sumLetter = sumLetter + conversione;
        }
        return sumLetter;
    }
}
console.log(digitSumLetter("8794") === undefined);
console.log(digitSumLetter("ciao") === undefined);
console.log(digitSumLetter(8794));