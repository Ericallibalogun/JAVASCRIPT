const createCounter = function(size) {
    return{
        increment: function(){
           return  size += 1;
        },
        decrement: function(){
           return  size -= 1;
        },
        getCount: function() {
            return size;
        },
        reset: function() {
           return size = 0;
        }
    }
}
const counter = createCounter(11);
module.exports = {createCounter};