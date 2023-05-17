/**
 * @template T, U
 * @param { (value: T) => U } callbackFn
 * @param {any} [thisArg]
 * @return {Array<U>}
 */
Array.prototype.myMap = function (callbackFn, thisArg) {
    const result = [];

    const array = this;
    this.forEach((val, index) => {
        if(!!this[index]) {
            result[index] = callbackFn.apply(thisArg || this, [val, index, array])
        }
    })
    return result
};

[1, 2, 3, 4].myMap((i) => i); // [1, 2, 3, 4]
[1, 2, 3, 4].myMap((i) => i * i); // [1, 4, 9, 16]
