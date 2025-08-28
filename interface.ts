interface user {
    readonly _id: number;
    name: string;
    email: string;
    cardId?: number; // optional property
    // startTrial: () => string;
    startTrial(): string;
    getCoupon(couponName: string, value: number): number;
}

let newUser: user = {
    _id: 1021,
    name: "Ankit Mittal",
    email: "ankit@gmail.com",
    startTrial: () => {
        return "Trial started";
        // return 1;
    },

    getCoupon: (name: "free20", off: 20) => {
        return off;
    }
}
newUser.name = "Rohit"
// newUser._id = 920;
console.log(newUser.getCoupon("free40", 40));