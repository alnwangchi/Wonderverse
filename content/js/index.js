$(document).ready(function () {
  $('.btn_close').on('click', function () {
    $(this).parents('.fixed_news').remove();
  });
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
    speed = 6;
  };
  oMain.onmouseout = function () {
    speed = 4;
  };

  const v1 = document.querySelector('#indexV1');
  const v1Btn = document.querySelector('.toggleVoice1');
  v1Btn.addEventListener('click', () => {
    if (v1.muted) {
      v1Btn.src = './content/assets/img/voice.svg';
    } else {
      v1Btn.src = './content/assets/img/novoice.svg';
    }
    v1.muted = !v1.muted;
  });

  const v2 = document.querySelector('#indexV2');
  const v2Btn = document.querySelector('.toggleVoice2');
  v2Btn.addEventListener('click', () => {
    if (v2.muted) {
      v2Btn.src = './content/assets/img/voice.svg';
    } else {
      v2Btn.src = './content/assets/img/novoice.svg';
    }
    v2.muted = !v2.muted;
  });
});
