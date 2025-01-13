// TASK 1
let a = 3;
let b = 5;
let c;

let output =
    `
        let a = 3;
        let b = 5;
        let c;
        ------------
        a + b = ${a + b}
        a - b = ${a - b}
        a * b = ${a * b}
        a / b = ${a / b}
        a % b = ${a % b}
        a += b = ${a += b}
        a -= b = ${a -= b}
        a *= b = ${a *= b}
        a /= b = ${a /= b}
        a %= b = ${a %= b}
        a == b = ${a == b}
        a != b = ${a != b}
        a > b = ${a > b}
        a < b = ${a < b}
        !a && !c = ${!a && !c}
        !a || !c = ${!a || !c}
    `;

console.log(output);


//  TASK 2
let first_name = "Onisa";
let last_name = "Gharibeh";
let email = "ghar0047@algonquinlive.com";
let output2;

output2 =
    `
        My name is ${first_name} ${last_name}. You can contact me at ${email}.
    `;

console.log(output2);