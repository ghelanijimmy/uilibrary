import { colors, colorsLight } from "./colors";

/**
 * Button styles for light theme
 * @type {{secondary: {inverse: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}, regular: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}}, primary: {inverse: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}, regular: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}}}}
 * @category Styles
 */
export const buttonLight = {
  primary: {
    regular: {
      bgColor: colorsLight.primary,
      color: colors.white,
      hoverBGColor: colorsLight.primaryLighter1,
      hoverColor: colors.white,
      borderColor: colorsLight.primary,
      hoverBorderColor: colorsLight.primaryLighter1,
    },
    inverse: {
      bgColor: colors.white,
      color: colorsLight.primary,
      hoverBGColor: colors.white,
      hoverColor: colorsLight.primaryLighter1,
      borderColor: colorsLight.primary,
      hoverBorderColor: colorsLight.primaryLighter1,
    },
  },
  secondary: {
    regular: {
      bgColor: colorsLight.secondary,
      color: colors.white,
      hoverBGColor: colorsLight.secondaryLighter1,
      hoverColor: colors.white,
      borderColor: colorsLight.secondary,
      hoverBorderColor: colorsLight.secondaryLighter1,
    },
    inverse: {
      bgColor: colors.white,
      color: colorsLight.secondary,
      hoverBGColor: colors.white,
      hoverColor: colorsLight.secondaryLighter1,
      borderColor: colorsLight.secondary,
      hoverBorderColor: colorsLight.secondaryLighter1,
    },
  },
};
