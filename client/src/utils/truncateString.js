export const truncateString = (stringValue, maxLength) => {
  let truncateLocation = stringValue.indexOf(" ", maxLength);
  if (truncateLocation === -1) return stringValue;
  return stringValue.substring(0, truncateLocation) + "...";
};
