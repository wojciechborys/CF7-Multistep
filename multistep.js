
$(document).ready(function () {
  //just remember to use valid classes
  $('.popup-trigger').click(function () {
    $('.popup').fadeIn(500);
  })

  $(document).on('keyup click', function (e) {
    var close = $('.popup .close');
     //if escape clicked
    if (e.keyCode === 27) {
      $('.popup').fadeOut();
    } else if (close.is(e.target)) {
      $('.popup').fadeOut(500);
    }
  })

  var j = 1;
  $('.popup__wrapper--content .steps').each(function () {
    if ($(this).data('step') !== j) {
      $(this).fadeOut(500);
    }
  })

  $('.popup .wpcf7-submit').click(function () {
    j++;
    console.log(j);
    var par = $(this).parents('.popup__wrapper--content .steps');
    if (par.data('step') !== j) {
      par.fadeOut(500);
      $('.popup__wrapper [data-step="' + j + '"]').delay(500).fadeIn(500);
    }
  })

  $('.popup__wrapper .clicker').click(function () {
    j++;
    console.log(j);

    var par = $(this).parents('.popup__wrapper--content .steps');

    if (par.data('step') == 4 && $(this).hasClass('next')) {
      $('.popup').fadeOut(500);
    } else if ($(this).hasClass('next')) {
      if (par.data('step') !== j) {
        j == 3;
        par.fadeOut(500);
        $('.popup__wrapper [data-step="' + j + '"]').delay(500).fadeIn(500);
      }
    } else if (par.data('step') == 4 && $(this).hasClass('prev')) {
      j = j - 2;
      par.fadeOut(500);
      $('.popup__wrapper [data-step="' + j + '"]').delay(500).fadeIn(500);
    } else if ($(this).hasClass('prev')) {
      j = j - 2;
      par.fadeOut(500);
      $('.popup__wrapper [data-step="' + j + '"]').delay(500).fadeIn(500);
    } else if (par.data('step') == 4) {
      $('.popup').fadeOut(500);
    }

    if ($('.popup__wrapper [data-step="1"]').is(':visible') || $('.popup__wrapper [data-step="2"]').is(':visible')) {
      $('.popup .wpcf7-response-output').hide();
    }
  })
})
