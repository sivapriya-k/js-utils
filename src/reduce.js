/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {Array<U>}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {

    if(!this.length && arguments.length === 1) throw Error;

    let returnValue = arguments.length === 1 ? this[0] : initialValue;
    const arrayLength = this.length;

    const index = arguments.length === 1 ? 1 : 0;
    for(let i=index; i<arrayLength; i++) {
        if(!!this[i])
            returnValue = callbackFn(returnValue, this[i], i, this);
    }

    return returnValue;
};

[1, 2, 3].myReduce((prev, curr) => prev + curr, 0); // 6
[1, 2, 3].myReduce((prev, curr) => prev + curr, 4); // 10
