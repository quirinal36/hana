$(function(){
  $('.idxE_slider').bxSlider({
    mode: 'fade',
    auto: true,
    pause: 6000
  });
});
$(function(){
  $('.idxF_slider').bxSlider({
    auto: true,
    pause: 2000,
    slideWidth: 264,
    minSlides: 3,
    maxSlides: 4,
    moveSlides: 1,
    slideMargin: 40,
    pager: true,
    controls: true,
    nextSelector: ".idxF_next",
    prevSelector: ".idxF_prev",
    nextText: "다음",
    prevText: "이전"
  });
});
