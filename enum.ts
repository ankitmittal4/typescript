enum seat1 {
    AISLE,  //automatically assigned 0
    MIDDLE,
    WINDOW,
}

enum seat2 {
    AISLE = "aisle",
    MIDDLE = 1043,
    WINDOW,
}

/*
enum seat3 {
    AISLE = "aisle",
    MIDDLE, //gives error as next value should be string
    WINDOW,
    }
*/

enum seat4 {
    AISLE = 2057,
    MIDDLE = 1043,
    WINDOW,
}



export { }