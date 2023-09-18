let data = {
    user1: 'smith',
    user2: 'jhon',
    user3: 'bean'
};

Object.keys(data).forEach(element => {
    console.log(element, data[element])
}); //old

Object.values(data).forEach(val => console.log(val));
Object.entries(data).forEach(val => console.log(val));

let a = Object.entries(data).map(value => {
    return value[1] + value[0].replace('user', ' ');
}
);
console.log(a);