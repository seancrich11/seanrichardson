function myFunction() {
    document.getElementsByClassName("fade-in-a")[0].classList.add("fade-in-visible");
    document.getElementsByClassName("fade-in-a")[1].classList.add("fade-in-visible");

}

document.body.addEventListener('mousemove', myFunction);
