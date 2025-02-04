/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");




$(document).ready(function () {
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_0__["initializeGlazingSlider"])();
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_0__["initializeDecorationSlider"])();
});
Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])('form');
Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_3__["default"])();

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function forms(formsSelector) {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(form);
      const userPhone = formData.get('user_phone');
      const userPhoneInput = form.querySelector('input[name="user_phone"]');

      // Очистить сообщение об ошибке перед валидацией
      clearErrorMessage(userPhoneInput);
      if (!/^\d+$/.test(userPhone)) {
        showErrorMessage(userPhoneInput, 'Пожалуйста, введите только цифры в поле телефона.');
        return;
      }

      // Оповещаем пользователя, что данные отправляются
      showLoadingState(form);

      // Отправка данных через AJAX (fetch)
      fetch('assets/server.php', {
        method: 'POST',
        body: formData
      }).then(response => response.json()) // Предполагаем, что сервер возвращает JSON
      .then(data => {
        if (data.success) {
          showSuccessState(form); // Показать успешное сообщение
        } else {
          showErrorState(form); // Показать сообщение об ошибке
        }
      }).catch(error => {
        console.error('Ошибка отправки данных:', error);
        showErrorState(form); // Показать сообщение об ошибке
      });
    });
  });

  // Функции для отображения состояния
  function showLoadingState(form) {
    const button = form.querySelector('button');
    button.innerHTML = 'Идет отправка...';
    button.disabled = true;
  }
  function showSuccessState(form) {
    const button = form.querySelector('button');
    button.innerHTML = 'Отправлено!';
    button.disabled = true;
    setTimeout(() => {
      button.innerHTML = 'Вызвать замерщика!';
      button.disabled = false;
      form.reset(); // Очистка формы
    }, 2000);
  }
  function showErrorState(form) {
    const button = form.querySelector('button');
    button.innerHTML = 'Ошибка!';
    setTimeout(() => {
      button.innerHTML = 'Вызвать замерщика!';
      button.disabled = false;
    }, 2000);
  }
  function showErrorMessage(inputElement, message) {
    // Проверяем, если сообщение уже существует, не добавляем новое
    const existingErrorMessage = inputElement.nextElementSibling;

    // Если следующего элемента нет, или он не является сообщением об ошибке
    if (!existingErrorMessage || existingErrorMessage.tagName !== 'DIV' || !existingErrorMessage.textContent) {
      const errorMessage = document.createElement('div');
      errorMessage.textContent = message;
      errorMessage.style.color = 'red';
      errorMessage.style.marginTop = '5px';
      inputElement.insertAdjacentElement('afterend', errorMessage);
    }
  }

  // Функция для очистки сообщения об ошибке
  function clearErrorMessage(inputElement) {
    const existingErrorMessage = inputElement.nextElementSibling;

    // Проверяем, если следующий элемент существует и является <div> с текстом
    if (existingErrorMessage && existingErrorMessage.tagName === 'DIV' && existingErrorMessage.textContent) {
      existingErrorMessage.remove(); // Удаляем сообщение об ошибке
    }
  }
}
;
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function modals() {
  const headerBtn = document.querySelector('.header_btn'),
    popupEngineer = document.querySelector('.popup_engineer'),
    phoneLink = document.querySelectorAll('.phone_link'),
    btnClose = document.querySelectorAll('.popup_close'),
    popup = document.querySelector('.popup');
  modals = [document.querySelector('.popup'),
  // обычное окно
  document.querySelector('.popup_engineer'),
  // окно с инженером
  document.querySelector('.popup_calc'),
  // калькулятор
  document.querySelector('.popup_calc_profile'),
  // калькулятор профиля
  document.querySelector('.popup_calc_end') // калькулятор окончания
  ].filter(modal => modal !== null);
  function openModal(modal) {
    modal.style.display = 'block';
  }
  function closeModal(modal) {
    if (modal) {
      modal.style.display = 'none';
    }
  }
  headerBtn.addEventListener('click', () => openModal(popupEngineer));
  phoneLink.forEach(phone => phone.addEventListener('click', () => openModal(popup)));
  btnClose.forEach(button => {
    button.addEventListener('click', e => {
      const popup = e.target.closest('.popup, .popup_engineer, .popup_calc, .popup_calc_profile, .popup_calc_end');
      closeModal(popup);
    });
  });
  modals.forEach(modal => {
    modal.addEventListener('click', e => {
      if (!e.target.closest('.popup_dialog')) {
        closeModal(modal);
      }
    });
  });
}
/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: initializeGlazingSlider, initializeDecorationSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeGlazingSlider", function() { return initializeGlazingSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeDecorationSlider", function() { return initializeDecorationSlider; });
function initializeGlazingSlider() {
  $('.glazing_slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1201,
      settings: {
        slidesToShow: 4,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 1
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 2
      }
    }, {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 1
      }
    }]
  });
}

