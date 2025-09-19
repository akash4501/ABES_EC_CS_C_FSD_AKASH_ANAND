function isODD(a) {
    if (a % 2 == 0) {
        return "value of odd";
    } else {
        return "value of even";
    }
}

function isODDUsingTernary(a) {
    return a % 2 !== 0 ? "value of odd" : "value of even";
}
console.log(isODD(3));
console.log(isODDUsingTernary(3));