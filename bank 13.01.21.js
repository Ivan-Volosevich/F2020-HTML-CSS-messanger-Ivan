function yourMoney(x) {
    let a = [1,2,5,10,20,50];
    let result = [];

    if (x > 0) {
        for (let i = 0; i < a.length; i++) {

            let b = a[i];

            while (x - b >= 0) {
                x -= b;
                result.push(b);
            }
        }
    } else {
        console.log("Error, enter one more time");
    }
    return result;
}

console.log(yourMoney(0));