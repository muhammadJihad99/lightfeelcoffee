const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".navbar");
const icon = toggle.querySelector("i");
const links = document.querySelectorAll(".nav-link");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  navbar.classList.toggle("menu-open");

  if (menu.classList.contains("active")) {
    icon.classList.replace("fa-bars", "fa-xmark");
  } else {
    icon.classList.replace("fa-xmark", "fa-bars");
  }
});

/* AUTO HIDE + ACTIVE MENU */

links.forEach((link) => {
  link.addEventListener("click", () => {
    /* remove active lama */
    links.forEach((nav) => nav.classList.remove("active"));

    /* aktifkan menu baru */
    link.classList.add("active");

    /* hide menu */
    menu.classList.remove("active");
    navbar.classList.remove("menu-open");

    icon.classList.replace("fa-xmark", "fa-bars");
  });
});

// Home Slide
const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

function updateSlider() {
  const width = slides[0].offsetWidth + 20;
  track.style.transform = `translateX(-${index * width}px)`;
}

nextBtn.addEventListener("click", () => {
  if (index < slides.length - 1) {
    index++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});

// Next-home-m1
const dots = document.querySelectorAll(".dot");
const contents = document.querySelectorAll(".content");
const progress = document.querySelector(".progress");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    dots.forEach((d) => d.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    dot.classList.add("active");
    contents[index].classList.add("active");

    /* PROGRESS LINE */

    const percent = (index / (dots.length - 1)) * 100;
    progress.style.height = percent + "%";
  });
});

// Menu Section
const menuTrack = document.querySelector(".menu-track");
const menuSlides = document.querySelectorAll(".menu-slide");

const nextMenu = document.querySelector(".next-menu");
const prevMenu = document.querySelector(".prev-menu");

const title = document.getElementById("menu-title");
const desc = document.getElementById("menu-desc");
const price = document.getElementById("menu-price");

let menuIndex = 0;

/* DATA MENU */

const menuData = [
  {
    title: "Caramel Latte",
    desc: "Perpaduan espresso dengan susu creamy dan karamel manis.",
    price: "$4.50",
  },

  {
    title: "Mocha Coffee",
    desc: "Espresso dengan coklat premium dan susu lembut.",
    price: "$4.80",
  },

  {
    title: "Vanilla Cappuccino",
    desc: "Cappuccino lembut dengan aroma vanilla yang manis.",
    price: "$4.20",
  },

  {
    title: "Hazelnut Latte",
    desc: "Latte creamy dengan aroma hazelnut khas.",
    price: "$4.60",
  },

  {
    title: "Espresso Classic",
    desc: "Espresso kuat dengan karakter biji kopi premium.",
    price: "$3.90",
  },

  {
    title: "Americano",
    desc: "Espresso dengan air panas untuk rasa ringan.",
    price: "$3.50",
  },

  {
    title: "Cold Brew",
    desc: "Kopi dingin dengan ekstraksi lambat 12 jam.",
    price: "$4.30",
  },

  {
    title: "Signature LightFeel",
    desc: "Menu spesial racikan khas LightFeel Coffee.",
    price: "$5.20",
  },
];

function updateMenu() {
  const width = menuSlides[0].offsetWidth + 20;

  menuTrack.style.transform = `translateX(-${menuIndex * width}px)`;

  title.textContent = menuData[menuIndex].title;
  desc.textContent = menuData[menuIndex].desc;
  price.textContent = menuData[menuIndex].price;
}

nextMenu.addEventListener("click", () => {
  if (menuIndex < menuSlides.length - 1) {
    menuIndex++;
    updateMenu();
  }
});

prevMenu.addEventListener("click", () => {
  if (menuIndex > 0) {
    menuIndex--;
    updateMenu();
  }
});

// All Menu
const showBtn = document.getElementById("showMenu");
const hideBtn = document.getElementById("hideMenu");
const menuList = document.getElementById("menuList");

showBtn.onclick = () => {
  menuList.style.display = "block";
};

hideBtn.onclick = () => {
  menuList.style.display = "none";
};

// Moments
document.querySelectorAll(".moment-caption").forEach((caption) => {
  let text = caption.childNodes[0].textContent.trim();
  let words = text.split(" ");

  if (words.length > 5) {
    let shortText = words.slice(0, 5).join(" ");
    caption.childNodes[0].textContent = shortText + "... ";

    let btn = caption.querySelector(".show-more");

    btn.onclick = () => {
      caption.childNodes[0].textContent = text + " ";
      btn.style.display = "none";
    };
  } else {
    caption.querySelector(".show-more").style.display = "none";
  }
});

// Show More Rating
document.querySelectorAll(".rating-text").forEach(function (text) {
  let words = text.innerText.trim().split(" ");

  if (words.length > 5) {
    let shortText = words.slice(0, 5).join(" ");
    let fullText = text.innerText;

    text.innerHTML = `
<span class="short-text">${shortText}...</span>
<span class="full-text" style="display:none">${fullText}</span>
<a class="show-more-rating">show more</a>
`;

    let btn = text.querySelector(".show-more-rating");
    let shortEl = text.querySelector(".short-text");
    let fullEl = text.querySelector(".full-text");

    btn.addEventListener("click", function () {
      if (fullEl.style.display === "none") {
        fullEl.style.display = "inline";
        shortEl.style.display = "none";
        btn.textContent = " show less";
      } else {
        fullEl.style.display = "none";
        shortEl.style.display = "inline";
        btn.textContent = " show more";
      }
    });
  }
});

// Nav Option Dropdown
const optionsBtn = document.getElementById("optionsBtn");
const optionsDropdown = document.getElementById("optionsDropdown");

optionsBtn.onclick = () => {
  optionsDropdown.classList.toggle("show");
};

// close jika klik luar

document.addEventListener("click", (e) => {
  if (!optionsBtn.contains(e.target) && !optionsDropdown.contains(e.target)) {
    optionsDropdown.classList.remove("show");
  }
});
