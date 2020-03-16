import $ from "jquery"
import "jquery-ui-bundle"
import "bootstrap"

export const onRouteUpdate = ({ location }) => {
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      let target = $(this.hash)
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]")
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 70,
          },
          1000,
          "easeInOutExpo"
        )
        return false
      }
    }
  })
}

export const onInitialClientRender = () => {
  // Scroll to top button appear
  $(document).scroll(function() {
    const scrollDistance = $(this).scrollTop()
    if (scrollDistance > 100) {
      $(".scroll-to-top").fadeIn()
    } else {
      $(".scroll-to-top").fadeOut()
    }
  })

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide")
  })

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#nav",
    offset: 80,
  })

  // Collapse Navbar
  const navbarCollapse = function() {
    if ($("#nav").offset().top > 50) {
      $("#nav").addClass("navbar-shrink")
    } else {
      $("#nav").removeClass("navbar-shrink")
    }
  }
  // Collapse now if page is not at top
  navbarCollapse()
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse)
}
