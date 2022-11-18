$(document).ready(function () {
  var $tabs = $('.tab');
  var $tabContents = $('.tab-content');
  var $chatBtns = $('.chat-button');
  // TODO: 切換圖片
  var showTab = function () {
    var tabIndex = $('.tabs').find('.selected').index();
    $tabContents.eq(tabIndex).show();
    $tabContents.eq(tabIndex).siblings('.tab-content').hide();
  };
  $tabs.eq(0).addClass('selected');
  showTab();
  $tabs.click(function () {
    $(this).addClass('selected').siblings('.selected').removeClass('selected');
    showTab();
  })

  var openSingleWindow = function (windowInstance, url) {
    if (!window[windowInstance] || window[windowInstance].closed) {
      window[windowInstance] = window.open(url, '_blank');
    } else {
      window[windowInstance].location = url;
    }
    window[windowInstance].focus();
  }

  $chatBtns.click(function () {
    const url = $(this).attr('data-url');
    openSingleWindow('chat', url);
  })

});
