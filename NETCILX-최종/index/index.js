// let innerHTML = '';
// init();

//     const $img = document.getElementsByClassName("img");
//     function showModal(title, content, img) {
//         const $imgbox = document.getElementById("movieImg");
//       // const $imgbox = $('#movieImg');
//       if (event.target.parentNode.classList.contains("is-selected")) {
//         selectMovie = title;
//         $("#movieTitle").text(title);
//         $("#moviestory").text(content);
        
//         innerHTML += `<img src="${img}" class="img">`;
//         $imgbox.innerHTML = innerHTML;
//         $("#myModal").modal();
//       }
//     }

//     function init() {
//       let movieList = document.getElementById('movieList');
//       for (var i = 0; i < movies.length; i++) {
//         const movie = movies[i];
//         innerHTML += `
//         <div class="gallery-cell">
//                 <img class="img movie"
//                     src="${movie.img}"
//                     onclick="showModal('${movie.title}','${movie.content}','${movie.img}')">
//         </div>  
//         `;
//       }
//       movieList.innerHTML = innerHTML;

//       setTimeout(function () {
//         loadJs("../slide/slide.js");
//         setTimeout(() => {
//           const galleryCells = document.getElementsByClassName('gallery-cell');
//           for (let i = 0; i < galleryCells.length; i++) {
//             document.getElementsByClassName('gallery-cell')[i].style.height = '650px';
//           }
//         }, 0);
//       }, 0);
//     }

//     function loadJs(url) {
//       var script = document.createElement('script');
//       script.src = url;
//       script.setAttribute('async', 'true');
//       document.documentElement.lastChild.appendChild(script);
//     }