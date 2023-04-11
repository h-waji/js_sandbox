$(function(){
  // alert('jQuery is ready.')
  $('#feature').fadeOut();
});

// スクロール時の動作
$(window).on('scroll', function() {
  // ヘッダーの背景色を変更する
  if ($(this).scrollTop() > 50) {
    $('header').addClass('scrolled');
  } else {
    $('header').removeClass('scrolled');
  }
  
  // フィーチャーセクションに到達したら、要素をフェードインする
  var featureTop = $('#feature').offset().top;
  var featureHeight = $('#feature').height();
  var scrollBottom = $(window).scrollTop() + $(window).height();
  
  if (scrollBottom > featureTop + featureHeight / 2) {
    // $('#feature .fade-in').addClass('show');
    $('#feature').fadeIn(3000);
  }
});

// メニューのスムーズスクロール
$('a[href^="#"]').on('click', function() {
  var speed = 1500;
  var href = $(this).attr('href');
  var target = $(href == '#' || href == '' ? 'html' : href);
  var position = target.offset().top;
  
  $('html, body').animate({scrollTop: position}, speed, 'swing');
  return false;
});
