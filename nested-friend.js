/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const frindMarks = 39;
const yourMarks = 82;

if (frindMarks > 80) {
  console.log("go for luch");
} else {
  if (frindMarks >= 60) {
    console.log("Good luck next time");
  } else {
    if (frindMarks >= 40) {
      console.log("Message unseen");
    } else {
      if (frindMarks < 40) {
        console.log("block!");
      } else {
        if (yourMarks < 80) {
          console.log("Go to home and sleep and act sad");
        } else {
          console.log("Great, Congratulations!");
        }
      }
    }
  }
}
