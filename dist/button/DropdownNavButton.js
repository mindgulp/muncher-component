"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropdownNavButton;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./assets/DropdownNavButton.scss");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DropdownNavButton(_ref) {
  var variant = _ref.variant,
      size = _ref.size,
      title = _ref.title,
      active = _ref.active,
      disabled = _ref.disabled,
      element = _ref.element,
      rounded = _ref.rounded,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["variant", "size", "title", "active", "disabled", "element", "rounded", "children"]);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-dropdown-nav"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    type: "nav",
    title: title,
    disabled: disabled,
    rounded: rounded,
    active: active,
    variant: variant,
    size: size
  }, props), element), /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-dropdown-nav--content"
  }, children));
}

DropdownNavButton.propTypes = {
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'tertiary']),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  title: _propTypes.default.string,
  active: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  rounded: _propTypes.default.bool,
  element: _propTypes.default.element.isRequired,
  children: _propTypes.default.any
};
DropdownNavButton.defaultProps = {
  size: 'medium'
};