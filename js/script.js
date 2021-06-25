/*============================================================

    Source Code From Prakash Shahi @ codingnepalweb.com
    3 Tutorials: Sticky Header, Toggle Menu, Scroll-Up Button
    Source: https://www.youtube.com/watch?v=tcskp-ncN0I

==============================================================*/

$(document).ready(function() {

  // Sticky Navbar Script
  $(window).scroll(function() {
    if(this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
    if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // Button Script To "Slide Up" To Top
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
  });

  // Hamburger Menu
  $('.hamburger-menu').click(function(){
      $('.navbar .menu').toggleClass("active"); // bring menu into view
      $('.hamburger-menu i').toggleClass("active"); // change hamburger menu icon to an "x"
  });

  // Owl Carousel Script
  $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
          0:{
              items: 1,
              nav: false
          },
          600:{
              items: 2,
              nav: false
          },
          1000: {
              items: 3,
              nav: false
          }
      }
  });
});





/*===================================================

    Add YEAR to the Footer
    Source Code from StackOverflow: https://stackoverflow.com/a/28627098

=====================================================*/
document.getElementById("year").innerHTML = new Date().getFullYear();
