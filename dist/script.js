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
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_tabsDecoration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabsDecoration */ "./src/js/modules/tabsDecoration.js");
/* harmony import */ var _modules_initImagePopup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/initImagePopup */ "./src/js/modules/initImagePopup.js");
/* harmony import */ var _modules_initCountdownTimer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/initCountdownTimer */ "./src/js/modules/initCountdownTimer.js");








$(document).ready(function () {
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_0__["initializeGlazingSlider"])();
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_0__["initializeDecorationSlider"])();
});
Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])('form');
Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_modules_calc__WEBPACK_IMPORTED_MODULE_4__["default"])();
Object(_modules_tabsDecoration__WEBPACK_IMPORTED_MODULE_5__["default"])();
Object(_modules_initImagePopup__WEBPACK_IMPORTED_MODULE_6__["default"])();
Object(_modules_initCountdownTimer__WEBPACK_IMPORTED_MODULE_7__["default"])();

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let formData = new FormData();

// ✅ Очищает formData и все поля ввода
function resetCalcData() {
  formData = new FormData();
  clearInputs();
}

// ✅ Очищает все поля формы
function clearInputs() {
  const widthInputElement = document.getElementById('width');
  const heightInputElement = document.getElementById('height');
  const viewTypeSelect = document.getElementById('view_type');
  const coldElement = document.getElementById('cold');
  const warmElement = document.getElementById('warm');
  if (widthInputElement) widthInputElement.value = '';
  if (heightInputElement) heightInputElement.value = '';
  if (viewTypeSelect) viewTypeSelect.value = '';
  if (coldElement) {
    const coldCheckbox = coldElement.previousElementSibling;
    if (coldCheckbox) coldCheckbox.checked = false;
  }
  if (warmElement) {
    const warmCheckbox = warmElement.previousElementSibling;
    if (warmCheckbox) warmCheckbox.checked = false;
  }
}

// ✅ Устанавливает размеры окна и обновляет formData
function setSizeWindows() {
  const widthInputElement = document.getElementById('width');
  const heightInputElement = document.getElementById('height');
  if (!widthInputElement || !heightInputElement) return;
  function filterOnlyNumbers(event) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  }
  function updateFormData() {
    formData.set('width', widthInputElement.value);
    formData.set('height', heightInputElement.value);
  }
  [widthInputElement, heightInputElement].forEach(input => {
    input.addEventListener('input', filterOnlyNumbers);
    input.addEventListener('change', updateFormData);
  });
}

// ✅ Устанавливает тип стеклопакета и обновляет formData
function selectTypeGlasses() {
  const viewTypeSelect = document.getElementById('view_type');
  const coldElement = document.getElementById('cold');
  const warmElement = document.getElementById('warm');
  if (!coldElement || !warmElement || !viewTypeSelect) return;
  const coldCheckbox = coldElement.previousElementSibling;
  const warmCheckbox = warmElement.previousElementSibling;
  if (!coldCheckbox || !warmCheckbox) return;
  function updateFormData() {
    const typeGlazing = coldCheckbox.checked ? 'холодное' : warmCheckbox.checked ? 'теплое' : '';
    formData.set('view_type', viewTypeSelect.value || '');
    formData.set('type_glazing', typeGlazing || '');
  }
  coldCheckbox.addEventListener('change', () => {
    if (coldCheckbox.checked) warmCheckbox.checked = false;
    updateFormData();
  });
  warmCheckbox.addEventListener('change', () => {
    if (warmCheckbox.checked) coldCheckbox.checked = false;
    updateFormData();
  });
  viewTypeSelect.addEventListener('change', updateFormData);
}

// ✅ Получает данные из formData
function getFormData() {
  return Object.fromEntries(formData.entries());
}

// ✅ Запуск модуля
function calc() {
  setSizeWindows();
  selectTypeGlasses();
  return {
    getFormData,
    selectTypeGlasses,
    setSizeWindows,
    resetCalcData,
    clearInputs
  };
}
/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc */ "./src/js/modules/calc.js");

