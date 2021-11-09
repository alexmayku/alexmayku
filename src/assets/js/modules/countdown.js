import { countdown } from 'jquery-countdown';

export const initCountdown = (date) => {
  $('.countdown').each(function() {
    const $this = $(this);
    const finalDateParsed = new Date(Date.parse(date));
    const finalDateMiliseconds = finalDateParsed.getTime();

    $this
      .countdown(finalDateMiliseconds, function(event) {
        if (event.elapsed != true) {
          const $days = $this.find('.countdown__days');
          const $minutes = $this.find('.countdown__minutes');
          const $hours = $this.find('.countdown__hours');
          const $seconds = $this.find('.countdown__seconds');

          $days.html(event.strftime('%D'));
          $hours.html(event.strftime('%H'));
          $minutes.html(event.strftime('%M'));
          $seconds.html(event.strftime('%S'));
        }

        if (event.elapsed == true) {
          $(this).hide();
        }
      })
      .on('finish.countdown', function() {
        $(this).hide();
      });
  });
};
