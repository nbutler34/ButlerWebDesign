function playVid() {
    var x = document.getElementById("hideMe");
    if (x.style.display === "block" && x.paused) {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        x.play();
        setTimeout(hideVid, 10800);
    }
}

function hideVid() {
	var x = document.getElementById("hideMe");
	x.pause();
	x.currentTime = 0;
	x.load();
	x.style.display = "none";
}