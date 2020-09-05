import { font } from "./font";
import sizing from "./sizing";
import { box } from "./box";
import { transitions } from "./transitions";

/**
 * Common styles for theme provider
 * @type {{sizing: {quarterPadding: string, halfPadding: string, defaultPadding: string, doublePadding: string, biggerPadding: string}, box: {borderRadius: string}, transitions: {defaultTransition: string}, font: {size: string, family: string}}}
 * @category Styles
 */
export const common = {
  font: { ...font },
  sizing: { ...sizing },
  box: { ...box },
  transitions: { ...transitions },
};
