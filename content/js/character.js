$(document).ready(function () {
  var $tabs = $('.tab');
  var $tabContents = $('.tab-content');
  var $chatBtns = $('.chat-button');
  var showTab = function () {
    var tabIndex = $('.tabs').find('.selected').index();
    $tabContents.eq(tabIndex).siblings('.tab-content').fadeOut();
    $tabContents.eq(tabIndex).fadeIn(1200);
  };
  $tabs.eq(0).addClass('selected');
  showTab();
  $tabs.click(function () {
    $(this).addClass('selected').siblings('.selected').removeClass('selected');
    showTab();
  });

  var openSingleWindow = function (windowInstance, url) {
    if (!window[windowInstance] || window[windowInstance].closed) {
      window[windowInstance] = window.open(url, '_blank');
    } else {
      window[windowInstance].location = url;
    }
    window[windowInstance].focus();
  };

  $chatBtns.click(function () {
    const url = $(this).attr('data-url');
    openSingleWindow('chat', url);
  });

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
