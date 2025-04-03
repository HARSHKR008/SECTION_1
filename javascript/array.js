const movies = ['Intersteller', 'Iron Man', 'Inception', 'Tenet',
    'Harry Potter'];

console.log(movies.length);

// indexing
console.log(movies[2]);

console.log(movies.indexOf('Tenet'));

console.log(movies.at(-2));

// slicing
console.log(movies.slice(1, 4));
console.log(movies.slice(1));
console.log(movies.slice(1, 50));

// adding and removing elements

movies.push('Mohabbatein');
movies.unshift('Mufasa');
console.log(movies);

movies.pop();
movies.shift();
console.log(movies);

// delete from custom position
// movies.splice(2, 2);
// movies.splice(2, 2, 'Sikandar', 'Alladin', 'Shiddat');
movies.splice(1, 0, 'Batman');
console.log(movies);