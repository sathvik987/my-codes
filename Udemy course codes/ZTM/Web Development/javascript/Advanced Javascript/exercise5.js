// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

/* ar2 = [];
array.forEach(element => {
  ar2.push(element.username + '!')
});
console.log(ar2); */

//Create an array using map that has all the usernames with a "? to each of the usernames

/* let usr = array.map((ele) => ele.username + '?');
console.log(usr);
 */

//Filter the array to only include users who are on team: red

/* let tred = array.filter((ele) => ele.team === 'red');
console.log(tred);
 */

//Find out the total score of all users using reduce

/* let total = array.reduce((acc, ele) => acc + ele.score, 0);
console.log(total);
 */

// (1), what is the value of i?
// (2), Make this map function pure:
/* const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i); //my_ans=remove this
  alert(num); //my_ans=remove this
  return num * 2;
})
 */
//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
  user.items = user.items.map(item => {
    return item + "!"
  });
  return user;
});
console.log(answer);

