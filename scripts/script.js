$(document).ready(function () {
  $(".fa-list-ul").click(function (e) {
    if ($(".navbar__list").css("display") == "none") {
      $(".navbar__list").css({ display: "block" });
      $(".fa-list-ul").css({ display: "none" });
      $(".fa-window-close").css({ display: "block" });
    }
  });
  $(".fa-window-close").click(function (e) {
    if ($(".navbar__list").css("display") == "block") {
      $(".navbar__list").css({ display: "none" });
      $(".fa-list-ul").css({ display: "block" });
      $(".fa-window-close").css({ display: "none" });
    }
  });

  //Scroll

  $(".navbar").css({
    position: "fixed",
    width: "100%",
    "z-index": "50",
  });

  $(window).scroll(function () {
    let top = innerHeight - $(".nav").outerHeight() - $(window).scrollTop();
    top = top >= 0 ? top : 0;
    $(".nav").css("top", `${top}px`);
  });

  $(".navbar__link").click(function (e) {
    e.preventDefault();
    attr = $($(e.target).attr("href")).offset().top - $(".nav").outerHeight();
    $("html, body").animate(
      {
        scrollTop: attr,
      },
      1000
    );
  });

  $(function () {
    $(window).scroll(function () {
      var scroll = $(this).scrollTop();
      if (scroll > 600) {
        $("#top").fadeIn();
      } else {
        $("#top").fadeOut();
      }
    });
    $("#top").click(function (e) {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    });
  });

  class Typing {
    constructor(obj) {
      this.el = document.querySelector(obj.el);
      this.text = this.el.innerHTML.trim();
      this.el.innerHTML = "";
      this.speed = obj.speed;
      this.top = this.el.getBoundingClientRect().top;
      this.start = true;
      this.startWrite();
      window.addEventListener("scroll", () => this.startWrite());
    }

    startWrite() {
      if (window.scrollY + window.innerHeight > this.top && this.start) {
        this.start = false;
        this.write();
      }
    }

    write(i = 0) {
      if (this.el.innerHTML === this.text) {
        return;
      }
      this.el.innerHTML += this.text[i];
      i++;
      setTimeout(() => this.write(i), this.speed);
    }
  }

  new Typing({
    el: ".about__name",
    speed: 100,
  });
  new Typing({
    el: ".about__surname",
    speed: 100,
  });
  new Typing({
    el: ".about__age",
    speed: 100,
  });
  new Typing({
    el: ".about__work",
    speed: 100,
  });
  new Typing({
    el: ".about__live",
    speed: 100,
  });
  new Typing({
    el: ".about__from",
    speed: 100,
  });
  // new Typing({
  //   el: ".about__educ",
  //   speed: 100,
  // });
  // new Typing({
  //   el: ".about__course",
  //   speed: 100,
  // });

  const top = ScrollReveal({
    origin: "top",
    distance: "100%",
    duration: 2000,
    reset: true,
  });

  top.reveal(".header__right", { delay: 300 });
  top.reveal(".head__link", { delay: 300 });
  top.reveal(".header__left", { delay: 300 });

  // Skills

  class Protsent {
    constructor(obj) {
      this.el = document.querySelector(obj.el);
      this.percent = document.querySelector(obj.percent);
      this.test = this.el.innerHTML;
      this.prot = Number.parseInt(this.el.innerHTML);
      this.el.innerHTML = 0;
      this.top = this.el.getBoundingClientRect().top;
      this.start = true;
      this.go();
      window.addEventListener("scroll", () => this.go());
    }

    go() {
      if (window.scrollY + window.innerHeight > this.top && this.start) {
        this.start = false;
        this.time();
      }
    }

    testing() {
      if (this.el.innerHTML < +this.prot) {
        this.el.innerHTML++;
        this.percent.style.width = `${this.el.innerHTML}%`;
      }
    }
    time() {
      setInterval(() => {
        this.testing();
      }, 15);
    }
  }
  new Protsent({
    el: ".html__percent",
    percent: ".html__line",
  });
  new Protsent({
    el: ".css__percent",
    percent: ".css__line",
  });
  new Protsent({
    el: ".tailwind__percent",
    percent: ".tailwind__line",
  });
  new Protsent({
    el: ".ant__percent",
    percent: ".ant__line",
  });
  new Protsent({
    el: ".js__percent",
    percent: ".js__line",
  });
  new Protsent({
    el: ".nuxt__percent",
    percent: ".nuxt__line",
  });
  new Protsent({
    el: ".vue__percent",
    percent: ".vue__line",
  });
  new Protsent({
    el: ".git__percent",
    percent: ".git__line",
  });

  new Protsent({
    el: ".git__percent",
    percent: ".git__line",
  });
  new Protsent({
    el: ".tailwind__percent",
    percent: ".tailwind__line",
  });
});

var typed = new Typed(".types", {
  strings: ["freelancer", "web developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

let works = [
  {
    img: "./images/works/kozimxon.webp",
    title: "Personal website",
    text: "#css, #tailwind, #vue, #api",
    link: "https://kozimxon.uz/",
  },
  {
    img: "./images/works/lor.jpg",
    title: "Lor website",
    text: "#nuxt2,#tailwind, #elementUi",
    link: "https://lor777.uz/",
  },
  {
    img: "./images/works/wms.jpg",
    title: "Storage website",
    text: "#nuxt3,#i18n,#tailwind, #elementUi",
    link: "http://185.211.170.253:3000/auth/register",
  },
  {
    img: "./images/works/moow.jpg",
    title: "Car market website",
    text: "#nuxt3,#i18,#tailwind, #elementUi,#vueUse, #pinia",
    link: "https://moow.isoqhakimov.uz/",
  },
  {
    img: "./images/works/ads.jpg",
    title: "Ads website",
    text: "#vue3,#i18,#pinia, #scss,#ant,#leaflet",
    link: "https://app.adspro.uz/",
  },
];
let workHTML = document.querySelector(".work");
works.forEach((item) => {
  workHTML.innerHTML += `
    <div class="work__items" data-tilt>
      <img class="work__img" src="${item.img}"/>
      <div class="work__info">
        <div class="work__title">${item.title}</div>
        <p class="work__text">${item.text}</p>
        <a target="blank" class="work__btn" href="${item.link}">View</a>
      </div>
    </div>
  `;
});
