const members = ["Emily","Jack","Sophia","Daniel"];
const books = ["Java","Python","Javascript","DEll"];
const distribute = function() {
   for ( const [index] of members.entries() ) {
       console.log(`${members[index]} gets  ${books[index]}`);
   }
}

console.log(distribute())

module.exports = {distribute}
