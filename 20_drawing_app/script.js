const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const decreaseButton = document.getElementById('decrease')
const sizeEl = document.getElementById('size')
const increaseButton = document.getElementById('increase')
const colorButton = document.getElementById('color')
const clearButton = document.getElementById('clear')

let size = 20
let color = 'black'
let isPressed = false
let x
let y

sizeEl.innerText = size

canvas.addEventListener('mousedown', e => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})
canvas.addEventListener('mouseup', e => {
    isPressed = false
    x = undefined
    y = undefined
})
canvas.addEventListener('mousemove', e => {
    if(isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        
        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}
decreaseButton.addEventListener('click', () => {
    if(size > 1){
        size--
    }
    sizeEl.innerText = size
})

increaseButton.addEventListener('click', () => {
    if(size < 20){
        size++
    }
    sizeEl.innerText = size
})
colorButton.addEventListener('change', (e) => {
    color = e.target.value;
})
clearButton.addEventListener('click', () => {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

})