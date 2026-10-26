// OR operator

// has Kevin taken water today? => true
// has George taken water today? => false
// has Kevin or George taken water today? => true

// has Kevin taken water today? => true
// has George taken water today? => true
// has Kevin or George taken water today? => true

// has Kevin taken water today? => false
// has George taken water today? => false
// has Kevin or George taken water today? => false

let kevinTakenWater = true;
let georgeTakenWater = true;
const result = kevinTakenWater || georgeTakenWater;

console.log(result)