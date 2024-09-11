const continueButton = document.getElementById("continue")
const stopButton = document.getElementById("stop")
const [...images] = document.querySelectorAll("img")
let currentImage = 0
let timer
let timerStatus = true
function showNextImage(){
    images[currentImage].classList.remove("active")
    currentImage = (currentImage + 1) % images.length
    images[currentImage].classList.add("active")
}
continueButton.onclick = function(){
    if(timerStatus) return
    timer = setInterval(showNextImage, 1000)
    timerStatus = true
}
stopButton.onclick = function(){
    clearInterval(timer)
    timerStatus = false
}
timer = setInterval(showNextImage, 1000)