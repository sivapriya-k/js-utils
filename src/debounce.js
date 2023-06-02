/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        if(timeout)
            clearTimeout(timeout);

        timeout = setTimeout(() => {
            timeout = null;
            func.apply(context, [...args])
        }, wait);
    }
}

let i = 0;
function increment() {
    i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.

// t = 100: increment() was invoked and i is now 1.
