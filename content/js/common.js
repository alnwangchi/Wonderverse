$(document).ready(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
  });

  $('.go_top').click(() => window.scrollTo({ top: 0, behavior: 'smooth' }));

  document.addEventListener(
    'contextmenu',
    function (e) {
      e.preventDefault();
    },
    false
  );
});
