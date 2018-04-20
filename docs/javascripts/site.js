function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height() - 20;

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function valueAnimationCheck(){
  $('.color-chart').find('span').each(function(){
    if(!$(this).hasClass('slided')){
      $(this).addClass('slided');
      // $(this).animate([{height: '0'},{height: 'inherit'}], {duration: 1000});
      $(this).on('animationend', function(e){
        if($(e.target).hasClass('black')){
          $('.amount-black').css({'visibility' : 'visible'});
        }else if($(e.target).hasClass('blond')){
          $('.amount-blond').css({'visibility' : 'visible'});
        }else if($(e.target).hasClass('red')){
          $('.amount-red').css({'visibility' : 'visible'});
        }else if($(e.target).hasClass('brown')){
          $('.amount-brown').css({'visibility' : 'visible'});
          $('.amount-brown').addClass('winner');
        }
      });
    }
  });
}

$(window).scroll(valueAnimationCheck);
$(document).ready(valueAnimationCheck);
