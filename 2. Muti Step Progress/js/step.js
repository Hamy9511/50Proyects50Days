const progress = document.querySelector(".container__barProgress__lineProgress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".container__step")

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add("container__step__position");
        } else {
            circle.classList.remove("container__step__position")
        }
    })

    const actives = document.querySelectorAll(".container__step__position")
    if (matchMedia('(min-width: 800px)').matches) {
        progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    }else{
        progress.style.height = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    }
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}