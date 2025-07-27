/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


const age = 17;
const student = true;
const ticketPrice = 800;



if (age < 10) {
    // free
    console.log("free");
} else if (age <= 16 && student == true) {
    // 50% discount

    const discount = ticketPrice * 50 / 100;
    const payAmount = ticketPrice - discount;
    console.log(payAmount);
}else if (age >= 60) {
    // 15% discount
    const discount = ticketPrice * 15 / 100;
    const payAmount = ticketPrice - discount;
    console.log(payAmount);
}else {
    console.log(ticketPrice);
}



// Ternary Operator
const SeniorCitizensPayAmount = ticketPrice - (ticketPrice * 15 / 100);
const StudentPayAmount = ticketPrice - (ticketPrice * 50 / 100);

age < 10 ? console.log("free") : (age <= 16 && student == true) ? console.log(StudentPayAmount) : (age >= 60) ? console.log(SeniorCitizensPayAmount): console.log(ticketPrice);


