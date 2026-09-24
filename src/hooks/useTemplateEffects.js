import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function destroyOwl(selector) {
  const $ = window.jQuery
  if (!$ ) return
  const $el = $(selector)
  if ($el.length && $el.data('owl.carousel')) {
    $el.trigger('destroy.owl.carousel')
    $el.find('.owl-stage-outer').children().unwrap()
    $el.removeClass('owl-loaded owl-drag owl-grab')
  }
}

function initPagePlugins() {
  const $ = window.jQuery
  if (!$ ) return

  if (window.WOW) {
    new window.WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true, live: true }).init()
  }

  if ($.fn.counterUp) {
    $('[data-toggle="counter-up"]').counterUp({ delay: 10, time: 2000 })
  }

  destroyOwl('.header-carousel')
  if ($('.header-carousel').length) {
    $('.header-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      items: 1,
      dots: true,
      loop: true,
      nav: true,
      navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>',
      ],
    })
  }

  destroyOwl('.testimonial-carousel')
  if ($('.testimonial-carousel').length) {
    $('.testimonial-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      dotsData: true,
    })
  }

  const $portfolio = $('.portfolio-container')
  if ($portfolio.length && $.fn.isotope) {
    const portfolioIsotope = $portfolio.isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows',
    })
    $('#portfolio-flters li')
      .off('click.portfolio')
      .on('click.portfolio', function () {
        $('#portfolio-flters li').removeClass('active')
        $(this).addClass('active')
        portfolioIsotope.isotope({ filter: $(this).data('filter') })
      })
  }
}

/** Sticky navbar + back-to-top — register once for the app lifetime */
export function useGlobalUiEffects() {
  useEffect(() => {
    const $ = window.jQuery
    if (!$ ) return

    const spinner = $('#spinner')
    if (spinner.length) {
      setTimeout(() => spinner.removeClass('show'), 1)
    }

    const onScroll = () => {
      if ($(window).scrollTop() > 300) {
        $('.sticky-top').addClass('shadow-sm').css('top', '0px')
        $('.back-to-top').fadeIn('slow')
      } else {
        $('.sticky-top').removeClass('shadow-sm').css('top', '-100px')
        $('.back-to-top').fadeOut('slow')
      }
    }

    $(window).on('scroll.templateUi', onScroll)
    $('.back-to-top').on('click.templateUi', function (e) {
      e.preventDefault()
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo')
    })

    return () => {
      $(window).off('scroll.templateUi')
      $('.back-to-top').off('click.templateUi')
    }
  }, [])
}

/** Re-init carousels / wow / isotope / counters after each route change */
export function usePageEffects() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(initPagePlugins, 50)
    return () => {
      clearTimeout(timer)
      destroyOwl('.header-carousel')
      destroyOwl('.testimonial-carousel')
    }
  }, [location.pathname])
}
