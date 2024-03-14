// console.log(new Date());
// const now = new Date();

// const start = new Date(1000 * 60 * 60 * 24 * 365);
// console.log(start);

// const date = new Date(2011, 6, 31, 12, 45, 59);
// console.log(date);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());

// now.setFullYear(2030);
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleDateString());
// console.log(now.toLocaleTimeString());

// const now = new Date(); 
let mode = 'full'
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const DateBtn = document.getElementById('date')
const TimeBtn = document.getElementById('time')

function bindMode(name) {
    return function () {
        mode = name
    update()

    }
}

fullBtn.onclick = bindMode('full')

DateBtn.onclick = bindMode('date')

TimeBtn.onclick = bindMode('time')

setInterval(update, 1000)

update()

function update() {
    output.textContent = format(mode)
}

function format(formatMode) {
    const now = new Date()
    switch (formatMode) {
        case 'time': return now.toLocaleTimeString()
        case 'date': return now.toLocaleDateString()
        case 'full': return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        default:return now.toLocaleTimeString()
    }

}
