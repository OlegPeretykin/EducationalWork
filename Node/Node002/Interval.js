

let i=1
const ID_1 = setInterval(() => {
    console.log(`hhhhhhh ${i}`)
    if (i===5) {clearInterval(ID_1)}
    i++
}, 2000)

