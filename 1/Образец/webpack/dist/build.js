/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../public/js/CartComponent.js":
/*!*************************************!*\
  !*** ../public/js/CartComponent.js ***!
  \*************************************/
/***/ (() => {

eval("// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';\nVue.component('cart', {\n  data() {\n    return {\n      cartUrl: '/getBasket.json',\n      cartItems: [],\n      imgCart: 'https://placehold.it/200x150',\n      showCart: false\n    };\n  },\n\n  mounted() {\n    this.$parent.getJson(`/api/cart`).then(data => {\n      for (let item of data.contents) {\n        item.imgPath = `img/${item.id_product}.jpg`;\n        this.$data.cartItems.push(item);\n      }\n    });\n  },\n\n  methods: {\n    addProduct(item) {\n      let find = this.cartItems.find(el => el.id_product === item.id_product);\n\n      if (find) {\n        this.$parent.putJson(`/api/cart/${find.id_product}`, {\n          quantity: 1\n        }).then(data => {\n          if (data.result === 1) {\n            find.quantity++;\n          }\n        });\n      } else {\n        const prod = Object.assign({\n          quantity: 1\n        }, item);\n        item.imgPath = `img/${item.id_product}.jpg`;\n        this.$parent.postJson(`/api/cart`, prod).then(data => {\n          if (data.result === 1) {\n            this.cartItems.push(prod);\n          }\n        });\n      }\n    },\n\n    remove(item) {\n      this.$parent.getJson(`${API}/addToBasket.json`).then(data => {\n        if (data.result === 1) {\n          if (item.quantity > 1) {\n            item.quantity--;\n          } else {\n            this.cartItems.splice(this.cartItems.indexOf(item), 1);\n          }\n        }\n      });\n    },\n\n    deleteProduct(item) {\n      this.$parent.delJson(`/api/cart/${item.id_product}`).then(data => {\n        this.$delete(item);\n      });\n    },\n\n    cartCount() {\n      return this.cartItems.reduce((summ, item) => summ + item.quantity, 0);\n    },\n\n    cartSumm() {\n      return this.cartItems.reduce((summ, item) => summ + item.quantity * item.price, 0);\n    }\n\n  },\n  template: `\n    <div>\n    <button class=\"page_header_cart btn\" type=\"button\" @click=\"showCart = !showCart\">\n    <svg width=\"32\" height=\"29\" viewBox=\"0 0 32 29\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M26.2009 29C25.5532 28.9738 24.9415 28.6948 24.4972 28.2227C24.0529 27.7506\n                        23.8114 27.1232 23.8245 26.475C23.8376 25.8269 24.1043 25.2097 24.5673 24.7559C25.0303\n                        24.3022 25.6527 24.048 26.301 24.048C26.9493 24.048 27.5717 24.3022 28.0347 24.7559C28.4977\n                        25.2097 28.7644 25.8269 28.7775 26.475C28.7906 27.1232 28.549 27.7506 28.1047 28.2227C27.6604\n                        28.6948 27.0488 28.9738 26.401 29H26.2009ZM6.75293 26.32C6.75293 25.79 6.91011 25.2718 7.20459\n                        24.8311C7.49907 24.3904 7.91764 24.0469 8.40735 23.844C8.89705 23.6412 9.43594 23.5881 9.95581\n                        23.6915C10.4757 23.7949 10.9532 24.0502 11.328 24.425C11.7028 24.7998 11.9581 25.2773 12.0615\n                        25.7972C12.1649 26.317 12.1118 26.8559 11.9089 27.3456C11.7061 27.8353 11.3626 28.2539 10.9219\n                        28.5483C10.4812 28.8428 9.96304 29 9.43298 29C9.08087 29.0003 8.73212 28.9311 8.40674\n                        28.7966C8.08136 28.662 7.78569 28.4646 7.53662 28.2158C7.28755 27.9669 7.09001 27.6713 6.9552\n                        27.3461C6.82039 27.0208 6.75098 26.6721 6.75098 26.32H6.75293ZM10.553 20.686C10.2935 20.6868\n                        10.0409 20.6024 9.83411 20.4457C9.62727 20.2891 9.47758 20.0689 9.40796 19.819L4.57495\n                        2.36401H1.18201C0.868521 2.36401 0.567859 2.23947 0.346191 2.01781C0.124523 1.79614 0\n                        1.49549 0 1.18201C0 0.868519 0.124523 0.567873 0.346191 0.346205C0.567859 0.124537 0.868521\n                        5.81268e-06 1.18201 5.81268e-06H5.46301C5.7225 -0.00080736 5.97504 0.0837201 6.18176\n                        0.240568C6.38848 0.397416 6.53784 0.617884 6.60693 0.868006L11.4399 18.323H24.6179L29.001\n                        8.27501H14.401C14.2428 8.27961 14.0854 8.25242 13.9379 8.19507C13.7904 8.13771 13.6559 8.05134\n                        13.5424 7.94108C13.4288 7.83082 13.3386 7.69891 13.277 7.55315C13.2154 7.40739 13.1836 7.25075\n                        13.1836 7.0925C13.1836 6.93426 13.2154 6.77762 13.277 6.63186C13.3386 6.4861 13.4288 6.35419\n                        13.5424 6.24393C13.6559 6.13367 13.7904 6.0473 13.9379 5.98994C14.0854 5.93259 14.2428 5.90541\n                        14.401 5.91001H30.814C31.0097 5.90996 31.2022 5.95866 31.3744 6.05172C31.5465 6.14478 31.6928\n                        6.27926 31.7999 6.44301C31.9078 6.60729 31.9734 6.79569 31.9908 6.99145C32.0083 7.18721\n                        31.9771 7.38424 31.9 7.565L26.495 19.977C26.4026 20.1876 26.251 20.3668 26.0585 20.4927C25.866\n                        20.6186 25.641 20.6858 25.411 20.686H10.553Z\"/>\n                    </svg>\n                    </button>\n    <h2 v-if=\" cartItems.length === 0\">Корзина пуста</h2>\n        <div v-else >\n           \n            <div class=\"cart-block\" v-show=\"showCart\">      \n                <h3 > {{ this.cartItems.reduce((summ, item) => summ + item.quantity, 0) }} товара(ров) ИТОГО:{{ this.cartItems.reduce((summ, item) => summ + item.quantity*item.price, 0) }}) рублей </h3>\n                <cart-item v-for=\"item of cartItems\" :key=\"item.id_product\" :img=\"item.imgProduct\" :cart-item=\"item\" :cart-count = \"cartCount\"\n                :cart-summ = \"cartSumm\" @remove=\"remove\" @add-product=\"addProduct\">\n                </cart-item>\n            </div>  \n        </div>\n    </div>\n    `\n});\nVue.component('cart-item', {\n  props: ['img', 'cartItem'],\n  template: `\n    <div class=\"cart-item\">\n        <img class=\"cartImg\" :src=\"img\" alt=\"Some img\">\n        <div class=\"product-desc\">\n            <h3>{{ cartItem.product_name }}</h3>\n            <p>Цена: {{ cartItem.price }}</p>\n            <div class=\"changeQuantity\">\n                <button class=\"del-btn btnInCart\" @click=\"$emit('remove', cartItem)\"> &times; </button>\n                <p>&#160;{{ cartItem.quantity }}&#160; шт.&#160; </p>\n                <button class=\"btnInCart\" @click=\"$emit('add-product', cartItem)\"> + </button>\n            </div>          \n            <p>Сумма: {{ cartItem.price * cartItem.quantity }}</p>\n            <button class=\"btnInCartDel\" @click=\"$emit('delete', cartItem)\">Удалить</button>\n        </div>\n        \n    </div>\n    `\n});\n\n//# sourceURL=webpack://webpack/../public/js/CartComponent.js?");

/***/ }),

