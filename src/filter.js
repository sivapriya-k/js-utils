/**
 * @template T
 * @param { (value: T) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
    const result = [];

    const array = this;
    this.forEach((val, index) => {
        const res = callbackFn.apply(thisArg || this, [val, index, array])
        if(res)
            result.push(val)
    })
    return result
};

[1, 2, 3, 4].myFilter((value) => value % 2 === 0); // [2, 4]
[1, 2, 3, 4].myFilter((value) => value < 3); // [1, 2]
