var winHeight = $(window).innerHeight();
$(document).ready(function () {
    $(".panel").height(winHeight);
    $("body").height(winHeight*$(".panel").length);
});

window.addEventListener('resize', function (event) {
    $(".panel").height($(window).innerHeight());
});
$(window).on('scroll',function(){
    $(".panelCon").css('bottom',$(window).scrollTop()*-1);
});

//------------------------

document.querySelectorAll('.btn-fermer').forEach(e => {
  e.addEventListener('click', function () {
    document.querySelectorAll('.modal').forEach(e => {
      e.style.top = "-200vh";
    })
  })
});


document.querySelectorAll('.recommencer').forEach(e => {
  e.addEventListener('click', function () {
    document.querySelectorAll('.modal').forEach(e => {
      e.style.display = "none";
    })
  })
});

document.querySelectorAll('.recommencer2').forEach(e => {
  e.addEventListener('click', function () {
    document.querySelectorAll('.modal').forEach(e => {
      e.style.display = "none";
    })
  })
});

// var audio1 = getElementById('audio1');
var audio1 = new Audio('audio/voixintro.mp3');
var audio2 = new Audio('audio/voix02.mp3');
var audio3 = new Audio('audio/voix03.mp3');
var audio4 = new Audio('audio/voix04.mp3');
var audio5 = new Audio('audio/final.mp3');
var fumee = new Audio('audio/fumee.mp3');
var musique = new Audio('audio/musique.mp3');

var playaudio2 = document.getElementsByClassName('playaudio2')[0];
var playaudio3 = document.getElementsByClassName('playaudio3')[0];
var playaudio4 = document.getElementsByClassName('playaudio4')[0];
var playaudio5 = document.getElementsByClassName('playaudio5')[0];

var breche = document.getElementsByClassName('breche')[0];
var yaller = document.getElementsByClassName('yaller')[0];
var attendre = document.getElementsByClassName('attendre')[0];
var recommencer = document.getElementsByClassName('recommencer')[0];

var textcliquez = document.getElementsByClassName('textcliquez')[0];
var script1 = document.getElementsByClassName('script1')[0];
var script5 = document.getElementsByClassName('script5')[0];

document.querySelectorAll('.btn-start').forEach(e => {
  e.addEventListener('click', function () {
    document.querySelectorAll('.modalintro').forEach(e => {
      e.style.display = 'none';
      audio1.play();
      musique.play();
      musique.volume = 0.05;
      setInterval(function(){
        textcliquez.style.display = "flex";
        script1.style.display = "none";
      },22500);
    })
  });
});

playaudio2.addEventListener("click", function(){
  playaudio2.style.display = "none";
  audio2.muted = false;
  audio2.play();
});

playaudio3.addEventListener("click", function(){
  playaudio3.style.display = "none";
  audio3.muted = false;
  audio3.play();
});

playaudio4.addEventListener("click", function(){
  playaudio4.style.display = "none";
  audio4.muted = false;
  audio4.play();
});

playaudio5.addEventListener("click", function(){
  playaudio5.style.display = "none";
  audio5.muted = false;
  audio5.play();
  // yaller.style.display = "flex";
  // attendre.style.display = "flex";
  setInterval(function(){
    breche.style.display = "flex";
  },7000);

  setInterval(function(){
    fusee.style.animation = "fbreche 3s normal forwards ease-in-out";
  },8000);
  console.log("fusee qui part");
  setInterval(function(){
    script5.style.display = "none";
  },9000);

  setInterval(function(){
    fusee.style.display = "none";
    attendre.style.display = "flex";
    yaller.style.display = "flex";
  },10500);
});

//----------ATTENDRE LA FUSEE A LA FIN-----
// attendre.addEventListener("click", function(){
//     attendre.style.display = "none";
//     yaller.style.display = "none";
//     console.log("boutons qui dépop");
//   setInterval(function(){
//     fusee.style.display = "flex";
//     fusee.style.animation = "reversefbreche 3s normal forwards ease-in-out";
//   },4000);
// })



