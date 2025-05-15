function planSchedule(times){
    return times.filter(time => time.includes("PM"));
}

module.exports = {planSchedule}