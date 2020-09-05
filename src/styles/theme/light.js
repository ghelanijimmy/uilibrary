import { buttonLight } from "./common/button";

/**
 * Light Theme Styles
 * @type {{button: {secondary: {inverse: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}, regular: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}}, primary: {inverse: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}, regular: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}}}}}
 * @category Styles
 */
export const light = {
  button: {
    primary: {
      ...buttonLight.primary,
    },
    secondary: {
      ...buttonLight.secondary,
    },
  },
};
