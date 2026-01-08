/* Part 1 */

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

//Check if all numbers are divisible by 5

const divisibleByFive =
  n1 % 5 === 0 || n2 % 5 === 0 || n3 % 5 === 0 || n4 % 5 === 0;
console.log("Check if all numbers are divisible by 5: ", divisibleByFive);

//Check if the first number is larger than the last

const isFirstLarger = n1 > n4;
console.log(
  "Check if the first number is larger than the last: ",
  isFirstLarger
);

/* 
Accomplish the following arithmetic chain:

    Subtract the first number from the second number.

    Multiply the result by the third number.

    Find the remainder of dividing the result by the fourth number.
*/

const arithmeticResult = ((n2 - n1) * n3) % n4;
console.log("Arithmetic Solution: ", arithmeticResult);
/*Solution explanation: ((15-10)*20)%5; PEMDAS- 15-10 = 5, 5*20 = 100, 100%5 = 0 */

/* Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate. */

//Original
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

//New

/* Part 2 */
/* 
    The distance of the trip, in total, is 1,500 miles.

    Your car’s fuel efficiency is as follows:

        At 55 miles per hour, you get 30 miles per gallon.

        At 60 miles per hour, you get 28 miles per gallon.

        At 75 miles per hour, you get 23 miles per gallon.

    You have a fuel budget of $175.

    The average cost of fuel is $3 per gallon.

*/

//How many gallons of fuel will you need for the entire trip?

let totalNeededGallons = 1500 / 23;
console.log(
  `The max amount of gallons of fueld needed for the trip is about ${totalNeededGallons.toFixed(
    2
  )} gallons.`
);

//Will your budget be enough to cover the fuel expense?

const totalCostOfFuel = totalNeededGallons * 3;

if (totalCostOfFuel > 175) {
  console.log(
    `The total cost of fuel for this trip is $${totalCostOfFuel.toFixed(
      2
    )}. The budget of $175 will not cover the cost of fuel for this trip.`
  );
} else {
  console.log(
    `The total cost of fuel for this trip is $${totalCostOfFuel.toFixed(
      2
    )}. The budget of $175 will cover the cost of fuel for this trip.`
  );
}

/* Note- for both of these questions, I used 75mph because that wil use the most amount of fuel. The trip cost will be covered at 60 and 55 mph.*/

//How long will the trip take, in hours?

let hourByMinutes = 60;

//55mph
let totalAt55 = 1500 / 55;
console.log(
  `If you drive at 55mph, the trip will take a total of ${totalAt55.toFixed(
    2
  )} hours`
);
//60mph
let totalAt60 = 1500 / 60;
console.log(
  `If you drive at 60mph, the trip will take a total of ${totalAt60.toFixed(
    2
  )} hours`
);
//75mph
let totalAt75 = 1500 / 75;
console.log(
  `If you drive at 75mph, the trip will take a total of ${totalAt75.toFixed(
    2
  )} hours`
);
