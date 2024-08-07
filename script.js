/* Set the width of the sidebar to 250px (show it) */
function toggleNav() {
    var element = document.getElementById("mySidepanel");
    var w = window.innerWidth;
    if (element.style.width == "20vw" || element.style.width == "40vw") {
        document.getElementById("mySidepanel").style.width = "0px";
        document.getElementById("overlay").style.display = "none"
    }
    else {
        if (w <= "840") {
            document.getElementById("mySidepanel").style.width = "40vw";
        }
        else {
            document.getElementById("mySidepanel").style.width = "20vw";
        }    
        document.getElementById("overlay").style.display = "block"
    }
}
  
function myFunction() {
    document.getElementsByClassName("fade-in-a")[0].classList.add("fade-in-visible");
    document.getElementsByClassName("fade-in-a")[1].classList.add("fade-in-visible");
}

document.body.addEventListener('mousemove', myFunction);
