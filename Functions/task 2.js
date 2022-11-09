function isPrime(n) {
    if (!Number.isInteger(n) || n > 1000) return "данные неверны";
    else if (n == 1) {
        return "число не является ни простым, ни составным";
    }
    else if (n == 0) {
        return "число не является простым";
    }
    else {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
          return "число не является простым";
        }
        else {
        return "число простое";
        };
        };
    };
    };

console.log(isPrime(5));
console.log(isPrime(0));
console.log(isPrime(10));
console.log(isPrime(1));