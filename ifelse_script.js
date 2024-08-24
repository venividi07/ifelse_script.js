// Homework Tema 22 1
let temperature = 15;
if ( temperature < 0){
    console.log(`Temperatura este sub inghet, sunt ${temperature} grade`);
} else if ( temperature > 0 && temperature < 10){
    console.log (`Este frig, tempreratura e de ${temperature} grade`);
} else if( temperature > 10 && temperature < 25){
    console.log(`Temperautra este moderata, sunt ${temperature} grade`);
} else {
    console.log(`Este cald, temperatura e de ${temperature} grade`);
};

// Homework Tema 22 2
let day = 5;
if (day == 1){
    console.log("Ziua e luni");
} else if (day == 2){
    console.log("Ziua e sambata");
}  else if (day == 3){
    console.log("Ziua e miercuri");
} else if (day == 4){
    console.log("Ziua e joi");
} else if (day == 5){
    console.log("Ziua e vineri");
} else if (day == 6){
    console.log("Ziua e sambata");
} else {
    console.log("Ziua e duminica");
};

// Homework Tema 22 3
let number = 17;
    if (number % 2 === 0) {
        console.log( "It is Even Number");
    } else {
        console.log ("It is Odd Number");
    };

// Homework Tema 22 4
let purchaseAmount = 120;
let discount= (purchaseAmount/100)*10;
let totalDiscount = purchaseAmount - discount;
let tax= (purchaseAmount/100)*5;
let totalTax= purchaseAmount + tax;
if (purchaseAmount >= 100){
    console.log(` With discount is ${totalDiscount}`);
} else {
    console.log(` With tax is ${totalTax}`);
};

// Homework Tema 22 5

let password = '1Thisisaverystrongpassword@email';
let lengthPassword = password.length;

if (lengthPassword >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
    
    console.log('Parola este foarte sigura');
}
else if (lengthPassword >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password)) {
    console.log('Parola este sigura');
}
else if (lengthPassword >= 6 && /^[A-Za-z]+$/.test(password)) {
    console.log('Parola este slaba');
}
else {
    console.log('Parola este nesigura');
};

// Homework Tema 22 6
let newNumber = 7;
if (newNumber < 1) {
    console.log("Numarul nu este prim");
}
else {
    for (let i = 2; i <= Math.sqrt(newNumber); i++){
        if (newNumber % i === 0) {
            console.log('Numar nu e prim');
        }
        else {
            console.log('Numarul este prim');
        }
    } 
};

// Homework Tema 22 6
const latura1 = 2;
const latura2 = 4;
const latura3 = 5;
if (latura1 + latura2 > latura3 && latura1 + latura3 > latura2 && latura2 + latura3 > latura1) {
    if (latura3 ** 2 == latura1 ** 2 + latura2 ** 2 || latura2 ** 2 == latura3 ** 2 + latura1 ** 2
        || latura1 ** 2 == latura3 ** 2 + latura2 ** 2) {
        console.log('Laturile pot forma un triunghi dreptunghic');
    }
    else {
        console.log('Laturile pot forma un triunghi');
    }
}
else {
    console.log('Laturile nu pot forma un triunghi');
};
