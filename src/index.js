module.exports = function longestConsecutiveLength(array) {
    var show = false;

    var result = [];


    function uniq(a) {
        var seen = {};
        return a.filter(function(item) {
            return seen.hasOwnProperty(item) ? false : (seen[item] = true);
        });
    }
    array = uniq(array);
    array = array.sort((a, b) => a - b);

    try {

        array.reduce((prev, curr, index, arr) => {
            if (curr - prev == 1) {
                result[result.length - 1]++;
            } else {
                result.push(1);
            }
            return curr;
        });
    } catch (error) {
        return 0;
    }



    return Math.max.apply(null, result);

}
