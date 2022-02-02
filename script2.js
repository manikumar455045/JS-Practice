//deep equality check for two objects

let name = {
    first: "mani",
    last: "kumar",
    address: {
        street: 'tpt colony',
        city: 'vizag'
    }
}

let name2 = {
    last: "kumar",
    first: "mani",
    address: {
        street: 'tpt colony',
        city: 'vizag',
        pin: '530013'
    }
}
let isEqual = (name, name2) => {
    let keys1 = Object.keys(name);
    let keys2 = Object.keys(name2);
    if (keys1.length != keys2.length) return false;
    for(let i of keys1) {
        let areObjects = isObjects(name[i]) && isObjects(name2[i])
        if (areObjects && !isEqual(name[i], name2[i]) || !areObjects && name[i] !== name2[i]) {
            return false;
        }
    }
    return true;
}
isObjects = (object) => {
    return object != null && typeof object === 'object';
}
console.log(isEqual(name, name2))
