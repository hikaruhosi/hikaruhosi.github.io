$(function() {

$('.a-hover').hover(
  function() {
    $(this).find('.vegetable').addClass('a-active');
  },
  function() {
    $(this).find('.vegetable').removeClass('a-active');
  }
)
});
