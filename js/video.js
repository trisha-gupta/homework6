var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play()
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause()
    console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate = video.playbackRate*0.8;
	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
    video.playbackRate = video.playbackRate*1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	video.currentTime= video.currentTime+60;
	if (video.currentTime>594) {
		video.currentTime=0
	}
	console.log("Current location is " + video.currentTime);
} 

function mute() { 
	const mute = document.getElementById('mute')

		if(video.muted) {
			mute.innerHTML='Mute'
			video.muted=false
			console.log("Unmuted");
		}
		else {
			mute.innerHTML='Unmute'
			video.muted=true
			console.log("Muted");
		}
}

function changeVolume() {
	const slider = document.getElementById('volumeSlider')
	const output = document.getElementById('volume')
	output.innerHTML = slider.value;

	slider.oninput = function() {
		output.innerHTML = this.value+"%";
		console.log("Volume is " + this.value);
	  }
	
}
       

function gray() { 
	var element, name, arr;
  	element = document.getElementById("myVideo");
  	name = "grayscale";
  	arr = element.className.split(" ");
  	if (arr.indexOf(name) == -1) {
    element.className += " " + name;
  }
	console.log("In grayscale")
}

function color() {
    var element = document.getElementById("myVideo");
  	element.className = element.className.replace(/\bgrayscale\b/g, "");
	console.log("In color") 
}
