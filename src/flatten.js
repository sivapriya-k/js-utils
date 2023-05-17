/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
    if(!Array.isArray(value))
        return -1;

    const returnValue = [];

    value.forEach(val => {
        if(Array.isArray(val))
            returnValue.push(...flatten(val))
        else
            returnValue.push(val)
    })

    return returnValue;
}

// Single-level arrays are unaffected.
flatten([1, 2, 3]); // [1, 2, 3]

// Inner arrays are flattened into a single level.
flatten([1, [2, 3]]); // [1, 2, 3]
flatten([
    [1, 2],
    [3, 4],
]); // [1, 2, 3, 4]

// Flattens recursively.
flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]
