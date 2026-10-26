// AND OPERATOR

// has Kevin taken water today? => true
// has George taken water today? => false
// has Kevin and George taken water today? => false

// has Kevin taken water today? => true
// has George taken water today? => true
// has Kevin and George taken water today? => true

// has Kevin taken water today? => false
// has George taken water today? => false
// has Kevin and George taken water today? => false

// camel case naming convention
// pascal case naming convention


let kevinTakenWater = false;
let georgeTakenWater = false;
const result = kevinTakenWater && georgeTakenWater;

console.log(result)