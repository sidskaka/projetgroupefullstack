module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout/components/main/contact/contactform.jsx":
/*!*******************************************************************!*\
  !*** ./components/layout/components/main/contact/contactform.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\SKA\\source\\repos\\projetgroupefullstack\\client\\components\\layout\\components\\main\\contact\\contactform.jsx";


const ContactForm = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    id: "contact-us",
    className: "contact-us section",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "contact-head",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-8 col-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-main",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "title",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  children: "Get in touch"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "Write us a message"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 11
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 10
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                className: "form",
                method: "post",
                action: "mail/mail.php",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "row",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "col-lg-6 col-12",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        children: ["Your Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "*"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 19,
                          columnNumber: 30
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 19,
                        columnNumber: 14
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        name: "name",
                        type: "text",
                        placeholder: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 20,
                        columnNumber: 14
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 18,
                      columnNumber: 13
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 17,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "col-lg-6 col-12",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        children: ["Your Subjects", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "*"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 25,
                          columnNumber: 34
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 25,
                        columnNumber: 14
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        name: "subject",
                        type: "text",
                        placeholder: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 26,
                        columnNumber: 14
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 24,
                      columnNumber: 13
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 23,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "col-lg-6 col-12",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        children: ["Your Email", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "*"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 31,
                          columnNumber: 31
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 31,
                        columnNumber: 14
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        name: "email",
                        type: "email",
                        placeholder: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 32,
                        columnNumber: 14
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 30,
                      columnNumber: 13
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 29,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "col-lg-6 col-12",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        children: ["Your Phone", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "*"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 37,
                          columnNumber: 31
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 37,
                        columnNumber: 14
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        name: "company_name",
                        type: "text",
                        placeholder: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 38,
                        columnNumber: 14
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 36,
                      columnNumber: 13
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "col-12",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "form-group message",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        children: ["your message", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "*"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 43,
                          columnNumber: 33
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 43,
                        columnNumber: 14
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                        name: "message",
                        placeholder: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 44,
                        columnNumber: 14
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 42,
                      columnNumber: 13
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "col-12",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "form-group button",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        type: "submit",
                        className: "btn ",
                        children: "Send Message"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 49,
                        columnNumber: 14
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 13
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 12
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 11
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 10
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 8
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-4 col-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "single-head",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "single-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fa fa-phone"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  className: "title",
                  children: "Call us Now:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "+123 456-789-1120"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "+522 672-452-1120"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 12
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 11
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 10
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "single-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fa fa-envelope-open"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  className: "title",
                  children: "Email:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "mailto:info@yourwebsite.com",
                      children: "info@yourwebsite.com"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 16
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "mailto:info@yourwebsite.com",
                      children: "support@yourwebsite.com"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 16
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 12
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 11
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 10
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "single-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fa fa-location-arrow"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  className: "title",
                  children: "Our Address:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "KA-62/1, Travel Agency, 45 Grand Central Terminal, New York."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 12
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 11
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 10
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 8
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 6
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./components/layout/components/main/contact/index.jsx":
/*!*************************************************************!*\
  !*** ./components/layout/components/main/contact/index.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _minimenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minimenu */ "./components/layout/components/main/contact/minimenu.jsx");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ "./components/layout/components/main/contact/map.jsx");
/* harmony import */ var _contactform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactform */ "./components/layout/components/main/contact/contactform.jsx");
/* harmony import */ var _newsletter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../newsletter */ "./components/layout/components/main/newsletter.jsx");


var _jsxFileName = "C:\\Users\\SKA\\source\\repos\\projetgroupefullstack\\client\\components\\layout\\components\\main\\contact\\index.jsx";






