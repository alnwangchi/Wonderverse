$(document).ready(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
  });

  $('.go_top').click(() => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // 輪播區塊
  let oMain = document.querySelector('.carousel_main');
  let oUl = oMain.getElementsByTagName('ul')[0];
  let oLi = oUl.getElementsByTagName('li');

  let space = 10;
  oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;
  oUl.style.width = oLi[0].offsetWidth * oLi.length + 'px';

  function move() {
    if (oUl.offsetLeft < -oUl.offsetWidth / 2) {
      oUl.style.left = 0;
    }
    if (oUl.offsetLeft > 0) {
      oUl.style.left = -oUl.offsetWidth / 2 + 'px';
    }
    oUl.style.left = oUl.offsetLeft - space + 'px';
  }
  let timer = setInterval(move, 30);

  oMain.onmouseover = function () {
    space = 30;
  };
  //  開始輪播
  oMain.onmouseout = function () {
    space = 10;
  };
});
