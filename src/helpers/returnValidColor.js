const returnValidColor = (color) => {
  const colorRegex = new RegExp(
    /^(#([\da-f]{3}){1,2}|(rgb|hsl)a\((\d{1,3}%?,\s?){3}(1|0?\.\d+)\)|(rgb|hsl)\(\d{1,3}%?(,\s?\d{1,3}%?){2}\))+$|^([a-zA-Z])+$/
  );

  return colorRegex.test(color);
};
export default returnValidColor;
