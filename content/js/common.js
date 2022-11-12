$(document).ready(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
  });

  $('.go_top').click(() => $('html, body').animate({ scrollTop: 0 }, 'slow'));
});
