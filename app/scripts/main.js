'use strict';

$(function() {
  $('.js-mermaid').each(function(i, el) {
    var $el = $(el),
        $content = $el.find('.js-mermaid-content'),
        $target = $el.find('.js-mermaid-target');

    $el.find('.js-mermaid-build').on('click', function(e) {
      e.preventDefault();

      var newGraphDefinition = $('<div class="mermaid">').text($content.val());
      $target.empty().append(newGraphDefinition);
      window.mermaid.init();
    });
  });
});
