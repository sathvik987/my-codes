
var obj = {
    username: 'User1',
    dosomething: function () {
        console.log(this.username + ' is logged in');
        return this.username;
    },
    name: 'Jhon'

};


console.log(obj.dosomething());
console.log(obj.name);
