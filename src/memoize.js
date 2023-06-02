export default function memoize(fn) {
    const cache = {};
    return function(...args) {
        const argsKey = JSON.stringify(args);
        if(!cache[argsKey]) {
            cache[argsKey] = fn(...args)
        }

        return cache[argsKey];
    }
}

const add = (a, b) => {
    console.log('executing function');
    return a+b;
}

const memoizedAdd = memoize(add);
memoizedAdd(2,3); //should print console log
memoizedAdd(2,3); //should not print console log