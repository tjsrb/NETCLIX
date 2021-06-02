let dot_select_idx = 0;
let autoSlideInterval = null;
      setTimeout(() => {
  const dot = document.getElementsByClassName('dot');
  for (let i = 0; i < dot.length; i++) {
    dot[i].addEventListener('click', function () {
      dot_select_idx = i;
    });

    dot[i].addEventListener('mouseover', function () {
      clearInterval(autoSlideInterval);
      dot[i].click();
    });

    dot[i].addEventListener('mouseleave', function () {
      autoSlide();
    })
  }
}, 0);
autoSlide();