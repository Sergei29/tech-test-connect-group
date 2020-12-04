export const getErrorMessage = (error, entity) => {
  let errorMessage = "API call failed.";

  if (error.response) {
    errorMessage = error.response.data;
  } else if (error.message) {
    errorMessage = error.message;
  }

  return `${errorMessage}. ${entity}`;
};
