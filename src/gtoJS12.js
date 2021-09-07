// 1

const myArray = ['thing 1', 'thing 2', 'thing 3'];
myArray.thing4 = 'not a thing';

for(const element in myArray){
  console.log(myArray[element]);
}

console.log(myArray.iterables)