// Функция для инициализации слайдера decoration_slider
function initializeDecorationSlider() {
  $('.decoration_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 1
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 1
      }
    }]
  });
}

// 
// 
// $(document).ready(function() {
//     $('.glazing_slider').slick({
//         infinite: true,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         responsive: [{
//             breakpoint: 1201,
//             settings: {
//                 slidesToShow: 4,
//                 prevArrow: '<button class="prev arrow"></button>',
//                 nextArrow: '<button class="next arrow"></button>',
//                 slidesToScroll: 1
//             }
//         }, {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 3,
//                 prevArrow: '<button class="prev arrow"></button>',
//                 nextArrow: '<button class="next arrow"></button>',
//                 slidesToScroll: 2
//             }
//         }, {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 2,
//                 prevArrow: '<button class="prev arrow"></button>',
//                 nextArrow: '<button class="next arrow"></button>',
//                 slidesToScroll: 2
//             }
//         }, {
//             breakpoint: 530,
//             settings: {
//                 slidesToShow: 1,
//                 prevArrow: '<button class="prev arrow"></button>',
//                 nextArrow: '<button class="next arrow"></button>',
//                 slidesToScroll: 1
//             }
//         }]
//     });
//     $('.decoration_slider').slick({
//         infinite: true,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         responsive: [{
//             breakpoint: 1200,
//             settings: {
//                 slidesToShow: 3,
//                 prevArrow: '<button class="prev arrow"></button>',
//                 nextArrow: '<button class="next arrow"></button>',
//                 slidesToScroll: 1
//             }
//         }, {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 2,
//                 prevArrow: '<button class="prev arrow"></button>',
//                 nextArrow: '<button class="next arrow"></button>',
//                 slidesToScroll: 2
//             }
//         }, {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1,
//                 prevArrow: '<button class="prev arrow"></button>',
//                 nextArrow: '<button class="next arrow"></button>',
//                 slidesToScroll: 1
//             }
//         }]
//     });
// });

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs() {
  // Получаем все блоки (как с картинками, так и с надписями)
  const glazingBlocks = document.querySelectorAll('.glazing_block');
  const links = document.querySelectorAll('.glazing_slider a');

  // Функция для переключения активного состояния
  function setActiveTab(target) {
    const targetSelector = target.getAttribute('data-windows');

    // Проверка на пустой атрибут data-windows
    if (!targetSelector) {
      console.error('Ошибка: атрибут data-windows пустой!');
      return; // Если атрибут пуст, выходим из функции
    }

    // Скрываем все ряды
    const allRows = document.querySelectorAll('.glazing_content');
    allRows.forEach(row => {
      row.style.display = 'none';
    });

    // Показываем нужный ряд
    const activeRow = document.querySelector(targetSelector);
    if (activeRow) {
      activeRow.style.display = 'block';
    }

    // Снимаем класс 'active' со всех элементов
    glazingBlocks.forEach(block => {
      block.classList.remove('active');
    });
    links.forEach(link => {
      link.classList.remove('active');
    });

    // Добавляем класс 'active' к текущему элементу
    target.closest('.glazing_block').classList.add('active');
    target.classList.add('active');
  }

  // Обработчик клика по картинке и тексту
  glazingBlocks.forEach(block => {
    // Клик на блок
    block.addEventListener('click', function (e) {
      const target = e.target.closest('a'); // Найдем кликнутый элемент (ссылку)
      if (target && target.hasAttribute('data-windows')) {
        setActiveTab(target);
      }
    });
  });

  // Обработчик клика по ссылке
  links.forEach(link => {
    link.addEventListener('click', function () {
      setActiveTab(this);
    });
  });

  // Инициализация — показываем первый элемент
  if (links.length > 0) {
    links[0].click();
  }
}
/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map