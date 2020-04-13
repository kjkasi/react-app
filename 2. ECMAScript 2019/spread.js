const arr1 = [1, 2, 3]
const arr2 = [4, 7, 1]

// const res = Math.max( 41, ...arr1, 5, ...arr2, 10 );
// console.log(res);

//копия массива
const shallowCopy = [ ...arr1, ...arr2 ];
console.log(shallowCopy);