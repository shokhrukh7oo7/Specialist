// NAVBAR BURGER MENU START
document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.getElementById("burger-btn");
  const navMenu = document.getElementById("nav-menu");

  burgerBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});

// NAVBAR BURGER MENU END

//============================================================================================

// VIDEO SCRIPT START FOR BANNER
document.querySelectorAll(".play-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // отменяет прокрутку
  });
});

$(document).ready(function () {
  // get video source from data-src button
  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });
  //   console.log($videoSrc);
  // autoplay video on modal load
  $("#myModal").on("shown.bs.modal", function (e) {
    // youtube iframe configuration and settings
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&rel=0&controls=1&loop=1&modestbranding=1"
    );
  });
  // stop playing the youtube video when modal closed
  $("#myModal").on("hide.bs.modal", function (e) {
    document.activeElement.blur();
    // stop video
    $("#video").attr("src", "");
  });
});
// VIDEO SCRIPT END FOR BANNER

//============================================================================================

// GLIDER TESTIMONIAL SCRIPT START
new Glider(document.querySelector(".glider"), {
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  rewind: true,
  duration: 0.5,
  arrows: {
    prev: ".glider-prev-testimonial",
    next: ".glider-next-testimonial",
  },
  responsive: [
    {
      breakpoint: 1200, // ≥ 1200px
      settings: {
        slidesToShow: 2.5,
      },
    },
    {
      breakpoint: 576, // 576px - 1199px
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 0, // < 576px
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
// GLIDER TESTIMONIAL SCRIPT END

//============================================================================================

// GLIDER OUT TEACHERS SCRIPT START
new Glider(document.querySelector(".teacher"), {
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  rewind: true,
  duration: 0.5,
  arrows: {
    prev: ".glider-prev-teacher",
    next: ".glider-next-teacher",
  },
  responsive: [
    {
      breakpoint: 1200, // ≥ 1200px
      settings: {
        slidesToShow: 3.1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2.3,
      },
    },
    {
      breakpoint: 768, // 576px - 1199px
      settings: {
        slidesToShow: 2.1,
      },
    },
    {
      breakpoint: 576, // 576px - 1199px
      settings: {
        slidesToShow: 2.1,
      },
    },
    {
      breakpoint: 0, // < 576px
      settings: {
        slidesToShow: 1.1,
      },
    },
  ],
});
// GLIDER OUT TEACHERS SCRIPT END

// GLIDER OUT SERTIFICATE SCRIPT START
new Glider(document.querySelector(".sertificate"), {
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  rewind: true,
  duration: 0.5,
  arrows: {
    prev: ".glider-prev-sertificate",
    next: ".glider-next-sertificate",
  },
  responsive: [
    {
      breakpoint: 1200, // ≥ 1200px
      settings: {
        slidesToShow: 4.3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3.3,
      },
    },
    {
      breakpoint: 768, // 576px - 1199px
      settings: {
        slidesToShow: 2.1,
      },
    },
    {
      breakpoint: 576, // 576px - 1199px
      settings: {
        slidesToShow: 2.1,
      },
    },
    {
      breakpoint: 0, // < 576px
      settings: {
        slidesToShow: 1.1,
      },
    },
  ],
});
// GLIDER OUT SERTIFICATE SCRIPT END

//============================================================================================

// TAB SCRIPT START
const triggers = document.querySelectorAll(".tab-trigger");
const contents = document.querySelectorAll(".tab-content");

triggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const target = trigger.dataset.tab;

    // Remove active class from all
    triggers.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    // Add to selected
    trigger.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});

// TAB SCRIPT END

//============================================================================================

// FOOTER FORM SECTION START
// Маска телефона
const input = document.querySelector("#phone");

const iti = window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: function (callback) {
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((data) => callback(data.country_code))
      .catch(() => callback("uz")); // fallback Uzbekistan
  },
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

// Форма и валидация
const form = document.getElementById("application-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");

  let isValid = true;

  // Имя
  if (name.value.trim().length < 2) {
    isValid = false;
    name.classList.add("input-error");
    document.getElementById("name-error").textContent = "Введите имя";
  } else {
    name.classList.remove("input-error");
    document.getElementById("name-error").textContent = "";
  }

  // Телефон
  if (!iti.isValidNumber()) {
    isValid = false;
    phone.classList.add("input-error");
    document.getElementById("phone-error").textContent =
      "Введите корректный номер";
  } else {
    phone.classList.remove("input-error");
    document.getElementById("phone-error").textContent = "";
  }

  // Email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    isValid = false;
    email.classList.add("input-error");
    document.getElementById("email-error").textContent = "Некорректная почта";
  } else {
    email.classList.remove("input-error");
    document.getElementById("email-error").textContent = "";
  }

  // Отправка
  if (isValid) {
    alert("Заявка отправлена!");
    form.reset();
    iti.setCountry("uz"); // сброс страны на default
  }
});

//============================================================================================
Fancybox.bind("[data-fancybox='gallery']", {
  Thumbs: false, // отключить превью
  Toolbar: {
    display: ["close"], // только кнопка закрытия
  },
});
