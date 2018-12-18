const sum = (a, b) => a + b

const substract = (a, b) => a - b

// Let's write some tests for those functions
const expected = 3
const actual = sum (1,2)
if (expected !== actual){
throw new Error (
    `Sum is broken; expected Actual value was ${actual}, but ${expected} was expected`
)

}

const expected = 3
const actual = substract (1,2)
if (expected !== actual){
throw new Error (
    `Sum is broken; expected Actual value was ${actual}, but ${expected} was expected`
)

}