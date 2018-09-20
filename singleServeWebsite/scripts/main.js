function playVid() {
    var x = document.getElementById("hideMe");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        x.play();
    }
}