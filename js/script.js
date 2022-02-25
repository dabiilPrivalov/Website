const swiper = new Swiper('.hero__swiper', {
  loop: true,
  autoplay: {
    delay: 1000
  },

  fadeEffect: { crossFade: true },
  speed: 2000,
  effect: "fade",

});

const multiSelect = () => {
  const elements = document.querySelectorAll('.simplebar');
  elements.forEach(el => {
    const simplebar = new SimpleBar(el, {
      /* чтобы изначально ползунок был виден */
      autoHide: false,
      /* с помощью этого значения вы можете управлять высотой ползунка*/
      scrollbarMaxSize: 32,
    });
  });
}
multiSelect();

document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.hero__nav__list__src').forEach(item => {
  item.addEventListener('click', function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector('.hero__dropdown-container');

    document.querySelectorAll('.hero__nav__list__src').forEach(el => {
      if (el != btn) {
        el.classList.remove('active__src');
      }
    });

    document.querySelectorAll('.hero__dropdown-container').forEach(el => {
      if (el != dropdown) {
        el.classList.remove('active__dropdown__container');
      }
    }),
    dropdown.classList.toggle('active__dropdown__container');
    btn.classList.toggle('active__src')
  })
})

  document.addEventListener('click', function(e) {
    let target = e.target;
    if (!target.closest('.hero__nav__list')) {
      document.querySelectorAll('.hero__dropdown-container').forEach(el => {
          el.classList.remove('active__dropdown__container');
      })
      document.querySelectorAll('.hero__nav__list__src').forEach(el => {
          el.classList.remove('active__src');
      });
    }
  })
})

const swiper2 = new Swiper('.gallery__swiper', {
  autoHeight: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  grid: {
    fill: 'rows',
    rows: 1,
  },
  spaceBetween: 0,

  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.gallery__pics__nav__pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.gallery__pics__nav__next',
    prevEl: '.gallery__pics__nav__prev ',
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },

    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 34
    },

    1300: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }

  },
});

//Модально окно
const modal = new GraphModal();

// Choices  Desktop
const element = document.querySelector('#select');
const choices = new Choices(element, {
  searchEnabled: false,
  position: 'bottom',
  shouldSort: false,
  placeholder: false,
  itemSelectText: '',
});

// Burger Menu
document.querySelector('.burger_btn-open').addEventListener('click', function() {
  document.querySelector('.header__burger__nav').classList.add('active');
})
document.querySelector('.header__nav__close').addEventListener('click', function() {
  document.querySelector('.header__burger__nav').classList.remove('active');
})

// search Tablet 1024
document.querySelector('.header__btn-search').addEventListener('click', function() {
  document.querySelector('.header__nav__form-search').classList.add('form-active');
})

document.querySelector('.header__btn-search').addEventListener('click', function() {
  document.querySelector('.header__btn-search').classList.add('btn-disabled');
})

document.addEventListener('click', function(e) {
  let target = e.target;
  let form = document.querySelector('.header__nav__form-search');
  if (!target.closest('.header__container')) {
  form.classList.remove('form-active');
    form.querySelector('input').value = '';
    document.querySelector('.header__btn-search').classList.remove('btn-disabled')
  }
})

// search Mobile
document.querySelector('.header__nav__search__close').addEventListener('click', function() {
  document.querySelector('.header__nav__form-search').classList.remove('form-active');
})
document.querySelector('.header__nav__search__close').addEventListener('click', function() {
  document.querySelector('.header__btn-search').classList.remove('btn-disabled');
})

new SimpleBar(document.getElementById('simplebar_burger'), {
  autoHide: false,
});

//Catalog accordion
document.addEventListener('DOMContentLoaded', function(){
  $( function() {
    $( "#accordion" ).accordion({
      heightStyle: 'content',
      icons: false,
      collapsible: true,
      active: false
    });
  });
  document.querySelectorAll('.catalog__accordion__item').forEach(function(elem){

    elem.addEventListener('click', function(ev){
      const path = ev.currentTarget.dataset.path

      document.querySelectorAll('.catalog__tabs__main').forEach(function(list){
        list.classList.remove('catalog-item-active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog-item-active')
    });
  });
  })


//Изменение цвета при активном элементе в Каталоге
document.querySelectorAll('.catalog__accordion__item').forEach(item => {
  item.addEventListener('click', function() {
    let act = this;
    document.querySelectorAll('.catalog__accordion__item').forEach(ele => {
      if (ele != act) {
        ele.classList.remove('active-catalog');
      }
      item.classList.add('active-catalog');
    });
  })
})

// Events swiper
const swiper3 = new Swiper('.events__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },

  spaceBetween: 50,

  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.events__nav__next',
    prevEl: '.events__nav__prev ',
  },

  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0
    },

    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    900: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27
    },

    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,

      spaceBetween: 50
    },
  },
});

//Project Swiper
const swiper4 = new Swiper('.project__swiper', {
  autoHeight: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  // spaceBetween: 50,

  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.project__nav__next',
    prevEl: '.project__nav__prev',
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0
    },

    400: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    },
  },
});

//Тултип
tippy('#myButton', {
  content: "Пример современных тенденций - современная методология разработки",
  placement: 'top',
  arrow: true,
  delay: 200,
  trigger: 'click',
  theme: 'light',
});

tippy('#myButton2', {
  content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
  placement: 'top',
  arrow: true,
  delay: 200,
  trigger: 'click',
  theme: 'light',
});

tippy('#myButton3', {
  content: "В стремлении повысить качество",
  placement: 'top',
  arrow: true,
  delay: 200,
  trigger: 'click',
  theme: 'light',
});

//Валидация полей
const validation = new JustValidate('#form');
validation.addField('#name', [
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Мало букв',
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Много букв'
  },
  {
    rule: 'required',
    errorMessage: 'Поле обязательно',
  },
  {
    //Только буквы
    rule: 'customRegexp',
    value: /^[a-zа-яё]+$/i,
    errorMessage: 'Недопустимый формат',
  },
]);

//валидация телефона
validation.addField('#tel', [

  {
    rule: 'required',
    errorMessage: 'Поле обязательно',
  },

  //Проверка количества цифр
  {
    validator: (name, value) => {
      const phone = selector.inputmask.unmaskedvalue ()
      return Number(phone) && phone.length === 10
    },
    errorMessage: 'Мало цифр',
  },
])
.onSuccess((event) => {

  let formData = new FormData(event.target);
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        alert('Заявка отправлена');
      }
    }
  }
  xhr.open('POST', 'mail.php', true);
  xhr.send(formData);

});

var invalidClassName = 'just-validate-error-field'
var inputs = document.querySelectorAll('input, select, textarea')
inputs.forEach(function (input) {
  // Add a css class on submit when the input is invalid.
  input.addEventListener('just-validate-error-field', function () {
    input.classList.add(invalidClassName)
  })

  // Remove the class when the input becomes valid.
  // 'input' will fire each time the user types
  input.addEventListener('input', function () {
    if (input.validity.valid) {
      input.classList.remove(invalidClassName)
    }
  })
})

//Маска телефона
var selector = document.getElementById("tel");
var im = new Inputmask("+7(999)-999-99-99");
im.mask(tel);

//Карта
ymaps.ready(init);
function init(){
    // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.758468, 37.601088],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14,
    controls: ['smallMapDefaultSet'],
  });
  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Леонтьевский переулок, дом 5/1',
    }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'img/map_pin.svg',
    // Размеры метки.
    iconImageSize: [20, 20],
  });
myMap.geoObjects
  .add(myPlacemark)
};

//Плавное перемещение по сайту
// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')
// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

