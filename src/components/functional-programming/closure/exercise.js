function add(x) {
return function (y){
    return x + y;
    };
  }

  //const add = x=> 
const addFive = add(5);

let result;
result = addFive(7); // should output 12

console.log("addFive(7)", result);
