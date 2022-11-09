  function numberEverySecond(a, b) {
    let current = a;
    let timerId = setInterval(function() {
        console.log(current);
        if (current == b) {
            clearInterval(timerId);
        };
        current++;
    }, 1000);
};
numberEverySecond(5, 15)

