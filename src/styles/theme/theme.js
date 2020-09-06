import { light } from "./light";
import { common } from "./common/common";
import { colors } from "./common/colors";

/**
 * Styles for styled component theme provider
 * @type {{common: {sizing: {quarterPadding: string, halfPadding: string, defaultPadding: string, doublePadding: string, biggerPadding: string}, box: {borderRadius: string}, transitions: {defaultTransition: string}, typography: {size: string, family: string}}, light: {button: {secondary: {inverse: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}, regular: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}}, primary: {inverse: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}, regular: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}}}}, colors: {white: string, black: string}}}
 * @category Styles
 */
export const theme = {
  light,
  common,
  colors,
};
