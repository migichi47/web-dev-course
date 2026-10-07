/*
  if a condition is met, then we perform a certain task,
  if it is not met (else), then we perform another task
*/

// let hasId = true;

// if (hasId === true) {
//   console.log("Allowed entry");
// } else {
//   console.log("Denied entry");
// }

// and operator => &&

const age = 40;

if (age >= 18 && age < 21) {
  console.log("You have partial access");
} else if (age >= 21) {
  console.log("You have full access");
} else {
  console.log("You have no access");
}
