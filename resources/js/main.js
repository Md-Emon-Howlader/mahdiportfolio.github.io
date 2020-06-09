$(document).ready(function(){

  // sticky-menu
  $('.js-sticky-menu').waypoint(function(direction){
     if (direction == 'down') {
        $('nav').addClass('sticky');
     }else{
        $('nav').removeClass('sticky');
     }
  }); 

   // mixitup
        var mixer = mixitup('.container'); 

	 var typed = new Typed('span',{
		  strings: [
		   "A Designer.",
		   "A Developer.",
		   "A Freelancer.",
		   "A Programmer.",
		   "A Computer Engineer.", 
		   ],
		  typeSpeed: 70,
		  backSpeed: 50,
		  loop:true,  
		  smartBackspace:true,
          shuffle:false,
          backDelay: 2000,

		}); 

 // owl-carousel
 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:false,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
}); 
   
// Progress-Bar
   $('#progressbar1').LineProgressbar({
    percentage: 75,
    fillBackgroundColor: '#C9A04F'
   });

   $('#progressbar2').LineProgressbar({
    percentage: 60,
    fillBackgroundColor: '#ff3f34'
   });

   $('#progressbar3').LineProgressbar({
    percentage: 55,
    fillBackgroundColor: '#1abc9c'
   });

   $('#progressbar4').LineProgressbar({
    percentage: 45,
    fillBackgroundColor: '#3c40c6'
   });

   $('#progressbar5').LineProgressbar({
    percentage: 65,
    fillBackgroundColor: '#0be881'
   });

   $('#progressbar6').LineProgressbar({
    percentage: 59,
    fillBackgroundColor: '#1e272e'
   }); 
   
// Jquery-nav
$('.main-menu').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 950,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing'
  
});



});

 