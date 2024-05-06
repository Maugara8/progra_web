let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll('.carousel-content img');
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slideIndex++;
  
  if (slideIndex > slides.length) { slideIndex = 1; } //Esto asegura que solo una imagen esté activa en un momento
  
  slides[slideIndex - 1].classList.add('active');

  setTimeout(showSlides, 2000);//para que se llame asi misma cada 2 segundos 
}
