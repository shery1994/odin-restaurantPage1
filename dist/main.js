/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ "./src/restaurant.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ "./src/tabs.js");




function initialLoad() {
    (0,_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])();

    (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__["default"])();
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//login for showing images 

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //create and append image element
    const image = document.createElement('img');
    image.src = 'https://cache.marriott.com/marriottassets/marriott/NYCXR/nycxr-astor-court-8400-hor-clsc.jpg'
    image.height = '300';
    pageContent.appendChild(image);

    //create and apppend headline element
    const headline = document.createElement('h1');
    headline.textContent = 'welcome to the restaurant'
    pageContent.appendChild(headline);

    //create and append copy element
    const copy = document.createElement('p');
    copy.textContent = 'good food'
    pageContent.appendChild(copy);

    content.appendChild(pageContent)

}   

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHomePage);


/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const createTabs = () => {
    alert('hey');
    const content = document.querySelector('#content');


    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div3.setAttribute('id', 'contact-btn');

    div1.textContent = 'Home';
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';

    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

        


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabs);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");


//load page
(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ3JCOzs7QUFHL0I7QUFDQSxJQUFJLGlEQUFVOztBQUVkLElBQUksdURBQXdCO0FBQzVCOzs7QUFHQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ1gxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGlFQUFlLHdCQUF3QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJ4QztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBLGlFQUFlLFVBQVU7Ozs7OztVQy9CekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQzs7QUFFckM7QUFDQSxxREFBVyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvcmVzdGF1cmFudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy90YWJzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZVJlc3RhdXJhbnRIb21lUGFnZSBmcm9tICcuL3Jlc3RhdXJhbnQnO1xuaW1wb3J0IGNyZWF0ZVRhYnMgZnJvbSAnLi90YWJzJ1xuXG5cbmZ1bmN0aW9uIGluaXRpYWxMb2FkKCkge1xuICAgIGNyZWF0ZVRhYnMoKTtcblxuICAgIGNyZWF0ZVJlc3RhdXJhbnRIb21lUGFnZSgpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxMb2FkOyIsIi8vbG9naW4gZm9yIHNob3dpbmcgaW1hZ2VzIFxuXG5jb25zdCBjcmVhdGVSZXN0YXVyYW50SG9tZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2VDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3BhZ2UtY29udGVudCcpO1xuXG4gICAgLy9jcmVhdGUgYW5kIGFwcGVuZCBpbWFnZSBlbGVtZW50XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zcmMgPSAnaHR0cHM6Ly9jYWNoZS5tYXJyaW90dC5jb20vbWFycmlvdHRhc3NldHMvbWFycmlvdHQvTllDWFIvbnljeHItYXN0b3ItY291cnQtODQwMC1ob3ItY2xzYy5qcGcnXG4gICAgaW1hZ2UuaGVpZ2h0ID0gJzMwMCc7XG4gICAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgLy9jcmVhdGUgYW5kIGFwcHBlbmQgaGVhZGxpbmUgZWxlbWVudFxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9ICd3ZWxjb21lIHRvIHRoZSByZXN0YXVyYW50J1xuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcblxuICAgIC8vY3JlYXRlIGFuZCBhcHBlbmQgY29weSBlbGVtZW50XG4gICAgY29uc3QgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb3B5LnRleHRDb250ZW50ID0gJ2dvb2QgZm9vZCdcbiAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChjb3B5KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnQpXG5cbn0gICBcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVzdGF1cmFudEhvbWVQYWdlO1xuIiwiXG5jb25zdCBjcmVhdGVUYWJzID0gKCkgPT4ge1xuICAgIGFsZXJ0KCdoZXknKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuXG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBkaXYxLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS1idG4nKTtcbiAgICBkaXYyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1idG4nKTtcbiAgICBkaXYzLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1idG4nKTtcblxuICAgIGRpdjEudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgZGl2Mi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBkaXYzLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gICAgZGl2MS5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICBkaXYyLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgIGRpdjMuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdjEpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYzKTtcblxuICAgICAgICBcblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhYnM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbExvYWQgZnJvbSBcIi4vcGFnZUxvYWRcIjtcblxuLy9sb2FkIHBhZ2VcbmluaXRpYWxMb2FkKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9