"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Modal(_ref) {
  let {
    isOpen,
    onClose,
    children
  } = _ref;
  if (!isOpen) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "close",
    onClick: onClose
  }, "\xD7"), children));
}
Modal.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  onClose: _propTypes.default.func.isRequired,
  children: _propTypes.default.node
};
var _default = exports.default = Modal;