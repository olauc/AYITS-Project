function selectFlag(code) {
        const btn = document.getElementById("flagDropdown");
        btn.innerHTML = `<img src="image/${code}.svg" class="flag-icon" alt=""> `;
        document.getElementById("selectedCountry").value = code;
      }

      var count_particles, stats, update;
      stats = new Stats();
      stats.setMode(0);
      stats.domElement.style.position = "absolute";
      stats.domElement.style.left = "0px";
      stats.domElement.style.top = "0px";
      document.body.appendChild(stats.domElement);
      count_particles = document.querySelector(".js-count-particles");
      update = function () {
        stats.begin();
        stats.end();
        
        requestAnimationFrame(update);
      };
      requestAnimationFrame(update);

      window.addEventListener("scroll", function () {
        const background = document.querySelector(".background");
        const scrollPosition = window.pageYOffset;

        background.style.transform = `
                rotate(${scrollPosition / 50}deg)
                scale(1.5)
                translate(${scrollPosition / 100}px, ${-scrollPosition / 100}px)
            `;
      });

      window.addEventListener("DOMContentLoaded", function () {
        const background = document.querySelector(".background");
        background.style.transform = "scale(1.5)";
      });

      let totalSeconds = 3 * 3600; 

      function animateChange(id, newValue) {
        const element = document.getElementById(id);
        if (element.textContent !== newValue) {
          element.textContent = newValue;
          element.classList.add("animate");
          setTimeout(() => {
            element.classList.remove("animate");
          }, 300);
        }
      }

      function updateTimer() {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        animateChange("hours", hours.toString());
        animateChange("minutes", minutes.toString().padStart(2, "0"));
        animateChange("seconds", seconds.toString().padStart(2, "0"));

        if (totalSeconds > 0) {
          totalSeconds--;
        }
      }

      updateTimer();
      setInterval(updateTimer, 1000);

      const swiper = new Swiper(".mySwiper", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        },
      });
    