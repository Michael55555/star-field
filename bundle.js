/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _star_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./star.js */ \"./src/star.js\");\n\n\nlet ctx = null;\nlet frame = 0;\nlet stars = Array(10)\n  .fill()\n  .map(() => new _star_js__WEBPACK_IMPORTED_MODULE_0__.default());\n\nfunction init() {\n  const canvas = document.querySelector(\"canvas\");\n\n  canvas.width = innerWidth;\n  canvas.height = innerHeight;\n\n  ctx = canvas.getContext(\"2d\");\n}\n\nfunction draw() {\n  ctx.fillStyle = \"black\";\n  ctx.clearRect(0, 0, innerWidth, innerHeight);\n  ctx.strokeStyle = \"white\";\n  ctx.fillStyle = \"white\";\n\n  if (frame % 3 == 0) {\n    stars.push(new _star_js__WEBPACK_IMPORTED_MODULE_0__.default());\n  }\n\n  for (let star of stars) {\n    ctx.beginPath();\n    star.move();\n    star.draw(ctx);\n    ctx.fill();\n  }\n\n  stars = stars.filter((star) => {\n    return (\n      star.x < innerWidth && star.y < innerHeight && star.x > 0 && star.y > 0\n    );\n  });\n}\n\nfunction animate() {\n  frame++;\n  draw();\n  requestAnimationFrame(animate);\n}\n\nonload = () => {\n  init();\n  animate();\n};\n\n\n//# sourceURL=webpack://star-field/./src/index.js?");

/***/ }),

/***/ "./src/star.js":
/*!*********************!*\
  !*** ./src/star.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Star {\n  constructor(v, x, y) {\n    this.v = v || Math.random() * 2 + 5;\n    this.r = Math.random() * 80;\n    this.startR = this.r;\n    this.a = Math.random() * Math.PI * 2;\n  }\n\n  move() {\n    this.r += (this.v + (this.r - this.startR) * 0.4) * 0.1;\n  }\n\n  draw(ctx) {\n    let offsetY = innerHeight / 2;\n    let offsetX = innerWidth / 2;\n    let x = this.x;\n    let y = this.y;\n    const radius = 2;\n\n    ctx.moveTo(x, y);\n    ctx.arc(x, y, radius, 0, Math.PI * 2);\n\n    this.drawTray(ctx);\n  }\n\n  drawTray(ctx) {\n    ctx.strokeStyle = \"#AAA\";\n\n    let offsetX = innerWidth / 2;\n    let offsetY = innerHeight / 2;\n\n    let x1 = Math.sin(this.a) * Math.pow(this.r, 0.95) + offsetX;\n    let y1 = Math.cos(this.a) * Math.pow(this.r, 0.95) + offsetY;\n\n    let x2 = Math.sin(this.a) * this.r + offsetX;\n    let y2 = Math.cos(this.a) * this.r + offsetY;\n\n    ctx.moveTo(x1, y1);\n    ctx.lineTo(x2, y2);\n    ctx.stroke();\n  }\n\n  get x() {\n    let offsetX = innerWidth / 2;\n\n    return Math.sin(this.a) * this.r + offsetX;\n  }\n\n  get y() {\n    let offsetY = innerHeight / 2;\n\n    return Math.cos(this.a) * this.r + offsetY;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Star);\n\n\n//# sourceURL=webpack://star-field/./src/star.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;