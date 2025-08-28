var newUser = {
    _id: 1021,
    name: "Ankit Mittal",
    email: "ankit@gmail.com",
    startTrial: function () {
        return "Trial started";
        // return 1;
    },
    getCoupon: function (name, off) {
        return off;
    }
};
newUser.name = "Madhav";
// newUser._id = 920;
console.log(newUser.getCoupon("free40", 40));
