const countdown = () => {
    const clock = document.getElementById('timer')

    const date = new Date("September 5, 2024 3:20:00").getTime()
    const today = new Date().getTime()
    
    const difference = date - today

    let s = Math.floor((difference % (1000 * 60) / 1000))
    let m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let d = Math.floor((difference / (1000 * 60 * 60 * 24)))

    const time = `${d} : ${h} : ${m} : ${s}`

    clock.innerText = time
    if( d && h && m && s === 0){
        alert('Time is up')
    }
}

setInterval(countdown, 1000)
