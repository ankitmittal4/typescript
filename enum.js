"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var seat1;
(function (seat1) {
    seat1[seat1["AISLE"] = 0] = "AISLE";
    seat1[seat1["MIDDLE"] = 1] = "MIDDLE";
    seat1[seat1["WINDOW"] = 2] = "WINDOW";
})(seat1 || (seat1 = {}));
var seat2;
(function (seat2) {
    seat2["AISLE"] = "aisle";
    seat2[seat2["MIDDLE"] = 1043] = "MIDDLE";
    seat2[seat2["WINDOW"] = 1044] = "WINDOW";
})(seat2 || (seat2 = {}));
/*
enum seat3 {
    AISLE = "aisle",
    MIDDLE, //gives error as next value should be string
    WINDOW,
    }
*/
var seat4;
(function (seat4) {
    seat4[seat4["AISLE"] = 2057] = "AISLE";
    seat4[seat4["MIDDLE"] = 1043] = "MIDDLE";
    seat4[seat4["WINDOW"] = 1044] = "WINDOW";
})(seat4 || (seat4 = {}));
