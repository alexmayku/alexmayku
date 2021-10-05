const $accordion = $('.js-accordion');
$('.js-accordion .accordion__section').find('.accordion__body').hide();

$accordion.on('click', '.accordion__head', function () {
  const $this = $(this);

  $this.parent().toggleClass('is-active');
  $this.next().slideToggle();
  $this
    .parent()
    .closest('.js-accordion')
    .siblings()
    .find('.accordion__section')
    .removeClass('is-active');

  $this.parent().closest('.js-accordion').siblings().find('.accordion__body').slideUp();
});

$accordion.eq(2).find('.accordion__head').trigger('click');
