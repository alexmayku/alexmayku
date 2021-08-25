import { countdown } from 'jquery-countdown';

$('.countdown').each(function() {
  const $this = $(this)
  const finalDate = $(this).data('countdown');
  
  $this.countdown(finalDate, function(event) {
  	const $days = $this.find('.countdown__days');
  	const $minutes = $this.find('.countdown__minutes');
  	const $hours = $this.find('.countdown__hours');
  	const $seconds = $this.find('.countdown__seconds');

  	$days.html(event.strftime('%D'));
  	$hours.html(event.strftime('%H'));
  	$minutes.html(event.strftime('%M'));
  	$seconds.html(event.strftime('%S'));
  });
});
