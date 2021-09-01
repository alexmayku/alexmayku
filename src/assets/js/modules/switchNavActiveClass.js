 $(function() {
	const pageUrl = (window.location.href.substr(window.location.href.lastIndexOf("/")+1).slice(0, -5));
	const $bar = $('.js-bar');
	const $barMobile = $('.js-bar-mobile');

	$(".js-nav li").each(function(){
		const $this = $(this);
		const $link = $this.find('a').not('.option');
		
		const $target = $link.attr('href').slice(0, -5);  
		

		if($target == pageUrl){    
			$(this).addClass("is-current");
		}; 		

		if (pageUrl == 'reveal') {         
			$bar.hide();          
		};
	})
});