/***/ "../public/js/ErrorComp.js":
/*!*********************************!*\
  !*** ../public/js/ErrorComp.js ***!
  \*********************************/
/***/ (() => {

eval("Vue.component('error', {\n  data() {\n    return {\n      text: ''\n    };\n  },\n\n  computed: {\n    isVisible() {\n      return this.text !== '';\n    }\n\n  },\n  template: `\n    <div class=\"error-block\" v-if=\"isVisible\">\n        <p class=\"error-msg\">\n        <button class=\"close-btn\" @click=\"text=''\">&times;</button>\n        {{ text }}\n</p>\n</div>\n    `\n});\n\n//# sourceURL=webpack://webpack/../public/js/ErrorComp.js?");

/***/ }),

/***/ "../public/js/FilterComp.js":
/*!**********************************!*\
  !*** ../public/js/FilterComp.js ***!
  \**********************************/
/***/ (() => {

eval("Vue.component('filter-el', {\n  data() {\n    return {\n      userSearch: ''\n    };\n  },\n\n  template: `<form action=\"#\" class=\"search-form\" @submit.prevent=\"$parent.$refs.products.filter(userSearch)\">\n                <input type=\"text\" placeholder=\"поиск\" class=\"search-field\" v-model=\"userSearch\">\n                <button type=\"submit\" class=\"btn-search\">\n                    <i class=\"fas fa-search\"></i>\n                </button>\n            </form>`\n});\n\n//# sourceURL=webpack://webpack/../public/js/FilterComp.js?");

/***/ }),

