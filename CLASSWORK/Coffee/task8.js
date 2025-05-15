const returnUsersAbove80 = function(data) {
    const qualifiedUsers = [];

    for (const user in data) {
        const mathScore = data[user].scores.math;
        const englishScore = data[user].scores.english;

        if (mathScore > 80 || englishScore > 80) {
            qualifiedUsers.push(data[user].name && data[user].scores);
        }
    }

    return qualifiedUsers;
}

module.exports = {returnUsersAbove80}