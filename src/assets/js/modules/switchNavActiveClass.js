 $(function() {
	const pageUrl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
	const $bar = $('.js-bar');
	const $barMobile = $('.js-bar-mobile');

	$(".js-nav li").each(function(){
		const $this = $(this);
		const $link = $this.find('a').not('.option');		
		const $target = $link.attr('href') ? $link.attr('href') : null;  	
		console.log(pageUrl, $target)

		if ($target === null) {
			return;
		}	

		if($target == pageUrl){    
			$(this).addClass("is-current");
		}; 		

		if (pageUrl == 'reveal') {         
			$bar.hide();          
		};
	})
});

