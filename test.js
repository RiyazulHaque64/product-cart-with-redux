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

const result = mans.sort((a, b) => b.id - a.id);
console.log(result);
