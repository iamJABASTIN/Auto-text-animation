const textEl = document.querySelector('.text')
const speedEl = document.querySelector('.speed')
let idx = 1
let speed = 300 / speedEl.value;
const text = "I am the best programmer"
autoText()

function autoText() {
    textEl.innerText = text.slice(0,idx)
    ++idx
    if(idx > text.length) idx = 1
    setTimeout(autoText, speed)
}

speedEl.addEventListener('input',(e)=>{
    speed = 300 / e.target.value
})
