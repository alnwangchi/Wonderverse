$(document).ready(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
  });

  $('.go_top').click(() => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // 輪播區塊
  let oMain = document.querySelector('.carousel_main');
  let oUl = oMain.getElementsByTagName('ul')[0];
  let aLi = oUl.getElementsByTagName('li');

  let speed = 4;
  oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;
  oUl.style.width = aLi[0].offsetWidth * aLi.length + 'px';

  function move() {
    if (oUl.offsetLeft < -oUl.offsetWidth / 2) {
      oUl.style.left = '0';
    }
    if (oUl.offsetLeft > 0) {
      oUl.style.left = -oUl.offsetWidth / 2 + 'px';
    }
    // "speed" 前面正負號控制方向
    oUl.style.left = oUl.offsetLeft - speed + 'px';
  }
  const timer = setInterval(move, 30);

  oMain.onmouseover = function () {
    speed = 8;
  };

  oMain.onmouseout = function () {
    speed = 4;
  };
});
