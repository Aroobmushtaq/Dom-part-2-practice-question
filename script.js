// parctice question 1
let el=document.createElement("button")
el.innerText="click me!"
el.style.backgroundColor="red"
el.style.color="white"
let aa=document.querySelector("body")
aa.prepend(el)
//practice question 2
let paragraph=document.querySelector("p")
paragraph.classList.add("class")