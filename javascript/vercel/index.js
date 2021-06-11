// Vercel challenge

let map = new Map()
const FIVE_MIN = 5 * 60 * 1000;

const recordHit = () => {
    const currDate = new Date()
    const minute = currDate.getMinutes()
    const mapElement = map.get(minute)
    if ((currDate - mapElement.date) > FIVE_MIN) {
        map.set(minute, {
            count: 1,
            date: currDate
        })
    }
}

const getWantedMinutes = () => {
    const currDate = new Date()
    let currMinute = currDate.getMinutes()
    const wantedMinutes = []
    for (let i = 0; i < 5; i++) {
        if (currMinute === -1) {
            currMinute = 59;
        }
        wantedMinutes.push(currMinute)
        currMinute -= 1;
    }
}

const getLastFiveMinuteHits = () => {
    let currDate = new Date()
    let wantedMinutes = getWantedMinutes()
    let count = 0
    for (let i = 0; i < wantedMinutes.length; i++) {
        const elem = wantedMinutes[i]
        const mapElem = map.get(elem)
        if (mapElem && ((mapElem.date - currDate) <= FIVE_MIN)) {
            count += mapElem.count
        }
    }
    return count
}