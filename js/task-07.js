 const inpVal = document.querySelector('#font-size-control')
 const outpVal = document.querySelector('#text')

 inpVal.addEventListener("input", onblur)

 function onblur(a) {
    outpVal.style.fontSize = a.currentTarget.value + 'px'
 }