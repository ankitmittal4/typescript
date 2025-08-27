function signup(name: string, email: string, password: number, isPremium: boolean = false) {
    console.log(name, email, password, isPremium);
    return;
}
function getNum(num: number): number {
    // return "Ankit";
    return num + 5;
}

signup("Ankit", "ankit@gmail.com", 123);
getNum(5);