//------------MODALS--------------

document.querySelectorAll('.planetillu').forEach(e => {
  e.addEventListener('click', function () {
    document.getElementById('modal_illustrator').style.display = "flex";
    document.getElementById('modal_illustrator').style.top = "0";
    })
  });

document.querySelectorAll('.planetps').forEach(e => {
  e.addEventListener('click', function () {
    document.getElementById('modal_ps').style.display = "flex";
    document.getElementById('modal_ps').style.top = "0";
    })
  });

document.querySelectorAll('.planetvideo').forEach(e => {
  e.addEventListener('click', function () {
    document.getElementById('modal_video').style.display = "flex";
    document.getElementById('modal_video').style.top = "0";
    })
  });

document.querySelectorAll('.planetdev').forEach(e => {
  e.addEventListener('click', function () {
    document.getElementById('modal_dev').style.display = "flex";
    document.getElementById('modal_dev').style.top = "0";
    })
  });

document.querySelectorAll('.planetuiux').forEach(e => {
  e.addEventListener('click', function () {
    document.getElementById('modal_uiux').style.display = "flex";
    document.getElementById('modal_uiux').style.top = "0";
    })
  });

//modal de fin

document.querySelectorAll('.yaller').forEach(e => {
  e.addEventListener('click', function () {
    document.getElementById('modal_finalcv').style.display = "flex";
    document.getElementById('modal_finalcv').style.top = "0";
    })
  });

document.querySelectorAll('.attendre').forEach(e => {
  e.addEventListener('click', function () {
    document.getElementById('modal_finalatt').style.display = "flex";
    setInterval(function(){
    document.getElementById('modal_finalatt').style.top = "0";
     },4000);
    })
  });

//--------------SCROLL QUAND CLIQUE FUSEE--------
var fusee = document.getElementsByClassName('fusee')[0];
fusee.addEventListener("click", function(){
  window.scrollBy(0,window.innerHeight);
  fumee.play();
});

//--------------BOUTON DE RETOUR------------------
var backbtn = document.getElementsByClassName('backbtn')[0];
backbtn.addEventListener("click", function(){ window.scrollBy(0,-window.innerHeight); });

//--------------BOUTON DE MUTE------------------
var mutebtn = document.getElementById('mutebtn');
mutebtn.addEventListener("click", function(){
  audio1.muted = true;
  audio2.muted = true;
  audio3.muted = true;
  audio4.muted = true;
  audio5.muted = true;
// if (!audio1.muted) {
//     audio1.muted = false;
//     document.getElementById("imgmutebtn").src="mute.png";
//   } else {
//     audio1.muted = true;
  musique.muted = true;
    document.getElementById("imgmutebtn").src="demute.png";
// }
});

//--------------BLOCK SCROLL--------------------
document.documentElement.style.overflow = 'hidden';

//--------------BOUTON FULL SCREEN--------------
// let fullscreen;
// let fsEnter = document.getElementById("fullscreenbtn");
// fsEnter.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (!fullscreen) {
//     fullscreen = true;
//     document.documentElement.requestFullscreen();
//     // fsEnter.innerHTML = "Exit Fullscreen";
//     document.getElementById("imgfscreen").src="outfscreen.png";
//   } else {
//     fullscreen = false;
//     document.exitFullscreen();
//     // fsEnter.innerHTML = "Go Fullscreen";
//     document.getElementById("imgfscreen").src="infscreen.png";
//   }
// });
//----------APPARAITRE TEXTE INTRO 20s APRES CLICK INTRO------------


//----------MUTER LAUDIO EN COURS SI ON CLIQUE SUR LA FUSEE + trembler------------
var section1 = document.getElementById('pane-1');
fusee.addEventListener("click", function(){
  fusee.style.animation = "shake-animation 1s ease infinite";
  audio1.muted = true;
  audio2.muted = true;
  audio3.muted = true;
  audio4.muted = true;
  audio5.muted = true;
});
//----------RECHARGER LE SITE----------





//---------