function forms(formsSelector) {
  const forms = document.querySelectorAll(formsSelector);
  const calculator = Object(_calc__WEBPACK_IMPORTED_MODULE_0__["default"])();
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();

      // Создаём FormData из формы
      const formData = new FormData(form);

      // ✅ Получаем данные калькулятора (теперь это объект)
      const calcData = calculator.getFormData();
      console.log(calcData, "calcFormdata");
      Object.entries(calcData).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value);
        }
      });
      calculator.resetCalcData();
      // Валидация телефона
      const userPhone = formData.get('user_phone');
      const userPhoneInput = form.querySelector('input[name="user_phone"]');
      clearErrorMessage(userPhoneInput);
      if (!/^\d+$/.test(userPhone)) {
        showErrorMessage(userPhoneInput, 'Пожалуйста, введите только цифры.');
        return;
      }

      // Показываем статус загрузки
      showLoadingState(form);

      // Отправляем данные
      fetch('assets/server.php', {
        method: 'POST',
        body: formData
      }).then(response => response.json()).then(data => {
        console.log('Ответ сервера:', data);
        if (data.success) {
          showSuccessState(form);
        } else {
          showErrorState(form);
        }
      }).catch(error => {
        console.error('Ошибка отправки:', error);
        showErrorState(form);
      });
    });
  });

  // Функции статусов формы
  function showLoadingState(form) {
    const button = form.querySelector('button');
    button.innerHTML = 'Отправка...';
    button.disabled = true;
  }
  function showSuccessState(form) {
    const button = form.querySelector('button');
    button.innerHTML = 'Отправлено!';
    setTimeout(() => {
      button.innerHTML = 'Вызвать замерщика!';
      button.disabled = false;
      form.reset();
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
    const errorMessage = document.createElement('div');
    errorMessage.textContent = message;
    errorMessage.style.color = 'red';
    errorMessage.style.marginTop = '5px';
    inputElement.insertAdjacentElement('afterend', errorMessage);
  }
  function clearErrorMessage(inputElement) {
    const errorMessage = inputElement.nextElementSibling;
    if (errorMessage && errorMessage.tagName === 'DIV') {
      errorMessage.remove();
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/initCountdownTimer.js":
/*!**********************************************!*\
  !*** ./src/js/modules/initCountdownTimer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function initCountdownTimer() {
  // Устанавливаем дату окончания акции (год, месяц - 1, день, час, минута, секунда)
  const deadline = new Date(2025, 11, 18, 23, 59, 59); // 18 декабря 2023 года, 23:59:59

  // Функция для обновления таймера
  function updateTimer() {
    const now = new Date(); // Текущая дата и время
    const timeRemaining = deadline - now; // Разница в миллисекундах

    // Если время вышло
    if (timeRemaining <= 0) {
      clearInterval(timerInterval); // Останавливаем таймер
      document.getElementById('timer').innerHTML = '<p>Акция завершена!</p>';
      return;
    }

    // Вычисляем дни, часы, минуты и секунды
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeRemaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(timeRemaining % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(timeRemaining % (1000 * 60) / 1000);

    // Форматируем числа с ведущим нулём
    const formatNumber = num => String(num).padStart(2, '0');

    // Обновляем значения на странице
    document.getElementById('days').textContent = formatNumber(days);
    document.getElementById('hours').textContent = formatNumber(hours);
    document.getElementById('minutes').textContent = formatNumber(minutes);
    document.getElementById('seconds').textContent = formatNumber(seconds);
  }

  // Обновляем таймер каждую секунду
  const timerInterval = setInterval(updateTimer, 1000);

  // Инициализация таймера сразу при загрузке страницы
  updateTimer();
}
/* harmony default export */ __webpack_exports__["default"] = (initCountdownTimer);

/***/ }),

/***/ "./src/js/modules/initImagePopup.js":
/*!******************************************!*\
  !*** ./src/js/modules/initImagePopup.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function initImagePopup() {
  // Находим все изображения с классом preview
  const images = document.querySelectorAll('.preview');
  images.forEach(image => {
    image.addEventListener('click', e => {
      e.preventDefault(); // Отменяем стандартное поведение ссылки

      // Создаем подложку
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      overlay.style.zIndex = '1000';
      overlay.style.display = 'flex';
      overlay.style.justifyContent = 'center';
      overlay.style.alignItems = 'center';
      overlay.style.cursor = 'pointer';

      // Создаем изображение для полноэкранного просмотра
      const fullImage = document.createElement('img');
      fullImage.src = image.parentElement.href; // Берем ссылку на большое изображение
      fullImage.style.maxWidth = '90%';
      fullImage.style.maxHeight = '90%';
      fullImage.style.borderRadius = '8px';

      // Добавляем изображение на подложку
      overlay.appendChild(fullImage);

      // Добавляем подложку на страницу
      document.body.appendChild(overlay);

      // Закрытие при клике на подложку
      overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
      });
    });
  });
}
/* harmony default export */ __webpack_exports__["default"] = (initImagePopup);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc */ "./src/js/modules/calc.js");

const calculator = Object(_calc__WEBPACK_IMPORTED_MODULE_0__["default"])();
const formData = new FormData(); // Создаем общий объект FormData

function modals() {
  const modals = {
    popup: document.querySelector('.popup'),
    engineer: document.querySelector('.popup_engineer'),
    calc: document.querySelector('.popup_calc'),
    calcProfile: document.querySelector('.popup_calc_profile'),
    calcEnd: document.querySelector('.popup_calc_end')
  };
  const triggers = {
    openEngineer: document.querySelector('.header_btn'),
    openPopup: document.querySelectorAll('.phone_link'),
    openCalc: document.querySelectorAll('.popup_calc_btn'),
    nextCalc: document.querySelector('.popup_calc_button'),
    nextCalcProfile: document.querySelector('.popup_calc_profile_button')
  };
  const closeButtons = document.querySelectorAll('.popup_close, .popup_calc_close, .popup_calc_profile_close, .popup_calc_end_close');

  // Открытие модального окна
  function openModal(modal) {
    if (modal) modal.style.display = 'block';
  }

  // Закрытие модального окна
  function closeModal(modal) {
    if (modal) modal.style.display = 'none';
  }
  if (triggers.openEngineer) {
    triggers.openEngineer.addEventListener('click', () => openModal(modals.engineer));
  }
  triggers.openPopup.forEach(btn => btn.addEventListener('click', e => {
    e.preventDefault();
    openModal(modals.popup);
  }));
  triggers.openCalc.forEach(btn => btn.addEventListener('click', () => openModal(modals.calc)));
  if (triggers.nextCalc) {
    triggers.nextCalc.addEventListener('click', () => {
      calculator.setSizeWindows();

      // ✅ Получаем данные и проверяем, что они корректны
      const formValues = calculator.getFormData();
      console.log("📌 Полученные данные (Размер окна):", formValues);
      if (formValues.width && formValues.height) {
        formData.set('width', formValues.width);
        formData.set('height', formValues.height);
      } else {
        console.error("❌ Ошибка: Размеры окна не получены!");
      }
      console.log("📌 FormData после первого шага:", Object.fromEntries(formData));
      closeModal(modals.calc);
      openModal(modals.calcProfile);
    });
  }
  if (triggers.nextCalcProfile) {
    triggers.nextCalcProfile.addEventListener('click', () => {
      closeModal(modals.calcProfile);
      openModal(modals.calcEnd);
      calculator.selectTypeGlasses();

      // ✅ Получаем данные и проверяем, что они корректны
      const formValues = calculator.getFormData();
      console.log("📌 Полученные данные (Тип стекла):", formValues);
      if (formValues.view_type && formValues.type_glazing) {
        formData.set('view_type', formValues.view_type);
        formData.set('type_glazing', formValues.type_glazing);
      } else {
        console.error("❌ Ошибка: Тип остекления не получен!");
      }
      console.log("📌 FormData после второго шага:", Object.fromEntries(formData));
    });
  }

  // Закрытие по кнопкам
  closeButtons.forEach(btn => btn.addEventListener('click', e => {
    const modal = e.target.closest('.popup, .popup_engineer, .popup_calc, .popup_calc_profile, .popup_calc_end');
    closeModal(modal);
  }));

  // Закрытие при клике вне контента
  Object.values(modals).forEach(modal => {
    if (modal) {
      modal.addEventListener('click', e => {
        if (!e.target.closest('.popup_dialog')) closeModal(modal);
      });
    }
  });

  // Функция переключения картинок в калькуляторе
  function initPopupCalc() {
    const previewImages = document.querySelectorAll('.balcon_icons_img');
    const bigImages = document.querySelectorAll('.big_img img');
    previewImages.forEach((preview, index) => {
      preview.addEventListener('click', () => {
        bigImages.forEach(img => img.style.display = 'none');
        bigImages[index].style.display = 'inline-block';
        previewImages.forEach(img => img.classList.remove('do_image_more'));
        preview.classList.add('do_image_more');
      });
    });
  }
  initPopupCalc();
  setTimeout(() => openModal(modals.popup), 60000);
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
      let target = e.target.closest('a'); // Найдем кликнутую ссылку внутри блока

      // Если клик был по картинке, берем первую ссылку внутри блока
      if (!target) {
        target = block.querySelector('a');
      }
      if (target && target.hasAttribute('data-windows')) {
        e.preventDefault(); // отменяем стандартное поведение ссылки
        setActiveTab(target);
      }
    });
  });

  // Инициализация — показываем первый элемент
  if (links.length > 0) {
    links[0].click();
  }
}
/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/modules/tabsDecoration.js":
/*!******************************************!*\
  !*** ./src/js/modules/tabsDecoration.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function decoration() {
  const dataDecorationElements = document.querySelectorAll('[data-decoration]');
  dataDecorationElements.forEach(elem => {
    elem.addEventListener('click', () => {
      // 1. Удаляем класс no_click у всех элементов
      dataDecorationElements.forEach(item => {
        item.classList.remove('no_click');
        item.classList.remove('after_click'); // Убираем after_click у всех
      });

      // 2. Добавляем класс after_click элементу, на который кликнули
      elem.classList.add('after_click');

      // 3. Получаем значение атрибута data-decoration у элемента, на который кликнули
      const targetClass = elem.getAttribute('data-decoration');

      // 4. Скрываем все элементы, классы которых соответствуют значениям data-decoration
      dataDecorationElements.forEach(item => {
        const itemClass = item.getAttribute('data-decoration');
        const targetElement = document.querySelector(`.${itemClass}`);
        if (targetElement) {
          targetElement.style.display = 'none'; // Скрываем элемент
        }
      });

      // 5. Показываем элемент, класс которого соответствует значению data-decoration элемента, на который кликнули
      const elementToShow = document.querySelector(`.${targetClass}`);
      if (elementToShow) {
        elementToShow.style.display = 'block'; // Показываем элемент
      }
    });
  });
}
/* harmony default export */ __webpack_exports__["default"] = (decoration);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map