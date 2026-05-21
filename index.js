const number = 23;

if (number < 40); {
    console.log("This is an number");
}

//if else

const age = 15;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Not an Adult");
}

//else if statements

const score = 75;
if (score >= 90) {
    console.log("A");
} else if(score >= 70) {
    console.log("B");
} else {
    console.log("C");
}

//switch statements

const day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

//loops

for (let i = 0; i < 5; i++){
    console.log(i)
}

let i = 2;
while (i < 5) {
    console.log(i);
    i++;
}


