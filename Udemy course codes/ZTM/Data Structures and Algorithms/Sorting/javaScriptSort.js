const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


numbers.sort((a, b) => a - b);
console.log(numbers);


numbers.sort((a, b) => b - a);
console.log(numbers);



// .sort().reverse() best performance for sorting strings in descending order