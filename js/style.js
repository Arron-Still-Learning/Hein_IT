// Animation observer for scroll-triggered animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
}, observerOptions);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Animate banner immediately
  setTimeout(() => {
    document.querySelector('.banner').classList.add('animated');
  }, 500);

  // Observe sections for scroll animations
  const sections = document.querySelectorAll('.exp, .edu, .projects, .contact');
  sections.forEach(section => {
    animateOnScroll.observe(section);
  });

  // Observe headings separately
  const headings = document.querySelectorAll('.heading');
  headings.forEach(heading => {
    animateOnScroll.observe(heading);
  });
});



//end animation

//start scroll
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

// Add this to your existing scroll animation function
function handleScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll, .banner, .exp, .edu, .projects, .skills, .contact, .heading');
    
    animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animated');
        }
    });
}

// Call this function on scroll and page load
window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);

//end scroll

//start vanta background

window.addEventListener('DOMContentLoaded', function () {
  VANTA.GLOBE({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    size: 1,
  });
});

//end vanta background

