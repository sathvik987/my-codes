
/* var age = prompt("What is your age?");
checkage(age);
function checkage(age) {

    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
 */

var database = [{
    username: 'sathvik',
    password: '1234'
},
{
    username: 'bobby',
    password: '987'

},
{
    username: 'sally',
    password: '123'

}

];

var newsFeed = [
    {
        username: "bobby",
        timeline: "So tired of learning !!"

    },
    {
        username: "Sally",
        timeline: "Learnig js"
    }
];

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (username === database[i].username && password === database[i].password) {
            return true;

        }

    }
    return false;
}

function signIn(user, pswd) {
    if (isUserValid(user, pswd)) {
        console.log(newsFeed);
    } else {
        alert("Sorry try again");
    }
}

var userNamePrompt = prompt("Username:");
var passwordPrompt = prompt("Password");

signIn(userNamePrompt, passwordPrompt);