
// //-------Background Mouse Move Animation-------//
// document.addEventListener('DOMContentLoaded', () => {
//     const interBubble = document.getElementById("intractID")

//     let curX = 0;
//     let curY = 0;
//     let tgX = 0;
//     let tgY = 0;

//     function move() {
//         curX += (tgX - curX) / 20;
//         curY += (tgY - curY) / 20;
//         interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
//         requestAnimationFrame(() => {
//             move();
//         });
//     }

//     window.addEventListener('mousemove', (event) => {
//         tgX = event.clientX;
//         tgY = event.clientY;
//     });

//     move();
// });
// //-------Background Mouse Move Animation-------//




//--------------Preloader-----------//
// window.addEventListener("load", () => {
//     const loader = document.querySelector(".loader")

//     loader.classList.add("loader--hidden");

//     loader.addEventListener("transitionend", () => {
//         // document.body.removeChild(document.querySelector(".loader"));
//     });
// });

// var counter = 0;
// var interval = setInterval(function () {
//     counter++;
//     document.querySelector(".counterloader").innerHTML = counter + "%";
//     if (counter === 100) {
//         clearInterval(interval);
//     }
// }, 1);
//--------------Preloader-----------//
