/**
 * @description truncates string based on max length
 * @param {String} stringValue the string value
 * @param {Number} maxLength max length needed
 * @returns {String} truncated string + ...
 */
export const truncateString = (stringValue, maxLength) => {
  let truncateLocation = stringValue.indexOf(" ", maxLength);
  if (truncateLocation === -1) return stringValue;
  return stringValue.substring(0, truncateLocation) + "...";
};
