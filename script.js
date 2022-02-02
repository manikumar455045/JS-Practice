//polyfill for bind
let name = {
    first: "mani",
    last: "kumar"
}
let printFullName = function(...address) {
    console.log(this.first + ' ' + this.last + ' ' + address)
}

Function.prototype.mybind = function(...args) {
    let obj = this;
    let params = args.slice(1);
    console.log('1.' + args);
    return function(...args1) {

        obj.apply(args[0], [...params, ...args1]);
    }
}

let printFunc = printFullName.mybind(name, 'guntur', 'andhra')
printFunc('India')