/***/ "../public/js/ProductComponent.js":
/*!****************************************!*\
  !*** ../public/js/ProductComponent.js ***!
  \****************************************/
/***/ (() => {

eval("Vue.component('products', {\n  data() {\n    return {\n      catalogUrl: '/catalogData.json',\n      filtered: [],\n      products: [],\n      imgProduct: 'https://placehold.it/200x150'\n    };\n  },\n\n  mounted() {\n    this.$parent.getJson(`/api/products`).then(data => {\n      for (let item of data) {\n        item.imgPath = `img/${item.id_product}.jpg`;\n        this.$data.products.push(item);\n        this.$data.filtered.push(item);\n      }\n    });\n  },\n\n  methods: {\n    filter(userSearch) {\n      let regexp = new RegExp(userSearch, 'i');\n      this.filtered = this.products.filter(el => regexp.test(el.product_name));\n    }\n\n  },\n  template: `<ul class=\"featured_listing\">\n                <product v-for=\"item of filtered\" \n                :key=\"item.id_product\" \n                :img=\"item.imgProduct\"\n                :product=\"item\"\n                @add-product=\"$parent.$refs.cart.addProduct\"></product>\n               </ul>`\n});\nVue.component('product', {\n  props: ['product', 'img'],\n  template: `<li>\n<article class=\"featured_item\">\n                                <a href=\"#\" class=\"link\">\n                                    <img :src=img alt=\"Куртка\" height=\"420\" width=\"360\"\n                                         class=\"featured_item_img\">\n                                    <h3 class=\"featured_brand\">{{product.product_name}}</h3>\n                                    <p class=\"description_txt\">{{product.description}}</p>\n                                    <p class=\"featured_price\">{{product.price}}</p>\n                                   <button class=\"buy-btn featured_buy\" @click=\"$emit('add-product', product), $root.$refs.cart.showCart = true\"> \n                                   Купить\n                                   </button>\n                                </a>\n                            </article>\n</li>\n           \n    `\n});\n\n//# sourceURL=webpack://webpack/../public/js/ProductComponent.js?");

/***/ }),

/***/ "./import.js":
/*!*******************!*\
  !*** ./import.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_js_CartComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/js/CartComponent */ \"../public/js/CartComponent.js\");\n/* harmony import */ var _public_js_CartComponent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_js_CartComponent__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_js_ErrorComp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/js/ErrorComp */ \"../public/js/ErrorComp.js\");\n/* harmony import */ var _public_js_ErrorComp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_js_ErrorComp__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_js_ProductComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/js/ProductComponent */ \"../public/js/ProductComponent.js\");\n/* harmony import */ var _public_js_ProductComponent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_js_ProductComponent__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_js_FilterComp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/js/FilterComp */ \"../public/js/FilterComp.js\");\n/* harmony import */ var _public_js_FilterComp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_js_FilterComp__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack://webpack/./import.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./import.js");
/******/ 	
/******/ })()
;