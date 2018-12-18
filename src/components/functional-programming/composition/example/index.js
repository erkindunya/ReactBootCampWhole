export const compose = (...functions) => initialValue =>
  functions.reduceRight((currentValue, fn) => fn(currentValue), initialValue);

// export const compose = (...functions) => {
// functions.reduce((accumulator, currentValue) =>{
// return currentValue(accumulator)
// }, initialValue
// );
// }

const toUpperCase = text => text.toUpperCase();

const removeSpaces = text => text.replace(/\s/g, "");

const removeNumbers = text => text.replace(/[0-9]/g, "");

const exampleText = "1 2 3 ReactJS Academy is a m a z i n g";
//const myTransformer =  toUpperCase(exampleText)



export const transformText = compose(
  toUpperCase,
  removeNumbers,
  removeSpaces
);
// const my
//const myTransformer2 =  removeNumbers(removeSpaces(toUpperCase(exampleText)))
//export const transformText = text => text;
