var sidebarVisible = false
var headerVisible = false

function toggleSidebar(value) {
  sidebarVisible = !sidebarVisible
  if (value !== undefined) sidebarVisible = value
  $('body').attr('show-sidebar', sidebarVisible.toString())
}

function showHeader() {
  headerVisible = true
  $('body').attr('show-header', 'true')
}

function hideHeader() {
  headerVisible = false
  $('body').attr('show-header', 'false')
}

// when the page is done loading
$(document).ready(function() {
  $(window).bind('scroll', function() {
    var scrollTop = $('body').scrollTop()
    var heroHeight = $('#hero').height()

    console.log(scrollTop, heroHeight);
    if (scrollTop > heroHeight && !headerVisible) {
      showHeader()
    }
    if (scrollTop <= heroHeight && headerVisible) {
      hideHeader()
    }
  })

  // check location
  var hash = window.location.hash.replace('#', '')
  if (hash) {
    $('html, body').animate({
      scrollTop: $('#' + hash).offset().top
    }, 500)
  }
  // if (hash.replace('#', ''))

  $('.scroll-to-contact').bind('click', function() {
    $('html, body').animate({
      scrollTop: $('#contact').offset().top
    }, 500)
    toggleSidebar(false)
  })

  $('.scroll-to-hero').bind('click', function() {
    $('html, body').animate({
      scrollTop: $('#hero').offset().top
    }, 500)
    toggleSidebar(false)
  })

  $('.scroll-to-pricing').bind('click', function() {
    $('html, body').animate({
      scrollTop: $('#pricing').offset().top
    }, 500)
    toggleSidebar(false)
  })

  $('.scroll-to-about').bind('click', function() {
    $('html, body').animate({
      scrollTop: $('#about').offset().top
    }, 500)
    toggleSidebar(false)
  })

  $('.sidebar-trigger').bind('click', function() {
    toggleSidebar()
  })

  $('#sidebar-overlay').bind('click', function() {
    toggleSidebar()
  })
})
