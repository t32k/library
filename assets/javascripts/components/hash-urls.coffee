$ = jQuery

$.hashURLs = (options) ->

  settings =
    list: $('.sectionList a')
    content: $('.contentSection')

  settings = $.extend settings, options

  if window.location.hash
    hash = window.location.hash
  else
    hash = settings.list.first().attr('href')

  settings.content.not(hash).hide()
  $("[data-hash=#{hash}]").addClass('active')

  settings.list.on 'click', (e) ->
    el = $(@)
    e.preventDefault()
    hash = el.attr('href')
    window.location.hash = hash

    settings.list.removeClass('active')
    settings.content.hide()

    el.addClass('active')
    $(hash).show()
