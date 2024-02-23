const numbers = [12, 9, 7, 13, 8];
const double = numbers.map((num) => num * 2);
// console.log(double);
const fiveAdd = numbers.map((num) => num + 5);
// console.log(fiveAdd);
const halves = numbers.map((num) => num / 2);
console.log(halves);

const friends = ["Rakib", "Nokib", "Akbor", "Siam", "Saif", "Yeasin", "Tanjil"];
const lengths = friends.map((frnd) => frnd.length);
console.log(lengths);
const firstLetter = friends.map((frnd) => frnd[0]);
console.log(firstLetter);
