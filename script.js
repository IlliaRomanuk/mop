
const thumbs = new Swiper('.thumbs-slider', {
    slidesPerView: 3,
    spaceBetween: 10,
  
    navigation: {
      nextEl: '.thumbs-next',
      prevEl: '.thumbs-prev',
    },
  });
  
  const main = new Swiper('.main-slider', {
    loop: true,
  
    navigation: {
      nextEl: '.slider-arrow--next',
      prevEl: '.slider-arrow--prev',
    },
  
    thumbs: {
      swiper: thumbs,
    },
  });

  let totalSeconds = 3600;

  function updateTimer() {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
  
    document.getElementById("hours").textContent = String(h).padStart(2, "0");
    document.getElementById("minutes").textContent = String(m).padStart(2, "0");
    document.getElementById("seconds").textContent = String(s).padStart(2, "0");
  
    if (totalSeconds > 0) totalSeconds--;
  }
  
  setInterval(updateTimer, 1000);
  updateTimer();

  let totalSecond = 3600;

  function updateTime() {
    const hour = Math.floor(totalSeconds / 3600);
    const min = Math.floor((totalSeconds % 3600) / 60);
    const sec = totalSeconds % 60;
  
    document.getElementById("hour").textContent = String(hour).padStart(2, "0");
    document.getElementById("minute").textContent = String(min).padStart(2, "0");
    document.getElementById("second").textContent = String(sec).padStart(2, "0");
  
    if (totalSecond > 0) totalSecond--;
  }
  
  setInterval(updateTime, 1000);
  updateTime();

  document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.slider__track');
    const slides = document.querySelectorAll('.slider__track img');
  
    let index = 0;
  
    setInterval(() => {
      index++;
      if (index >= slides.length) index = 0;
  
      track.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);
  });