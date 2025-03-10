//for loop 
for (let i = 0; i < 5; i++) {
    console.log(i);

}

//while loop
let a = 10;
while (a < 20) {
    console.log(a);
    a++;

}
let b = 10;
console.log('do while loop');
do {
    console.log(b);
    b++;
} while (b > 20);
//WAP to print all numbers divisible by 7 in range of 120-270

console.log('number divisible by 7');
for (let i = 120; i <= 270; i++) {
    if (i % 7 == 0) {
        console.log(i);

    }
}

//WAP to check if a number is prime

let num = 13;
let isprime = true;
for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
        console.log('not prime');
        isprime = false;
        break;
    }
}
if (isprime) console.log('prime');

