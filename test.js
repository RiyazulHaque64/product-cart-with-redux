const mans = [
  {
    id: 1,
    name: "Rapu",
    age: 20,
  },
  {
    id: 2,
    name: "Rakib",
    age: 45,
  },
  {
    id: 3,
    name: "Sakib",
    age: 26,
  },
];

const result = mans.find((man) => man.id === 2);
console.log(result);

const update = {
  ...result,
  age: result.age - 1,
  quantity: 1,
};

console.log(update);
const update2 = {
  ...result,
  age: result.age - 1,
  quantity: update.quantity + 1,
};
console.log(update2);
