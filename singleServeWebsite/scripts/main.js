function playVid() {
    var x = document.getElementById("hideMe");
    if (x.style.display === "block" && x.paused) {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        x.play();
        setTimeout(hideVid, 10750);
    }
}

function hideVid() {
	var x = document.getElementById("hideMe");
	x.pause();
	x.style.display = "none";
}