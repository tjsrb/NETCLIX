let dot_select_idx = 0;
let autoSlideInterval = null;
const $slide = document.getElementsByClassName("boxoffice-slide");
const $star = document.getElementsByClassName("star");

for (let i = 0; i < $star.length; i++) {
    $star[i].addEventListener('click', function () {
        if (event.target.getAttribute('fill') !== null) {
            event.target.removeAttribute('fill');
        } else {
            event.target.setAttribute('fill', "#fdff00");
        }
    });
}

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

function autoSlide() {
    autoSlideInterval = setInterval(() => {
        const dot = document.getElementsByClassName('dot');
        dot[(++dot_select_idx) % 8].click();
        // if(dot_select_idx === 7){
        //   dot_select_idx = -1;
        // }
    }, 3000);
}

$.ajaxPrefilter('json', function (options, orig, jqXHR) { if (options.crossDomain && !$.support.cors) return 'jsonp' });

$.ajax({
    dataType: 'jsonp',
    // jsonpCallback: "callback",
    type: "GET",
    url: "https://openapi.naver.com/v1/search/movie.json",
    headers: {
        'X-Naver-Client-Id': 'vwlXL4GR6eWjlUF3MqAR',
        'X-Naver-Client-Secret': 'SJb0EOekYn'
    },
    success: function (res) {
        alert(res);
    }
})