const Contact = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_minimenu__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contactform__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_newsletter__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/layout/components/main/contact/map.jsx":
/*!***********************************************************!*\
  !*** ./components/layout/components/main/contact/map.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\SKA\\source\\repos\\projetgroupefullstack\\client\\components\\layout\\components\\main\\contact\\map.jsx";


const Map = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "map-section",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "myMap"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./components/layout/components/main/contact/minimenu.jsx":
/*!****************************************************************!*\
  !*** ./components/layout/components/main/contact/minimenu.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\SKA\\source\\repos\\projetgroupefullstack\\client\\components\\layout\\components\\main\\contact\\minimenu.jsx";


const Minimenu = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "breadcrumbs",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "bread-inner",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              className: "bread-list",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "index1.html",
                  children: ["Home", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "ti-arrow-right"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 11,
                    columnNumber: 39
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 11,
                  columnNumber: 13
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "active",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "blog-single.html",
                  children: "Contact"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 32
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 8
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Minimenu);

/***/ }),

/***/ "./components/layout/components/main/newsletter.jsx":
/*!**********************************************************!*\
  !*** ./components/layout/components/main/newsletter.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\SKA\\source\\repos\\projetgroupefullstack\\client\\components\\layout\\components\\main\\newsletter.jsx";


const Newsletter = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "shop-newsletter section",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "inner-top",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-8 offset-lg-2 col-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "inner",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: "Newsletter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: [" Subscribe to our newsletter and get ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "10%"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 49
                }, undefined), " off your first purchase"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                action: "mail/mail.php",
                method: "get",
                target: "_blank",
                className: "newsletter-inner",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  name: "EMAIL",
                  placeholder: "Your email address",
                  required: "",
                  type: "email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 10
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn",
                  children: "Subscribe"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 10
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 8
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Newsletter);

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_components_main_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/components/main/contact */ "./components/layout/components/main/contact/index.jsx");

var _jsxFileName = "C:\\Users\\SKA\\source\\repos\\projetgroupefullstack\\client\\pages\\contact.js";



