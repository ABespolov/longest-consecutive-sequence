module.exports = function longestConsecutiveLength(array) {

    var result = [1];
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
