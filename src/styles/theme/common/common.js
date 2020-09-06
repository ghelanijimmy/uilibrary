import { typography } from "./typography";
import sizing from "./sizing";
import { box } from "./box";
import { transitions } from "./transitions";

/**
 * Common styles for theme provider
 * @type {{sizing: {quarterPadding: string, halfPadding: string, defaultPadding: string, doublePadding: string, biggerPadding: string}, box: {borderRadius: string}, transitions: {defaultTransition: string}, typography: {size: string, family: string}}}
 * @category Styles
 */
export const common = {
  type: { ...typography },
  sizing: { ...sizing },
  box: { ...box },
  transitions: { ...transitions },
};
