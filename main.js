const box = document.querySelector('.box')
const amount = 667
const colors = ['red','green','blue','purple','yellow']

console.log(colors.at(-2) );


for(let i = 1; i <= amount;i++) {
    let square = document.createElement('div')
    square.classList.add('square')
    box.append(square)
    
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    
}


function setColor(el) {
    el.style.background = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
}

function removeColor(el) {
    el.style.background = ''
}

function randomColor() {
    return  Math.floor(Math.random() * 256)
}

