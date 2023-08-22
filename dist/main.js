/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//create contact page 

const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const headingInput = document.createElement('input');
    headingInput.type = 'text';
    headingInput.placeholder = 'Enter heading';
    form.appendChild(headingInput);

    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.placeholder = 'enter address';
    form.appendChild(addressInput);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'submit'
    form.appendChild(submitButton);

    pageContent.appendChild(form);


    content.appendChild(pageContent);




}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createMenuPage = () => {

    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');


    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    const menuList = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = 'pizza';


    const menuItem2 = document.createElement('li');
    menuItem2.textContent = 'pasta';

    const menuItem3 = document.createElement('li');
    menuItem3.textContent = 'Burger';

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

    pageContent.appendChild(heading);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);

/***/ }),

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
/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ "./src/restaurant.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");





const createTabs = () => {
    
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

    div1.addEventListener('click',() => {
        clearContent()
        ;(0,_restaurant__WEBPACK_IMPORTED_MODULE_0__["default"])();
    })

    div2.addEventListener('click',() => {
        clearContent()
        ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
    })

    div3.addEventListener('click',() => {
        clearContent()
        ;(0,_contact__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })


}
function clearContent() {
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content")
    if (pageContent) {
        content.removeChild(pageContent);


    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOzs7OztBQUtBOztBQUVBLGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUNuQ2hDOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEN1QjtBQUNyQjs7O0FBRy9CO0FBQ0EsSUFBSSxpREFBVTs7QUFFZCxJQUFJLHVEQUF3QjtBQUM1Qjs7O0FBR0EsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7QUNYMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxpRUFBZSx3QkFBd0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JZO0FBQ1Y7QUFDTjs7O0FBR3BDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx3REFBd0I7QUFDaEMsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsUUFBUSxrREFBYztBQUN0QixLQUFLOztBQUVMO0FBQ0E7QUFDQSxRQUFRLHFEQUFpQjtBQUN6QixLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7VUN4RHpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUM7O0FBRXJDO0FBQ0EscURBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9yZXN0YXVyYW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3RhYnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NyZWF0ZSBjb250YWN0IHBhZ2UgXG5cbmNvbnN0IGNyZWF0ZUNvbnRhY3RQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFnZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgncGFnZS1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1mb3JtJyk7XG5cbiAgICBjb25zdCBoZWFkaW5nSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGhlYWRpbmdJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGhlYWRpbmdJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBoZWFkaW5nJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGhlYWRpbmdJbnB1dCk7XG5cbiAgICBjb25zdCBhZGRyZXNzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGFkZHJlc3NJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGFkZHJlc3NJbnB1dC5wbGFjZWhvbGRlciA9ICdlbnRlciBhZGRyZXNzJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZHJlc3NJbnB1dCk7XG5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0QnV0dG9uLnZhbHVlID0gJ3N1Ym1pdCdcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcblxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlQ29udGVudCk7XG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdFBhZ2U7IiwiY29uc3QgY3JlYXRlTWVudVBhZ2UgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2VDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3BhZ2UtY29udGVudCcpO1xuXG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ091ciBNZW51JztcblxuICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBtZW51SXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1lbnVJdGVtMS50ZXh0Q29udGVudCA9ICdwaXp6YSc7XG5cblxuICAgIGNvbnN0IG1lbnVJdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbWVudUl0ZW0yLnRleHRDb250ZW50ID0gJ3Bhc3RhJztcblxuICAgIGNvbnN0IG1lbnVJdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbWVudUl0ZW0zLnRleHRDb250ZW50ID0gJ0J1cmdlcic7XG5cbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51SXRlbTEpO1xuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVJdGVtMik7XG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUl0ZW0zKTtcblxuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKG1lbnVMaXN0KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2VDb250ZW50KTtcblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnVQYWdlOyIsImltcG9ydCBjcmVhdGVSZXN0YXVyYW50SG9tZVBhZ2UgZnJvbSAnLi9yZXN0YXVyYW50JztcbmltcG9ydCBjcmVhdGVUYWJzIGZyb20gJy4vdGFicydcblxuXG5mdW5jdGlvbiBpbml0aWFsTG9hZCgpIHtcbiAgICBjcmVhdGVUYWJzKCk7XG5cbiAgICBjcmVhdGVSZXN0YXVyYW50SG9tZVBhZ2UoKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsTG9hZDsiLCIvL2xvZ2luIGZvciBzaG93aW5nIGltYWdlcyBcblxuY29uc3QgY3JlYXRlUmVzdGF1cmFudEhvbWVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYWdlQ29udGVudC5jbGFzc0xpc3QuYWRkKCdwYWdlLWNvbnRlbnQnKTtcblxuICAgIC8vY3JlYXRlIGFuZCBhcHBlbmQgaW1hZ2UgZWxlbWVudFxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc3JjID0gJ2h0dHBzOi8vY2FjaGUubWFycmlvdHQuY29tL21hcnJpb3R0YXNzZXRzL21hcnJpb3R0L05ZQ1hSL255Y3hyLWFzdG9yLWNvdXJ0LTg0MDAtaG9yLWNsc2MuanBnJ1xuICAgIGltYWdlLmhlaWdodCA9ICczMDAnO1xuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGltYWdlKTtcblxuICAgIC8vY3JlYXRlIGFuZCBhcHBwZW5kIGhlYWRsaW5lIGVsZW1lbnRcbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSAnd2VsY29tZSB0byB0aGUgcmVzdGF1cmFudCdcbiAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG5cbiAgICAvL2NyZWF0ZSBhbmQgYXBwZW5kIGNvcHkgZWxlbWVudFxuICAgIGNvbnN0IGNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29weS50ZXh0Q29udGVudCA9ICdnb29kIGZvb2QnXG4gICAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoY29weSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2VDb250ZW50KVxuXG59ICAgXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlc3RhdXJhbnRIb21lUGFnZTtcbiIsImltcG9ydCBjcmVhdGVSZXN0YXVyYW50SG9tZVBhZ2UgZnJvbSBcIi4vcmVzdGF1cmFudFwiO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCBjcmVhdGVNZW51UGFnZSBmcm9tIFwiLi9tZW51XCI7XG5cblxuY29uc3QgY3JlYXRlVGFicyA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuXG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBkaXYxLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS1idG4nKTtcbiAgICBkaXYyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1idG4nKTtcbiAgICBkaXYzLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1idG4nKTtcblxuICAgIGRpdjEudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgZGl2Mi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBkaXYzLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gICAgZGl2MS5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICBkaXYyLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgIGRpdjMuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdjEpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYzKTtcblxuICAgIGRpdjEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgY2xlYXJDb250ZW50KClcbiAgICAgICAgY3JlYXRlUmVzdGF1cmFudEhvbWVQYWdlKCk7XG4gICAgfSlcblxuICAgIGRpdjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgY2xlYXJDb250ZW50KClcbiAgICAgICAgY3JlYXRlTWVudVBhZ2UoKTtcbiAgICB9KVxuXG4gICAgZGl2My5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICBjbGVhckNvbnRlbnQoKVxuICAgICAgICBjcmVhdGVDb250YWN0UGFnZSgpO1xuICAgIH0pXG5cblxufVxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2UtY29udGVudFwiKVxuICAgIGlmIChwYWdlQ29udGVudCkge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKHBhZ2VDb250ZW50KTtcblxuXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFiczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsTG9hZCBmcm9tIFwiLi9wYWdlTG9hZFwiO1xuXG4vL2xvYWQgcGFnZVxuaW5pdGlhbExvYWQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=