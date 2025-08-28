var arr = [1, 2, 3, 4];
var arr_ = [1, 2, 3, 4];
var arr2 = ["Ankit", "Mittal"];
var arr3 = ["Ankit", "Mittal", 12]; // union type: acceptiing multiple types
var arr4 = [1, 2, 3];
var arr5 = "practice"; // union type: accepting either string or array of number
var arr6 = [1, 2, 4]; // union type: array of number or array of string
var value = true; // union type: accepting either string or boolean
var seat; // literal type: accepting only these three values
seat = "aisle";
// seat = "crew"; // error: Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'.
console.log(seat);
