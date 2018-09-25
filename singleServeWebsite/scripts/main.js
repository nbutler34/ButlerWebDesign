function playVid() {
    var x = document.getElementById("hideMe");
    if (x.style.display === "block") {
        x.style.display = "none";
        x.pause();
        x.currentTime = 0;
        x.load();
    } else {
        x.style.display = "block";
        x.play();
        setTimeout(playVid, 10800);
    }
}

function hideVid() {
	var x = document.getElementById("hideMe");
    x.style.display = "none";
	x.pause();
	x.currentTime = 0;
	x.load();
}