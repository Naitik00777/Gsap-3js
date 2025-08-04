function breakText() {

    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent


    var splittedText = h1Text.split("")
    var halfValue = splittedText.length/2

    var clutter = ""

    splittedText.forEach(function (e,idx) {
        if(idx<halfValue){
            clutter = clutter + `<span class="a">${e}</span>`
        }
        else{
            clutter = clutter + `<span class="b">${e}</span>`
        }
    })

    h1.innerHTML = clutter
}

breakText()


gsap.from("h1 .a",{
    y:80,
    stagger:0.15,
    opacity:0,
    delay:0.5,
    duration:0.6
})

gsap.from("h1 .b",{
    y:80,
    stagger:-0.15,
    opacity:0,
    delay:0.5,
    duration:0.6
})