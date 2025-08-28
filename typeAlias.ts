type Point = {
    readonly x: number
    y?: number
}

function printCoordinate(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
    return pt;
}
printCoordinate({ x: 100 });

let coordinateObj: Point = { x: 100 };
// coordinateObj.x = 300;
console.log(coordinateObj.x);