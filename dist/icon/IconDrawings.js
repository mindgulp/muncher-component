"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconDrawings = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var iconDrawings = {
  'align-center': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("line", {
    x1: "18",
    y1: "10",
    x2: "6",
    y2: "10"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "21",
    y1: "6",
    x2: "3",
    y2: "6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "21",
    y1: "14",
    x2: "3",
    y2: "14"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "18",
    y1: "18",
    x2: "6",
    y2: "18"
  })),
  'align-justify': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("line", {
    x1: "21",
    y1: "10",
    x2: "3",
    y2: "10"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "21",
    y1: "6",
    x2: "3",
    y2: "6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "21",
    y1: "14",
    x2: "3",
    y2: "14"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "21",
    y1: "18",
    x2: "3",
    y2: "18"
  })),
  'align-left': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("line", {
    x1: "17",
    y1: "10",
    x2: "3",
    y2: "10"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "21",
    y1: "6",
    x2: "3",
    y2: "6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "21",
    y1: "14",
    x2: "3",
    y2: "14"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "17",
    y1: "18",
    x2: "3",
    y2: "18"
  })),
  'align-right': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("line", {
    x1: "21",
    y1: "10",
    x2: "7",
    y2: "10"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "21",
    y1: "6",
    x2: "3",
    y2: "6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "21",
    y1: "14",
    x2: "3",
    y2: "14"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "21",
    y1: "18",
    x2: "7",
    y2: "18"
  })),
  'arrow-left': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "12 8 8 12 12 16"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "16",
    y1: "12",
    x2: "8",
    y2: "12"
  })),
  'arrow-right': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "12 16 16 12 12 8"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  })),
  'fast-forward': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "13 19 22 12 13 5 13 19"
  }), /*#__PURE__*/_react.default.createElement("polygon", {
    points: "2 19 11 12 2 5 2 19"
  })),
  'pause': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("rect", {
    x: "6",
    y: "4",
    width: "4",
    height: "16"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "14",
    y: "4",
    width: "4",
    height: "16"
  })),
  'play': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "5 3 19 12 5 21 5 3"
  })),
  'power': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M18.36 6.64a9 9 0 1 1-12.73 0"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "12"
  })),
  'repeat': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "17 1 21 5 17 9"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M3 11V9a4 4 0 0 1 4-4h14"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "7 23 3 19 7 15"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M21 13v2a4 4 0 0 1-4 4H3"
  })),
  'rewind': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "11 19 2 12 11 5 11 19"
  }), /*#__PURE__*/_react.default.createElement("polygon", {
    points: "22 19 13 12 22 5 22 19"
  })),
  'shuffle': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "16 3 21 3 21 8"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "4",
    y1: "20",
    x2: "21",
    y2: "3"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "21 16 21 21 16 21"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "15",
    y1: "15",
    x2: "21",
    y2: "21"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "4",
    y1: "4",
    x2: "9",
    y2: "9"
  })),
  'skip-back': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "19 20 9 12 19 4 19 20"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "5",
    y1: "19",
    x2: "5",
    y2: "5"
  })),
  'skip-forward': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "5 4 15 12 5 20 5 4"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "19",
    y1: "5",
    x2: "19",
    y2: "19"
  })),
  'alert': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12.01",
    y2: "16"
  })),
  'arrow-down': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "8 12 12 16 16 12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "16"
  })),
  'arrow-up': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "16 12 12 8 8 12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "8"
  })),
  'check': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "22 4 12 14.01 9 11.01"
  })),
  'help': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  })),
  'info': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12.01",
    y2: "8"
  })),
  'calendar': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "16",
    y1: "2",
    x2: "16",
    y2: "6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "3",
    y1: "10",
    x2: "21",
    y2: "10"
  })),
  'close': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "15",
    y1: "9",
    x2: "9",
    y2: "15"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "9",
    y1: "9",
    x2: "15",
    y2: "15"
  })),
  'code': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "16 18 22 12 16 6"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "8 6 2 12 8 18"
  })),
  'edit': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
  })),
  'hamburger': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "21",
    y2: "18"
  })),
  'image': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "8.5",
    cy: "8.5",
    r: "1.5"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "21 15 16 10 5 21"
  })),
  'link': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
  })),
  'loading': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12",
    y2: "22"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "4.93",
    y1: "4.93",
    x2: "7.76",
    y2: "7.76"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "16.24",
    y1: "16.24",
    x2: "19.07",
    y2: "19.07"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "2",
    y1: "12",
    x2: "6",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "18",
    y1: "12",
    x2: "22",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "4.93",
    y1: "19.07",
    x2: "7.76",
    y2: "16.24"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "16.24",
    y1: "7.76",
    x2: "19.07",
    y2: "4.93"
  })),
  'minus': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  })),
  'muncher': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "16",
    y1: "2",
    x2: "16",
    y2: "6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "7",
    y1: "10",
    x2: "17",
    y2: "10"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "7",
    y1: "14",
    x2: "17",
    y2: "14"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "7",
    y1: "18",
    x2: "17",
    y2: "18"
  })),
  'mute': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "23",
    y1: "9",
    x2: "17",
    y2: "15"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "17",
    y1: "9",
    x2: "23",
    y2: "15"
  })),
  'ordered-list': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("line", {
    x1: "9",
    y1: "5",
    x2: "21",
    y2: "5"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "9",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "9",
    y1: "19",
    x2: "21",
    y2: "19"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "3 10 5 10 3 13 5 13"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "3 3 4 3 4 6"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M3 17H4H5L4 19C4.55 19 5 19.45 5 20C5 20.55 4.55 21 4 21H3"
  })),
  'phone': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("rect", {
    x: "5",
    y: "2",
    width: "14",
    height: "20",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  })),
  'plus': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "16"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  })),
  'redo': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "22 10 22 16 16 16"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "m1.9935 16c1.8136-6.5424 9.5593-9.4823 15.36-4.36l4.64 4.36"
  })),
  'search': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  })),
  'settings': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
  })),
  'smile': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M8 14s1.5 2 4 2 4-2 4-2"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "9",
    y1: "9",
    x2: "9.01",
    y2: "9"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "15",
    y1: "9",
    x2: "15.01",
    y2: "9"
  })),
  'toggle-left': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("rect", {
    x: "1",
    y: "5",
    width: "22",
    height: "14",
    rx: "7",
    ry: "7"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "8",
    cy: "12",
    r: "3"
  })),
  'toggle-right': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("rect", {
    x: "1",
    y: "5",
    width: "22",
    height: "14",
    rx: "7",
    ry: "7"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "16",
    cy: "12",
    r: "3"
  })),
  'type': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "4 7 4 4 20 4 20 7"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "9",
    y1: "20",
    x2: "15",
    y2: "20"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "20"
  })),
  'undo': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "2 10 2 16 8 16"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "m22 16c-1.8136-6.5424-9.5593-9.4823-15.36-4.36l-4.64 4.36"
  })),
  'unlink': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M18.84 12.25l1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M5.17 11.75l-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "5"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "2",
    y1: "8",
    x2: "5",
    y2: "8"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "16",
    y1: "19",
    x2: "16",
    y2: "22"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "19",
    y1: "16",
    x2: "22",
    y2: "16"
  })),
  'unordered-list': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("line", {
    x1: "9",
    y1: "5",
    x2: "21",
    y2: "5"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "9",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "9",
    y1: "19",
    x2: "21",
    y2: "19"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "4",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "4",
    cy: "5",
    r: "1"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "4",
    cy: "19",
    r: "1"
  })),
  'youtube': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
  }), /*#__PURE__*/_react.default.createElement("polygon", {
    points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
  })),
  'volume': /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
  }))
};
exports.iconDrawings = iconDrawings;