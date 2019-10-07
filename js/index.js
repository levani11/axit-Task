var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    } else {
    document.getElementById("header").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

function openNav() {
  document.getElementById("navbar-slider").classList.add('active');
}

function closeNav() {
  document.getElementById("navbar-slider").classList.remove('active');
}


let a = 0;
$(window).scroll(function() {
  let oTop = $('#pricing').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        
        {
          duration: 2000,
          easing: 'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
    });
    a = 1;
  }
});