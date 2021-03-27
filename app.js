let header = document.querySelector('header');
let mainTitle = document.querySelector('.main__title');
let mainSubtitle = document.querySelector('.main__subtitle');
let mainLine = document.querySelector('.main__line');
let hamburger = document.querySelector('.hamburger');
let hamburgerContainer = document.querySelector('.hamburger__container');
let sidebarContainer = document.querySelector('.sidebar__container');

	header.classList.add('loaded');
    mainTitle.classList.add('_loaded');
    mainSubtitle.classList.add('_loaded');
    mainLine.classList.add('line-loaded');


// ПЛАВНАЯ ПРОКРУТКА


  const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


// SLICK SLIDER


$(document).ready(function(){
  $('.slick__slider').slick({
  	mobileFirst: true,
  	autoplay: true,
  	adaptiveHeight:true,
  	arrows:false,
  	zIndex: 1000,
  	slidesPerView: 1,
  });
});


//	HAMBURGER ACTION

  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    hamburgerContainer.classList.toggle("container-active");
    sidebarContainer.classList.toggle("sidebar-active");
  });




  
window.addEventListener('resize', function(e){
  if (window.innerWidth < 768 && sidebarContainer.classList.contains('sidebar-active')) {
  	sidebarContainer.classList.remove('sidebar-active');
  	hamburgerContainer.classList.remove("container-active"); 
  	hamburger.classList.remove("is-active");
  }
  e.preventDefault();
});






  // СКРОЛЛ

  // Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});








			// 	Числа