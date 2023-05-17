/**
 * @param {Function} func
 * @return {Function}
 */
export default function curry(func) {

    return function curried(...args) {
        if(args.length < func.length) {
            return curried.bind(null, ...args)
        }

        return func.apply(this, args)
    }

}

function addTwo(a, b) {
    return a + b;
}

const curriedAddTwo = curry(addTwo);
curriedAddTwo(3)(4); // 7

const alreadyAddedThree = curriedAddTwo(3);
alreadyAddedThree(4); // 7


