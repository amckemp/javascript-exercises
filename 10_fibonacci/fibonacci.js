const fibonacci = function(number) {
    if (number < 1)
    return "OOPS";

    const sequence = [number];
    sequence[0] = 1;
    sequence[1] = 1;

    for (let i = 2; i < number; i++){
        sequence[i] = sequence[i-1] + sequence[i-2];
    }
    return sequence[number-1];

};

// Do not edit below this line
module.exports = fibonacci;
