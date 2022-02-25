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
  //

  (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    'use strict';

    var _validForm = require('./src/valid-form');

    var _validForm2 = _interopRequireDefault(_validForm);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    window.ValidForm = _validForm2.default;
    window.ValidForm.toggleInvalidClass = _validForm.toggleInvalidClass;
    window.ValidForm.handleCustomMessages = _validForm.handleCustomMessages;
    window.ValidForm.handleCustomMessageDisplay = _validForm.handleCustomMessageDisplay;

    },{"./src/valid-form":3}],2:[function(require,module,exports){
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.clone = clone;
    exports.defaults = defaults;
    exports.insertAfter = insertAfter;
    exports.insertBefore = insertBefore;
    exports.forEach = forEach;
    exports.debounce = debounce;
    function clone(obj) {
      var copy = {};
      for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
      }
      return copy;
    }

    function defaults(obj, defaultObject) {
      obj = clone(obj || {});
      for (var k in defaultObject) {
        if (obj[k] === undefined) obj[k] = defaultObject[k];
      }
      return obj;
    }

    function insertAfter(refNode, nodeToInsert) {
      var sibling = refNode.nextSibling;
      if (sibling) {
        var _parent = refNode.parentNode;
        _parent.insertBefore(nodeToInsert, sibling);
      } else {
        parent.appendChild(nodeToInsert);
      }
    }

    function insertBefore(refNode, nodeToInsert) {
      var parent = refNode.parentNode;
      parent.insertBefore(nodeToInsert, refNode);
    }

    function forEach(items, fn) {
      if (!items) return;
      if (items.forEach) {
        items.forEach(fn);
      } else {
        for (var i = 0; i < items.length; i++) {
          fn(items[i], i, items);
        }
      }
    }

    function debounce(ms, fn) {
      var timeout = void 0;
      var debouncedFn = function debouncedFn() {
        clearTimeout(timeout);
        timeout = setTimeout(fn, ms);
      };
      return debouncedFn;
    }

    },{}],3:[function(require,module,exports){
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.toggleInvalidClass = toggleInvalidClass;
    exports.handleCustomMessages = handleCustomMessages;
    exports.handleCustomMessageDisplay = handleCustomMessageDisplay;
    exports.default = validForm;

    var _util = require('./util');

    // toggleInvalidClass

    function toggleInvalidClass(input, invalidClass) {
      input.addEventListener('invalid', function () {
        input.classList.add(invalidClass);
      });

      input.addEventListener('input', function () {
        if (input.validity.valid) {
          input.classList.remove(invalidClass);
        }
      });
    }

    // handleCustomMessages

    var errorProps = ['badInput', 'patternMismatch', 'rangeOverflow', 'rangeUnderflow', 'stepMismatch', 'tooLong', 'tooShort', 'typeMismatch', 'valueMissing', 'customError'];

    function getCustomMessage(input, customMessages) {
      customMessages = customMessages || {};
      var localErrorProps = [input.type + 'Mismatch'].concat(errorProps);
      var validity = input.validity;

      for (var i = 0; i < localErrorProps.length; i++) {
        var prop = localErrorProps[i];
        if (validity[prop]) {
          return input.getAttribute('data-' + prop) || customMessages[prop];
        }
      }
    }

    function handleCustomMessages(input, customMessages) {
      function checkValidity() {
        var message = input.validity.valid ? null : getCustomMessage(input, customMessages);
        input.setCustomValidity(message || '');
      }
      input.addEventListener('input', checkValidity);
      input.addEventListener('invalid', checkValidity);
    }

    // handleCustomMessageDisplay

    function handleCustomMessageDisplay(input, options) {
      var validationErrorClass = options.validationErrorClass,
          validationErrorParentClass = options.validationErrorParentClass,
          errorPlacement = options.errorPlacement;


      function checkValidity(options) {
        var insertError = options.insertError;

        var parentNode = input.parentNode;
        var errorNode = parentNode.querySelector('.' + validationErrorClass) || document.createElement('div');

        if (!input.validity.valid && input.validationMessage) {
          errorNode.className = validationErrorClass;
          errorNode.textContent = input.validationMessage;

          if (insertError) {
            errorPlacement === 'before' ? (0, _util.insertBefore)(input, errorNode) : (0, _util.insertAfter)(input, errorNode);
            parentNode.classList.add(validationErrorParentClass);
          }
        } else {
          parentNode.classList.remove(validationErrorParentClass);
          errorNode.remove();
        }
      }
      input.addEventListener('input', function () {
        // We can only update the error or hide it on input.
        // Otherwise it will show when typing.
        checkValidity({ insertError: false });
      });
      input.addEventListener('invalid', function (e) {
        e.preventDefault();
        // We can also create the error in invalid.
        checkValidity({ insertError: true });
      });
    }

    var defaultOptions = {
      invalidClass: 'invalid',
      validationErrorClass: 'validation-error',
      validationErrorParentClass: 'has-validation-error',
      customMessages: {},
      errorPlacement: 'before'

      // validForm

    };function validForm(element, options) {
      if (!element || !element.nodeName) {
        throw new Error('First arg to validForm must be a form, input, select, or textarea');
      }

      var inputs = void 0;
      var type = element.nodeName.toLowerCase();

      options = (0, _util.defaults)(options, defaultOptions);
      if (type === 'form') {
        inputs = element.querySelectorAll('input, select, textarea');
        focusInvalidInput(element, inputs);
      } else if (type === 'input' || type === 'select' || type === 'textarea') {
        inputs = [element];
      } else {
        throw new Error('Only form, input, select, or textarea elements are supported');
      }

      validFormInputs(inputs, options);
    }

    function focusInvalidInput(form, inputs) {
      var focusFirst = (0, _util.debounce)(100, function () {
        var invalidNode = form.querySelector(':invalid');
        if (invalidNode) invalidNode.focus();
      });
      (0, _util.forEach)(inputs, function (input) {
        return input.addEventListener('invalid', focusFirst);
      });
    }

    function validFormInputs(inputs, options) {
      var invalidClass = options.invalidClass,
          customMessages = options.customMessages;

      (0, _util.forEach)(inputs, function (input) {
        toggleInvalidClass(input, invalidClass);
        handleCustomMessages(input, customMessages);
        handleCustomMessageDisplay(input, options);
      });
    }

    },{"./util":2}]},{},[1]);



  //

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

