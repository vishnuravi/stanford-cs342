$(function() {
  var ADDITIONAL_HEADER_OFFSET = 30;

  // pull headers to the left as necessary
  $('.pulled.left').each(function() {
    var $header = $(this);
    $header.css('left', '-' + ($header.width() + ADDITIONAL_HEADER_OFFSET) + 'px');
  });

  var SMOOTH_SCROLLING_DURATION = 500;
  var $scrollElements = $('html, body');

  // apply smooth scrolling to relative link
  $('a').each(function() {
    var $anchor = $(this);
    var href = $anchor.attr('href');

    // ignore if non-relative link
    if (!href || href[0] !== '#') {
      return; 
    }

    $anchor.click(function(event) {
      event.preventDefault();
      // href is a selector for the element to scroll to
      var $target = $(href);

      $scrollElements.animate({ scrollTop: $target.offset().top },
        SMOOTH_SCROLLING_DURATION, function() {
          window.location.hash = href;
        });
    });
  });
});
