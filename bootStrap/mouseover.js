const button=document.querySelector('button')
const counter=document.querySelector('h1')
console.log(button)

let count=1

button.addEventListener('click',()=>{
    counter.innerHTML="clicked"
})

button.addEventListener('mouseover',()=>{
    counter.innerHTML="mouse is overed"
})

button.addEventListener('mouseout',()=>{
    counter.innerHTML="mouse is out"
})