const getTheTitles = function(array) {
    const newArray = array.map(function(element){
        return element.title;
    });
    return newArray;
};

/* OR

const getTheTitles = function(array) {
    const newArray = array.map(element => element.title);
    return newArray;
};
*/

// Do not edit below this line
module.exports = getTheTitles;
