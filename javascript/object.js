const user = {
    name : 'Raju',
    email : 'raju@mail.com',
    password : 'raju1234'
}

console.log(user);

console.log( user.email );
console.log( user['name'] );

user.password = 'rajupinki1234';

console.log(user);

user.address = 'Lucknow';

console.log( user );

console.log( Object.keys(user) );
console.log( Object.values(user) );


const smartphone = {
    brand : 'Samsung',
    model : 's25 ultra',
    price : 120000,
    colors : ['black', 'white', 'blue']
};

console.log( smartphone.price );

smartphone.price = 110000;
console.log(smartphone);

// syntax to access 2nd color of smartphone
console.log(smartphone.colors[1]);


// syntax to add new color to smartphone
smartphone.colors.push('red');
console.log(smartphone.colors); 

// syntax to replace 2nd color in smartphone
smartphone.colors.splice(1, 1, 'yellow');
console.log(smartphone.colors);