// Code your solutions in this file//
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    ;
  }

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    ;
  }

  return gifts;
}

wrapGifts(gifts);

const names = ['Guadalupe','Ollie','Aki'];
let messages = [];
function writeCards(names) {
    for( let i = 0; i<names.length; i++ ){
      const message = `Thank you, ${names[i]}, for the wonderful surprise gift! `;
      messages.push(message);
    }
return messages;
}
console.log(writeCards(names));

let count= 10;
function countDown( count){
while (count>= 0){
    console.log(count);
    count--;
}
}
