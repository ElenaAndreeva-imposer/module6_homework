function getSumNumber(n) {
    return (function(num) {
        return (n + num);
    })
};
const sumNumber = getSumNumber(5);
const sum = sumNumber(10);
console.log(sum);

