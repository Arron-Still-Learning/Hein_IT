$(document).ready(function () {
    const sections = $("section[id]");
    const navLinks = $(".nav-link a");

    $(window).on("scroll", function () {
      let currentSection = "";

      sections.each(function () {
        const sectionTop = $(this).offset().top - 100;
        const sectionHeight = $(this).outerHeight();
        if ($(window).scrollTop() >= sectionTop && $(window).scrollTop() < sectionTop + sectionHeight) {
          currentSection = $(this).attr("id");
        }
      });

      // Remove active class from all nav-link li elements
      $(".nav-link").removeClass("active");
      
      // Add active class to the matching nav-link li element
      navLinks.each(function () {
        if ($(this).attr("href") === "#" + currentSection) {
          $(this).parent().addClass("active");
        }
      });

      // Handle home section (when no specific section is active)
      if (!currentSection) {
        $(".nav-link").first().addClass("active");
      }
    });
});