//sum(1)(2)(3)..............(n)()

let sum = (a) => {
    return (b) => {
        if(b){
            return sum(a+b)
        }
        return a;
    }
}

console.log(sum(1)(1)(1)(1)())