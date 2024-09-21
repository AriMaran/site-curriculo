;(function ($) {
  $('html').removeClass('no-js')

  $('header a').click(function (e) {
    if ($(this).hasClass('no-scroll')) {
      return
    }

    e.preventDefault()
    const heading = $(this).attr('href')
    const scrollDistance = $(heading).offset().top

    $('html, body').animate(
      {
        scrollTop: `${scrollDistance}px`,
      },
      Math.abs(window.pageYOffset - $(heading).offset().top) / 5,
    )

    // Hide the menu once clicked if mobile
    if ($('header').hasClass('active')) {
      $('header, body').removeClass('active')
    }
  })

  // Scroll to top
  $('#to-top').click(() => {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      500,
    )
  })

  $('#lead-down span').click(() => {
    const scrollDistance = $('#lead').next().offset().top
    $('html, body').animate(
      {
        scrollTop: `${scrollDistance}px`,
      },
      500,
    )
  })

  $('#experience-timeline').each(function () {
    $this = $(this) 
    $userContent = $this.children('div') 


    $userContent.each(function () {
      $(this)
        .addClass('vtimeline-content')
        .wrap(
          '<div class="vtimeline-point"><div class="vtimeline-block"></div></div>',
        )
    })

    $this.find('.vtimeline-point').each(function () {
      $(this).prepend(
        '<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>',
      )
    })


    $this.find('.vtimeline-content').each(function () {
      const date = $(this).data('date')

      if (date) {
        $(this).parent().prepend(`<span class="vtimeline-date">${date}</span>`)
      }
    })
  })

  $('#mobile-menu-open').click(() => {
    $('header, body').addClass('active')
  })

  $('#mobile-menu-close').click(() => {
    $('header, body').removeClass('active')
  })

  $('#view-more-projects').click(function (e) {
    e.preventDefault()
    $(this).fadeOut(300, () => {
      $('#more-projects').fadeIn(300)
    })
  })

  setTimeout(() => {
    document.querySelectorAll('iframe.embedly-card').forEach((node) => {
      const style = document.createElement('style')
      style.textContent =
        '.card .brd, .card .hdr, .card .action { display: none }'
      node.contentDocument.body.append(style)
    })
  }, 1e3)
})(jQuery)
