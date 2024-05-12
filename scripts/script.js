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
    text: "#css, #tailwind #vue, #api",
    link: "https://kozimxon.uz/",
  },
  {
    img: "./images/works/marketvue.webp",
    title: "Vue Online Market",
    text: "#css, #tailwind #vue, #api",
    link: "https://cheery-centaur-86468c.netlify.app/",
  },

  {
    img: "./images/works/identy.webp",
    title: "Face ID",
    text: "#css, #tailwind, #vue",
    link: "https://transcendent-strudel-e3efa9.netlify.app/",
  },
  {
    img: "./images/works/лого бошқарма.webp",
    title: "Madaniyat bosh",
    text: "#html, #css, #js, #jquary",
    link: "https://toshkentmadaniyat.uz/",
  },
  {
    img: "./images/works/calc.webp",
    title: "Calculyator",
    text: "#html, #css, #js",
    link: "https://grand-kitten-f6aa74.netlify.app/",
  },
  {
    img: "./images/works/eng.webp",
    title: "dictionary eng",
    text: "#html, #css, #js, #api",
    link: "https://imaginative-lily-7571b5.netlify.app/",
  },
  {
    img: "./images/works/task.webp",
    title: "Task",
    text: "#html, #css, #js",
    link: "https://unrivaled-zuccutto-7b4b88.netlify.app/",
  },

  {
    img: "./images/works/Ilxom.webp",
    title: "Ilxom Begimqulov",
    text: "#html, #css, #js, #jquary",
    link: "https://ilxom-begimqulov.netlify.app/",
  },
  {
    img: "./images/works/260deg.webp",
    title: "360 Deg",
    text: "#aframe",
    link: "https://starlit-semifreddo-d73ba9.netlify.app/",
  },
  {
    img: "./images/works/dino.webp",
    title: "Dino Game",
    text: "#html, #css, #js",
    link: "https://dinoooooooooo.netlify.app/",
  },

  {
    img: "./images/works/saranjevo.webp",
    title: "Saranjevo",
    text: "#html, #less, #js",
    link: "https://sarajevo-kjdev.netlify.app/",
  },
  {
    img: "./images/works/ocean.webp",
    title: "Ocean",
    text: "#html, #css, #js",
    link: "https://slider-ocean-kjdev.netlify.app/",
  },
  {
    img: "./images/works/business.webp",
    title: "Busines-invest",
    text: "#html, #css, #js",
    link: "https://busines-invest.netlify.app/",
  },
  {
    img: "./images/works/uzauto.webp",
    title: "UZ-Auto",
    text: "#html, #css, #js",
    link: "https://uz-auto-kjdev.netlify.app/",
  },
  {
    img: "./images/works/my-work.webp",
    title: "MY&nbsp;Work",
    text: "#html, #css, #bootstrap, #js",
    link: "https://my-work-kjdev.netlify.app/",
  },
  {
    img: "./images/works/movie.webp",
    title: "Movie",
    text: "#html, #css, #reactjs, #api",
    link: "https://movie-kjdev.netlify.app",
  },
  {
    img: "./images/works/Online-Sudoku-Image.webp",
    title: "Sudoku",
    text: "#html, #css, #js",
    link: "https://sudoku-kjdev.netlify.app/",
  },
  {
    img: "./images/works/burger.webp",
    title: "Burger",
    text: "#html, #css, #bootstrap",
    link: "https://street88.netlify.app/",
  },
  {
    img: "./images/works/cinema.webp",
    title: "Cinema",
    text: "#pug, #scss, #js, #gulp",
    link: "https://cinema-kjdev.netlify.app/",
  },
  {
    img: "./images/works/math test.webp",
    title: "Math",
    text: "#html, #css, #js",
    link: "https://simple-mathtest.netlify.app/",
  },
  {
    img: "./images/works/event.webp",
    title: "Question",
    text: "#html, #css, #js",
    link: "https://tourmaline-rugelach-348a06.netlify.app/",
  },
  {
    img: "./images/works/house.webp",
    title: "Live Green",
    text: "#html, #css, #js",
    link: "https://marvelous-eclair-80ad2f.netlify.app/",
  },

  {
    img: "./images/works/router.webp",
    title: "Vue Router",
    text: "#css, #vue, #api",
    link: "https://spiffy-cassata-9fe431.netlify.app/",
  },
  {
    img: "./images/works/todo.webp",
    title: "Todolist",
    text: "#css, #react, #api",
    link: "https://relaxed-crisp-880d16.netlify.app/",
  },
  {
    img: "./images/works/todovue.webp",
    title: "Simple Todo",
    text: "#html, #js, #vue",
    link: "https://dapper-platypus-6994d7.netlify.app/",
  },
  {
    img: "./images/works/xvso.webp",
    title: "X vs O",
    text: "#html, #css, #js",
    link: "https://x-vs-o-kjdev.netlify.app/",
  },
  {
    img: "./images/works/zakas.webp",
    title: "Buyurtma Qilish",
    text: "#scss, #vue2",
    link: "https://rad-figolla-842881.netlify.app/",
  },
  {
    img: "./images/works/image-active.webp",
    title: "Active&nbsp;Img",
    text: "#html, #css, #js",
    link: "https://img-active-kjdev.netlify.app/",
  },
  {
    img: "./images/works/website.webp",
    title: "Web&nbsp;Site",
    text: "#html, #css, #js, #Jquary",
    link: "https://web-site-kjdev.netlify.app/",
  },
  {
    img: "./images/works/typing.webp",
    title: "Typing",
    text: "#html, #css, #js",
    link: "https://typing-kjdev.netlify.app/",
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
