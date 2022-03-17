$('button').on('click', function() {
    $('span, p').css({
      '-webkit-box-decoration-break' : $(this).text(),
      '-moz-box-decoration-break' : $(this).text(),
      'box-decoration-break' : $(this).text()
    })
    // Force a redraw
    .hide().fadeIn(0);
  });
  