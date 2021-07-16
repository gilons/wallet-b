"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Translator = void 0;
var react_1 = require("react");
var react_2 = require("react");
var styled_components_1 = require("styled-components");
var locales_1 = require("../../locales");
var themes_1 = require("../../themes");
var utils_1 = require("../../utils");
var svg_icons_1 = require("../svg-icons");
var svg_icons_2 = require("../svg-icons");
var languages_1 = require("./languages");
var TranslatorContainer = styled_components_1["default"](themes_1.Container)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  margin-right: 20px;\n  cursor: pointer;\n  justify-content: space-between;\n  border-radius: 30px;\n  background-color: ", ";\n  box-shadow: ", ";\n  border-color: ", ";\n"], ["\n  align-items: center;\n  margin-right: 20px;\n  cursor: pointer;\n  justify-content: space-between;\n  border-radius: 30px;\n  background-color: ", ";\n  box-shadow: ", ";\n  border-color: ", ";\n"])), function (props) { return props.theme.primary; }, themes_1.shadow, function (props) { return props.theme.accent; });
var TransIconContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  &:hover {\n    transform: scale(1.3);\n    transition: all 0.5s 0.5s ease-in-out;\n  }\n"], ["\n  &:hover {\n    transform: scale(1.3);\n    transition: all 0.5s 0.5s ease-in-out;\n  }\n"])));
var languageIcons = {
    en: svg_icons_2.EnglishIcon,
    fr: svg_icons_2.FranceIcon,
    chin: svg_icons_2.ChinaIcon
};
var languageText = {
    en: "English",
    fr: "Français",
    chin: "中国人"
};
exports.Translator = function () {
    var languages = react_1.useMemo(function () {
        return Object.keys(languageText).map(function (element) { return ({
            value: element,
            Icon: languageIcons[element],
            text: languageText[element]
        }); });
    }, []);
    var handleLanguageChange = function (item) {
        locales_1.changeLocale(item.value);
    };
    var _a = utils_1.useModal(), _ = _a[0], setModalState = _a[1];
    var showLanguages = react_2.useCallback(function () {
        var newState = {
            shown: true,
            maxWidth: 500,
            maxHeight: 300,
            Component: React.createElement(languages_1.Languages, { options: languages, onClick: handleLanguageChange, toggleOptions: function () { return setModalState({ shown: false }); } })
        };
        setModalState(newState);
    }, [languages, setModalState]);
    return (React.createElement(TranslatorContainer, { onClick: showLanguages },
        React.createElement(TransIconContainer, null,
            React.createElement(svg_icons_1.TranslationIcon, null))));
};
var templateObject_1, templateObject_2;
