let arr: number[] = [1, 2, 3, 4];
let arr_: Array<number> = [1, 2, 3, 4];

let arr2: string[] = ["Ankit", "Mittal"];

let arr3: (string | number)[] = ["Ankit", "Mittal", 12]; // union type: acceptiing multiple types

let arr4: string | number[] = [1, 2, 3];

let arr5: string | number[] = "practice"; // union type: accepting either string or array of number

let arr6: number[] | string[] = [1, 2, 4];  // union type: array of number or array of string

let value: string | boolean = true; // union type: accepting either string or boolean

let seat: "aisle" | "middle" | "window"; // literal type: accepting only these three values
seat = "aisle";
// seat = "crew"; // error: Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'.
console.log(seat);

