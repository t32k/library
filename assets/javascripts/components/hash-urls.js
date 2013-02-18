// Generated by CoffeeScript 1.4.0
(function() {
  var $;

  $ = jQuery;

  $.hashURLs = function(options) {
    var hash, settings;
    settings = {
      list: $('.sectionList a'),
      content: $('.contentSection')
    };
    settings = $.extend(settings, options);
    if (window.location.hash) {
      hash = window.location.hash;
    } else {
      hash = settings.list.first().attr('href');
    }
    settings.content.not(hash).hide();
    $("[data-hash=" + hash + "]").addClass('active');
    return settings.list.on('click', function(e) {
      var el;
      el = $(this);
      e.preventDefault();
      hash = el.attr('href');
      window.location.hash = hash;
      settings.list.removeClass('active');
      settings.content.hide();
      el.addClass('active');
      return $(hash).show();
    });
  };

}).call(this);
