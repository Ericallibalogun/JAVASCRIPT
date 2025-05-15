const getKeysAndValues = function(values) {
    array = []
    Object.entries(values).forEach(([key,value]) => {
        array.push([key,value]);
    });
    return array;

}
module.exports = {getKeysAndValues};