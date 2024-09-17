
//-------Background Mouse Move Animation-------//
document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.getElementById("intractID")

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move();
        });
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});
//-------Background Mouse Move Animation-------//




//--------------Preloader-----------//
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader")

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(document.querySelector(".loader"));
    });
});

var counter = 0;
var interval = setInterval(function () {
    counter++;
    document.querySelector(".counterloader").innerHTML = counter + "%";
    if (counter === 100) {
        clearInterval(interval);
    }
}, 1);
//--------------Preloader-----------//



//-----------Sticky Navbar script-Start-----------//
var navbar = document.getElementById("navbar");
var sidemenu = document.getElementById("sidemenu");

window.onscroll = function () {
    if (window.pageYOffset >= sidemenu.offsetTop) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
}

//-----------Sticky Navbar script-End-----------//



//-----------Autotyping Animation-----------//
var typed = new Typed('#element-1', {
    strings: ['GIS Developer', 'GIS Executive', 'Video Editor', 'Web Designer'],
    typeSpeed: 100,
    loop: true,
    smartBackspace: false,
    backDelay: 1500,
    startDelay: 1000,

});
//-----------Autotyping Animation-----------//

//-----------Side menu script-Start----------//

function openmenu() {
    document.getElementById('sidemenu').style.right = '0';
}
function closemenu() {
    document.getElementById('sidemenu').style.right = '-200px';
}
var mbtn = document.querySelector('#mbtn')
var sidemenu = document.querySelector('#sidemenu')

document.addEventListener('click', e => {
    if (!sidemenu.contains(e.target) && e.target !== mbtn) {
        document.getElementById('sidemenu').style.right = '-200px';
    }
})
//------------Side menu script-End------------//

//------------Tab script-Start-----------------//
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//------------Tab script-End-----------------------------//


//------------skill circle progress bar-start -------------//
var counters = document.querySelectorAll('.counter')
counters.forEach(counter => {
    counter.innerHTML = '0';
    function counterUpdate() {
        var max_value = parseInt(counter.getAttribute('max-value'));
        var count = parseInt(counter.innerHTML);
        if (count < max_value) {
            counter.innerHTML = ++count + '%';
            setTimeout(counterUpdate, 10);
        }
        else {
            counter.innerHTML = max_value + '%';
        }
    }
    counterUpdate();
})
//------------skill circle progress bar-End---------------- //