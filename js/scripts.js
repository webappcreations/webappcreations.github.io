

$(document).ready(function() {

  var $heroteaser_elements = $('.heroteaser_element'),
      $heroteaser_element_final = $('.heroteaser_element_final'),
      $mainbuttons = $('.mainbutton'),
      $heroteaser = $('.heroteaser'),
      $shield = $('#shield'),
      $hero_mainbuttons = $('.hero_mainbuttons')
  ;


  TweenMax.set( $shield, { scale: 5, alpha: 0 } );
  TweenMax.to($shield, 2, { autoAlpha: 1, scale: .5 }, 5 );



  function doSomething() {
    TweenMax.to($heroteaser_element_final, 3, { autoAlpha: 1, display:'block', left: "0"}, 5 );
  }

  TweenMax.set( $heroteaser_elements, { display:'none', alpha: 0, left: "150" } );
  TweenMax.set( $heroteaser_element_final, { display:'none', alpha: 0, left: "150" } );
  // TweenMax.set( $heroteaser_elements.eq(0), { autoAlpha: 1, display:'block', left: "0" } );
  var tl = new TimelineMax({repeat:3, onComplete: doSomething});

  $heroteaser_elements.each(function(){
    tl.add( TweenMax.to($(this), 3, { autoAlpha: 1, display:'block', left: "0"}, 5 ));
    tl.add( TweenMax.to($(this), 2, { autoAlpha: 0, display:'none', left: "-50", delay: 8}, 5 ));
  });
  // tl.add( TweenMax.to($heroteaser_elements.eq(0), 1.5, { autoAlpha: 1, display:'block'}, 0.2 ));

  // tl.play();

  // tl.to( $hero_mainbuttons, 1.5, { alpha: 0, left: "150", overwrite:true}, 0.2 )

  // TweenMax.staggerTo( $heroteaser_elements, 2, { autoAlpha: 1, display:'block', left: "150", ease : Elastic.easeInOut }, 1 );

  TweenMax.set( $hero_mainbuttons, { alpha: 0, left: "150" } );
  $mainbuttons.on('mouseenter', function( e ){
    var index = $mainbuttons.index( this );
    TweenMax.to( $heroteaser, 2, { alpha: 0, marginLeft: "-100", scale: ".5", overwrite:true, ease: Strong.easeOut });
    TweenMax.to( $hero_mainbuttons.eq(index), 1.5, { alpha: 1, left: "0", overwrite:false, delay: .75 }, 0.2 )
  } ).on('mouseleave', function(){
    TweenMax.to( $hero_mainbuttons, 1.5, { alpha: 0, left: "150", overwrite:true}, 0.2 )
    TweenMax.to( $heroteaser, 2, { alpha: 1, marginLeft: "0", scale: "1", delay: .75, overwrite:false, ease: Strong.easeOut });
    // TweenMax.staggerTo( $footerMenu.find( 'a' ), .2, { alpha: 0 }, 0.2 )
  });


  var $product_overview = $('.product_overview'),
      $product_overview_more = $('.product_overview_more'),
      $product_overview_icon = $('.product_overview_icon'),
      $product_overview_description = $('.product_overview_description')
  ;

  var index = '';
  $product_overview_more.on('mouseenter', function( e ){
    index = $product_overview_more.index( this );
    // console.log(index);
    TweenMax.to( $product_overview_icon.eq(index), 2, { height: "50px", overwrite:true, ease: Strong.easeOut });
    TweenMax.to( $product_overview_description.eq(index), 2, { autoAlpha: 1, display:'block', delay: .75 , overwrite:false, ease: Strong.easeOut });
  } ).on('mouseleave', function(){
    TweenMax.to( $product_overview_description.eq(index), 2, { autoAlpha: 0, display:'none', overwrite:true, ease: Strong.easeOut });
    TweenMax.to( $product_overview_icon.eq(index), 2, { height: "180px", delay: .75, overwrite:false, ease: Strong.easeOut });
  });

    
  var $card_wrap = $('.hero_card_wrap');
  var $card = $('.hero_card img');

  function complete1() {  
    $card.prop('src', 'images/webappcreations_back14_bright.jpg');
    TweenMax.to( $card, 2, { scale:"1", overwrite:true, ease: Strong.easeOut });
  }  
  function complete2() {  
    $card.prop('src', 'images/webappcreations_front14_bright.jpg');
    TweenMax.to( $card, 2, { scale:"1", overwrite:true, ease: Strong.easeOut });
  }
    
/*  $card_wrap.on('mouseenter', function( e ){
    TweenMax.to( $card, 1, { scale:".1", overwrite:true, ease: Strong.easeOut, onComplete: complete1 });
  } ).on('mouseleave', function(){
    TweenMax.to( $card, 1, { scale:".1", overwrite:true, ease: Strong.easeOut, onComplete: complete2 });
  });*/
    
    
function toggle() {
	if ( toggleState ) {
        complete1();
        toggleState = false
	}

	else {
        complete2();
        toggleState = true;
	}
}
  var toggleState = true;
  $card_wrap.on('click', function( e ){
    TweenMax.to( $card, 1, { scale:".1", overwrite:true, ease: Strong.easeOut, onComplete: toggle });
  });



//
//
//   // Variables
//   var $codeSnippets = $('.code-example-body'),
//       $nav = $('.navbar'),
//       $body = $('body'),
//       $window = $(window),
//       $popoverLink = $('[data-popover]'),
//       navOffsetTop = $nav.offset().top,
//       $document = $(document),
//       entityMap = {
//         "&": "&amp;",
//         "<": "&lt;",
//         ">": "&gt;",
//         '"': '&quot;',
//         "'": '&#39;',
//         "/": '&#x2F;'
//       }
//
//   function init() {
//     $window.on('scroll', onScroll)
//     $window.on('resize', resize)
//     $popoverLink.on('click', openPopover)
//     $document.on('click', closePopover)
//     $('a[href^="#"]').on('click', smoothScroll)
//     buildSnippets();
//   }
//
//   function smoothScroll(e) {
//     e.preventDefault();
//     $(document).off("scroll");
//     var target = this.hash,
//         menu = target;
//     $target = $(target);
//     $('html, body').stop().animate({
//         'scrollTop': $target.offset().top-40
//     }, 0, 'swing', function () {
//         window.location.hash = target;
//         $(document).on("scroll", onScroll);
//     });
//   }
//
//   function openPopover(e) {
//     e.preventDefault()
//     closePopover();
//     var popover = $($(this).data('popover'));
//     popover.toggleClass('open')
//     e.stopImmediatePropagation();
//   }
//
//   function closePopover(e) {
//     if($('.popover.open').length > 0) {
//       $('.popover').removeClass('open')
//     }
//   }
//
//   $("#button").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#elementtoScrollToID").offset().top
//     }, 2000);
// });
//
//   function resize() {
//     $body.removeClass('has-docked-nav')
//     navOffsetTop = $nav.offset().top
//     onScroll()
//   }
//
//   function onScroll() {
//     if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
//       $body.addClass('has-docked-nav')
//     }
//     if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
//       $body.removeClass('has-docked-nav')
//     }
//   }
//
//   function escapeHtml(string) {
//     return String(string).replace(/[&<>"'\/]/g, function (s) {
//       return entityMap[s];
//     });
//   }
//
//   function buildSnippets() {
//     $codeSnippets.each(function() {
//       var newContent = escapeHtml($(this).html())
//       $(this).html(newContent)
//     })
//   }
//
//
//   init();

});
