/**
 * @param {any} thisArg
 * @param {...*} boundArgs
 */
Function.prototype.myBind = function (thisArg, ...boundArgs) {
    const context = this;
    return function(...args) {
        return context.apply(thisArg, [...boundArgs, ...args])
    }
};

const john = {
    age: 42,
    getAge: function () {
        return this.age;
    },
};

const unboundGetAge = john.getAge;
console.log(unboundGetAge()); // undefined

const boundGetAge = john.getAge.myBind(john);
console.log(boundGetAge()); // 42
