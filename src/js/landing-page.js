let slideIndex = 1;
let slideIndex2 = 0;
$(window).resize(function() {
    if ($('body').width() < 768) {
        showSlidesMobile(slideIndex);
    } else {
        showSlides(slideIndex);
    }
});

if ($('body').width() < 768) {
    showSlidesMobile(slideIndex);
} else {
    showSlides(slideIndex);
}

// Next/previous controls
function plusSlides(n) {
    if ($('body').width() < 768) {
        showSlidesMobile(slideIndex += n);
    } else {
        showSlides(slideIndex += n);
    }
}

// Thumbnail image controls
function currentSlide(n) {
    if ($('body').width() < 768) {
        showSlidesMobile(slideIndex = n);
    } else {
        showSlides(slideIndex = n);
    }
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showSlidesMobile(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides-mobile");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// auto change slides
function showSlidesMobile_auto() {
    let i;
    let slides = document.getElementsByClassName("mySlides-mobile");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}
    slides[slideIndex2-1].style.display = "block";
    setTimeout(showSlidesMobile_auto, 4000); // Change image every 2 seconds
}

showSlides_auto();
showSlidesMobile_auto()

function showSlides_auto() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {slideIndex2 = 1}
  slides[slideIndex2-1].style.display = "block";
  setTimeout(showSlides_auto, 4000); // Change image every 2 seconds
}
