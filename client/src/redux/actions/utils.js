/**
 * @description generates the error message out of received error from api
 * @param {Object} error error received from api
 * @param {String} entity name of the entity: 'carList' or 'carCurrent'
 * @returns {String} aggregated error message
 */
export const getErrorMessage = (error, entity) => {
  let errorMessage = "API call failed.";

  if (error.response && error.response.data) {
    errorMessage = error.response.data;
  } else if (error.message) {
    errorMessage = error.message;
  }

  return `${errorMessage}. ${entity}`;
};
