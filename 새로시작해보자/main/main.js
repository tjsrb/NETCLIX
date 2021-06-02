let dot_select_idx = 0;
let autoSlideInterval = null;
const $hidden = document.getElementsByClassName("hidden");
const $slide = document.getElementsByClassName("boxoffice-slide");
const $star = document.getElementsByClassName("star");

for (let i = 0; i < $star.length; i++) {   /*별을 클릭하면 색이 변하는 이벤트*/
  $star[i].addEventListener('click', function () {
    if (event.target.getAttribute('fill') !== null) {
      event.target.removeAttribute('fill');
    } else {
      event.target.setAttribute('fill', "#fdff00");
    }
  });
}
/*마우스를 올렸을때 별을 보이게 하는 이벤트*/
for (let i = 0; i < $slide.length; i++) {
  $slide[i].addEventListener('mouseover', showStar);
}
for (let i = 0; i < $slide.length; i++) {
  $slide[i].addEventListener('mouseleave', hideStar);
}
function hideStar() {
  if (event.target.firstChild.nextSibling.tagName !== 'IMG') {
    return;
  }
  const id = event.target.firstChild.nextSibling.id.split('_')[1];
  document.getElementById('star_' + id).classList.add('hidden');
}

function showStar() {
  if (event.target.tagName !== 'IMG') {
    return;
  }
  const id = event.target.id.split('_')[1];
  document.getElementById('star_' + id).classList.remove('hidden');
}