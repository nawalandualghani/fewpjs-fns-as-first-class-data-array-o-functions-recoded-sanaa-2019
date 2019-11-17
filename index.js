// function wakeDog(){
//   const a = "Xerox"
//   const b = "Border Collie"
//   console.log(`Wake ${a} the ${b}`);
// }
function leashDog(){
  const a = "Boo Radley"
  const b = "Pibble"
  console.log(`Wake ${a} the ${b}`);
}
function walkToPark(){
  const a = "Bunny"
  const b = "Labrador"
  console.log(`Wake ${a} the ${b}`);
}
function throwFrisbee(){
  const a = "Mary J. Blige"
  const b = "Papillon"
  console.log(`Wake ${a} the ${b}`);
}
function walkHome(){
  const a = "Santa Paws"
  const b = "Husky"
  console.log(`Wake ${a} the ${b}`);
}
function unleashDog(){
  const a = "Lauren"
  const b = "Golden Retriever"
  console.log(`Wake ${a} the ${b}`);
}

function wakeDog(dogName,dogBreed){
  console.log(`Wake ${dogName} the ${dogBreed}`);
}
wakeDog("Skippy","Welsh Corgi");
let arr=[wakeDog(),leashDog(),walkToPark(),throwFrisbee(),walkHome(),unleashDog()];
for(let i=0; i<arr.lenght;i++){
  console.log(`Wake ${i[0]} the ${i[1]}`);
}
