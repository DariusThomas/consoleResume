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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ConsoleResume.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ConsoleResume.ts":
/*!**************************!*\
  !*** ./ConsoleResume.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar Resume = {\r\n    Name: \"Darius Thomas\".toUpperCase(),\r\n    Career: \"Full-Stack Developer\",\r\n    Description: \"Ready to learn!\",\r\n    \"My Interests\": [\"Software Development\", \"Exercising\", \"Going Out\", \"Music\", \"Art\", \"Food\"],\r\n    \"Previous Experience\": [\"Two semesters worth of coding experience with MATLAB \", \"I've dabbled in FreeCodeCamps front-end tutorial work\", \"I've registered for and am currently completing the drills for Covalence full-stack course prepwork\", \" 3 years experience as a Mechanical engineering student at FAU\", \"4 years experience as a restaurant waiter/Bartender\"],\r\n    Company: ['Florida Atlantic University', 'FreeCodeCamp', 'Covalence', 'Florida Atlantic University', \"TGI Fridays/Duffy's\"],\r\n    \"Job Title\": ['Student', 'Student', 'Student', 'Student', \"Waiter/Bartender\"],\r\n    \"My Skills\": [\"Introductory HTML\", \"Introductory CSS\", \"Introductory JavaScript\", \"Introductory JQuery\", \"Introductory Bootstrap\", \"Introductory React and Redux\", \"Intermediate MATLAB\"],\r\n    \"Cool Skill?\": [true, true, true, true, true, true, false]\r\n};\r\nconsole.log(\"Name : \" + Resume['Name']);\r\nconsole.log(\"Career: \" + Resume['Career']);\r\nconsole.log(\"Description: \" + Resume['Description']);\r\nconsole.log(\"Previous Expereince:\");\r\nconsole.log(displayPosition(Resume[\"Company\"], Resume[\"Job Title\"], Resume[\"Previous Experience\"]));\r\nfunction displayPosition(companyName, jobTitle, description) {\r\n    for (var i = 0; i < description.length; i++) {\r\n        console.log(\"Company Name: \" + companyName[i]);\r\n        console.log(\"Job Title: \" + jobTitle[i]);\r\n        console.log(\"Description: \" + description[i]);\r\n        console.log(\"_________________\");\r\n    }\r\n    ;\r\n    console.log(\"Skills:\");\r\n    console.log(displaySkill(Resume[\"My Skills\"], Resume[\"Cool Skill?\"]));\r\n}\r\nfunction displaySkill(skill, cool) {\r\n    for (var i = 0; i < skill.length; i++) {\r\n        if (cool[i] == true) {\r\n            console.log(\"Bam: \" + skill[i]);\r\n        }\r\n        else {\r\n            console.log(skill[i]);\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./ConsoleResume.ts?");

/***/ })

/******/ });