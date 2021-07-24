$(function(){

   $('.blog__inner').slick({
      arrows: false,
      dots: true,
   });

   $('.menu__btn, .menu__list-link, .board-icon-btn').on('click', function(){
      $('.menu__list').toggleClass('menu-list--active');
      $('.logo').toggleClass('logo--active');
      $('.menu__btn').toggleClass('menu__btn--active');
   });

   $('.logo').on('click', function(){
      $('.menu__list').removeClass('menu-list--active');
      $('.logo').removeClass('logo--active');
      $('.menu__btn').removeClass('menu__btn--active');
   });

	$('.menu__list-link, .home').on('click', function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

   var mixer = mixitup('.gallery__content');
   
});