const ContactIndex = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_components_main_contact__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ContactIndex);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvY29tcG9uZW50cy9tYWluL2NvbnRhY3QvY29udGFjdGZvcm0uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2NvbXBvbmVudHMvbWFpbi9jb250YWN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9jb21wb25lbnRzL21haW4vY29udGFjdC9tYXAuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2NvbXBvbmVudHMvbWFpbi9jb250YWN0L21pbmltZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9jb21wb25lbnRzL21haW4vbmV3c2xldHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNvbnRhY3RGb3JtIiwiQ29udGFjdCIsIk1hcCIsIk1pbmltZW51IiwiTmV3c2xldHRlciIsIkNvbnRhY3RJbmRleCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtR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QUFDLGtCQUFwRTtBQUFBLHdDQUNDO0FBQU8sc0JBQUksRUFBQyxPQUFaO0FBQW9CLDZCQUFXLEVBQUMsb0JBQWhDO0FBQXFELDBCQUFRLEVBQUMsRUFBOUQ7QUFBaUUsc0JBQUksRUFBQztBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURELGVBRUM7QUFBUSwyQkFBUyxFQUFDLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREs7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBc0JILENBdkJEOztBQXlCZUEseUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsTUFBTTtBQUN2QixzQkFDSSxxRUFBQyxrRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFHSCxDQUpEOztBQU1lQSwyRUFBZixFOzs7Ozs7Ozs7OztBQ1RBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2NvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2NvbnRhY3QuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDb250YWN0Rm9ybSA9ICgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBpZD1cImNvbnRhY3QtdXNcIiBjbGFzc05hbWU9XCJjb250YWN0LXVzIHNlY3Rpb25cIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1oZWFkXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOCBjb2wtMTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1tYWluXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQ+R2V0IGluIHRvdWNoPC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDM+V3JpdGUgdXMgYSBtZXNzYWdlPC9oMz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT1cImZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwibWFpbC9tYWlsLnBocFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+WW91ciBOYW1lPHNwYW4+Kjwvc3Bhbj48L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtMTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsPllvdXIgU3ViamVjdHM8c3Bhbj4qPC9zcGFuPjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJzdWJqZWN0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+WW91ciBFbWFpbDxzcGFuPio8L3NwYW4+PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+WW91ciBQaG9uZTxzcGFuPio8L3NwYW4+PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImNvbXBhbnlfbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbD55b3VyIG1lc3NhZ2U8c3Bhbj4qPC9zcGFuPjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIG5hbWU9XCJtZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJcIj48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBcIj5TZW5kIE1lc3NhZ2U8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtMTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWhlYWRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLXBob25lXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPkNhbGwgdXMgTm93OjwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPisxMjMgNDU2LTc4OS0xMTIwPC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT4rNTIyIDY3Mi00NTItMTEyMDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWluZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1lbnZlbG9wZS1vcGVuXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPkVtYWlsOjwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCJtYWlsdG86aW5mb0B5b3Vyd2Vic2l0ZS5jb21cIj5pbmZvQHlvdXJ3ZWJzaXRlLmNvbTwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCJtYWlsdG86aW5mb0B5b3Vyd2Vic2l0ZS5jb21cIj5zdXBwb3J0QHlvdXJ3ZWJzaXRlLmNvbTwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1pbmZvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtbG9jYXRpb24tYXJyb3dcIj48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+T3VyIEFkZHJlc3M6PC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+S0EtNjIvMSwgVHJhdmVsIEFnZW5jeSwgNDUgR3JhbmQgQ2VudHJhbCBUZXJtaW5hbCwgTmV3IFlvcmsuPC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0PC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBNaW5pTWVudSBmcm9tICcuL21pbmltZW51J1xyXG5pbXBvcnQgTWFwIGZyb20gJy4vbWFwJ1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi9jb250YWN0Zm9ybSdcclxuaW1wb3J0IE5ld3NsZXR0ZXIgZnJvbSAnLi4vbmV3c2xldHRlcidcclxuXHJcbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1pbmlNZW51IC8+XHJcbiAgICAgICAgICAgIDxDb250YWN0Rm9ybSAvPlxyXG4gICAgICAgICAgICA8TmV3c2xldHRlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTWFwID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwLXNlY3Rpb25cIj5cclxuXHRcdCAgICA8ZGl2IGlkPVwibXlNYXBcIj48L2Rpdj5cclxuXHQgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IE1pbmltZW51ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYnNcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJicmVhZC1pbm5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJicmVhZC1saXN0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cImluZGV4MS5odG1sXCI+SG9tZTxpIGNsYXNzTmFtZT1cInRpLWFycm93LXJpZ2h0XCI+PC9pPjwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPjxhIGhyZWY9XCJibG9nLXNpbmdsZS5odG1sXCI+Q29udGFjdDwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1pbmltZW51IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTmV3c2xldHRlciA9ICgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzaG9wLW5ld3NsZXR0ZXIgc2VjdGlvblwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItdG9wXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IG9mZnNldC1sZy0yIGNvbC0xMlwiPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQ+TmV3c2xldHRlcjwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD4gU3Vic2NyaWJlIHRvIG91ciBuZXdzbGV0dGVyIGFuZCBnZXQgPHNwYW4+MTAlPC9zcGFuPiBvZmYgeW91ciBmaXJzdCBwdXJjaGFzZTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxmb3JtIGFjdGlvbj1cIm1haWwvbWFpbC5waHBcIiBtZXRob2Q9XCJnZXRcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJuZXdzbGV0dGVyLWlubmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwiRU1BSUxcIiBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWwgYWRkcmVzc1wiIHJlcXVpcmVkPVwiXCIgdHlwZT1cImVtYWlsXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj5TdWJzY3JpYmU8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzbGV0dGVyXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvY29tcG9uZW50cy9tYWluL2NvbnRhY3QnXHJcblxyXG5jb25zdCBDb250YWN0SW5kZXggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENvbnRhY3QgLz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEluZGV4XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9