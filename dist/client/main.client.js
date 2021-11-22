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

/***/ "./src/client/Events.ts":
/*!******************************!*\
  !*** ./src/client/Events.ts ***!
  \******************************/
/***/ (() => {

eval("\r\nconst PlayerPed = GetPlayerPed(-1);\r\nconsole.log('Events');\r\nonNet('marker:bar', (id) => {\r\n    console.log('bar', id);\r\n});\r\n\n\n//# sourceURL=webpack://typescript-resource/./src/client/Events.ts?");

/***/ }),

/***/ "./src/client/Marker.ts":
/*!******************************!*\
  !*** ./src/client/Marker.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MarkerArray = exports.Marker = void 0;\r\nconst utils_1 = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.ts\");\r\nconst MarkerTemplates_1 = __webpack_require__(/*! ./MarkerTemplates */ \"./src/client/MarkerTemplates.ts\");\r\nclass Marker {\r\n    constructor(systemName, id, template, coordinates) {\r\n        this.systemName = systemName;\r\n        this.template = template;\r\n        this.id = id;\r\n        this.coordinates = coordinates;\r\n        this.kind = MarkerTemplates_1.MarkerTemplates[this.template].kind;\r\n        this.color = MarkerTemplates_1.MarkerTemplates[this.template].color;\r\n        this.size = MarkerTemplates_1.MarkerTemplates[this.template].size;\r\n        this.alpha = MarkerTemplates_1.MarkerTemplates[this.template].alpha;\r\n    }\r\n    Callback() {\r\n        TriggerEvent(`marker:${this.systemName}`, this.id);\r\n    }\r\n}\r\nexports.Marker = Marker;\r\nclass MarkerArray {\r\n    constructor(defaultMarkers) {\r\n        if (defaultMarkers) {\r\n            this.allMarkers = [...defaultMarkers];\r\n        }\r\n        else {\r\n            this.allMarkers = [];\r\n        }\r\n    }\r\n    Add(markerToAdd) {\r\n        this.allMarkers.push(markerToAdd);\r\n    }\r\n    Render() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            while (true) {\r\n                yield (0, utils_1.Delay)(10);\r\n                this.allMarkers.forEach(Marker => {\r\n                    // console.log('allMarkers Iteration');\r\n                    if ((0, utils_1.GetVectorDistance)((0, utils_1.GetPlayerVector)(), Marker.coordinates) < 10) {\r\n                        // @ts-ignore\r\n                        DrawMarker(Marker.kind, Marker.coordinates.x, Marker.coordinates.y, Marker.coordinates.z - 1, 0, 0, 0, 0, 0, 0, Marker.size.sizeX, Marker.size.sizeY, Marker.size.sizeZ, Marker.color.red, Marker.color.green, Marker.color.blue, Marker.alpha, false, false, 2, false, null, null, false);\r\n                    }\r\n                    if ((0, utils_1.GetVectorDistance)((0, utils_1.GetPlayerVector)(), Marker.coordinates) < 1 && IsControlJustReleased(0, 38)) {\r\n                        Marker.Callback();\r\n                    }\r\n                });\r\n            }\r\n        });\r\n    }\r\n}\r\nexports.MarkerArray = MarkerArray;\r\n\n\n//# sourceURL=webpack://typescript-resource/./src/client/Marker.ts?");

/***/ }),

/***/ "./src/client/MarkerHandler.ts":
/*!*************************************!*\
  !*** ./src/client/MarkerHandler.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst Marker_1 = __webpack_require__(/*! ./Marker */ \"./src/client/Marker.ts\");\r\n__webpack_require__(/*! ./Events */ \"./src/client/Events.ts\");\r\nconst MarkersList = {\r\n    bar: [\r\n        {\r\n            id: 0,\r\n            type: 'bar',\r\n            template: 'default',\r\n            coordinates: {\r\n                x: -2046.43,\r\n                y: 3148.33,\r\n                z: 32.81\r\n            }\r\n        }\r\n    ],\r\n    lsc: [\r\n        {\r\n            id: 0,\r\n            type: 'lsc',\r\n            template: 'lsc',\r\n            coordinates: {\r\n                x: -2053.13,\r\n                y: 3146.99,\r\n                z: 32.81\r\n            }\r\n        }\r\n    ]\r\n};\r\nconst AllMarkers = new Marker_1.MarkerArray();\r\nfor (let key in MarkersList) {\r\n    // @ts-ignore\r\n    MarkersList[key].forEach(MarkerInformation => {\r\n        // @ts-ignore\r\n        const NewMarker = new Marker_1.Marker(key, MarkerInformation.id, MarkerInformation.template, MarkerInformation.coordinates);\r\n        AllMarkers.Add(NewMarker);\r\n    });\r\n}\r\nAllMarkers.Render();\r\n\n\n//# sourceURL=webpack://typescript-resource/./src/client/MarkerHandler.ts?");

/***/ }),

/***/ "./src/client/MarkerTemplates.ts":
/*!***************************************!*\
  !*** ./src/client/MarkerTemplates.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MarkerTemplates = void 0;\r\nexports.MarkerTemplates = {\r\n    default: {\r\n        kind: 1,\r\n        color: { red: 207, green: 181, blue: 106 },\r\n        size: { sizeX: 0.5, sizeY: 0.5, sizeZ: 0.3 },\r\n        alpha: 0.5\r\n    },\r\n    mission: {\r\n        kind: 1,\r\n        color: { red: 92, green: 192, blue: 106 },\r\n        size: { sizeX: 0.5, sizeY: 0.5, sizeZ: 0.3 },\r\n        alpha: 0.5\r\n    },\r\n    garage: {\r\n        kind: 1,\r\n        color: { red: 214, green: 79, blue: 102 },\r\n        size: { sizeX: 2, sizeY: 2, sizeZ: 0.2 },\r\n        alpha: 0.5\r\n    },\r\n    lsc: {\r\n        kind: 1,\r\n        color: { red: 144, green: 174, blue: 255 },\r\n        size: { sizeX: 2, sizeY: 2, sizeZ: 0.2 },\r\n        alpha: 0.5\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://typescript-resource/./src/client/MarkerTemplates.ts?");

/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.GetPlayerVector = exports.GetVectorDistance = exports.Delay = void 0;\r\nconst Delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));\r\nexports.Delay = Delay;\r\nfunction GetVectorDistance(vec1, vec2) {\r\n    let dx = vec1.x - vec2.x;\r\n    let dy = vec1.y - vec2.y;\r\n    let dz = vec1.z - vec2.z;\r\n    return Math.sqrt((Math.pow(dx, 2)) + (Math.pow(dy, 2)) + (Math.pow(dz, 2)));\r\n}\r\nexports.GetVectorDistance = GetVectorDistance;\r\nconst Player = GetPlayerPed(-1);\r\nfunction GetPlayerVector() {\r\n    let playerCoords = GetEntityCoords(Player);\r\n    return {\r\n        x: playerCoords[0],\r\n        y: playerCoords[1],\r\n        z: playerCoords[2]\r\n    };\r\n}\r\nexports.GetPlayerVector = GetPlayerVector;\r\n\n\n//# sourceURL=webpack://typescript-resource/./src/utils/utils.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/MarkerHandler.ts");
/******/ 	
/******/ })()
;