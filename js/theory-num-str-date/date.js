// console.log(new Date());
const now = new Date();

const start = new Date(1000 * 60 * 60 * 24 * 365);
console.log(start);

const date = new Date(2011, 6, 31, 12, 45, 59);
console.log(date);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

now.setFullYear(2030);
