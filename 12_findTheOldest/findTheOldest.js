const findTheOldest = function(people) {
    const oldestOrdered = people.sort(function(a, b){
        if (a.yearOfDeath === undefined){
            const currentYear = (new Date()).getFullYear();

            a.yearOfDeath = currentYear;
        }

        if (b.yearOfDeath === undefined){
            const currentYear = (new Date()).getFullYear();

            b.yearOfDeath = currentYear;
        }
        const previous = a.yearOfDeath - a.yearOfBirth;
        const next = b.yearOfDeath - b.yearOfBirth

        if (previous > next){
            return -1;//if age1 >age2, move age1 up
          } else return 1;
    });
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
