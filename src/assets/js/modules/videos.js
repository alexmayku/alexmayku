const $videoContainer = $('.js-video-container');

$videoContainer.on('click', '.js-init-video', function(e) {
	e.preventDefault();
	const $this = $(this);

	$this.parent().next().get(0).play();
	$this.parent().hide();
	$this.parent().closest('.video__inner').removeClass('has-overlay');
});

$(".js-video").on('ended', function() {
	$this = $(this);

	$this.parent().addClass('has-overlay');
	$this.siblings().slideDown('slow');
});


$('.js-video-machine').on('ended', function() {
	$('.hero--machine .hero__content').addClass('is-revealed');
});




// Rotate Video On SCroll


// var frameNumber = 0; // start video at frame 0
//     // lower numbers = faster playback
// var playbackConst = 100; 
//     // get page height from video duration
//     // setHeight = document.getElementById("set-height") 
//     // select video element         
//    var vid = document.getElementById('v0'); 

//     // var vid = $('#v0')[0]; // jquery option

// // dynamically set the page height according to video length
// // vid.addEventListener('loadedmetadata', function() {
// // 	console.log(vid.duration)
// //   setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
// // });


// // Use requestAnimationFrame for smooth playback
// function scrollPlay(e){  
// 	console.log(window.pageYOffset)
//   var frameNumber  = window.pageYOffset/playbackConst;
//   vid.currentTime  = frameNumber;
//   window.requestAnimationFrame(scrollPlay);
// 	console.log(window.pageYOffset/playbackConst)

// }

// window.requestAnimationFrame(scrollPlay);
