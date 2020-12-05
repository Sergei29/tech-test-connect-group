export const getErrorMessage = (error, entity) => {
  let errorMessage = "API call failed.";

  if (error.response) {
    if (
      typeof error.response.data === "object" &&
      Object.keys(error.response.data).length
    ) {
      errorMessage = error.response.data;
    }
  } else if (error.message) {
    errorMessage = error.message;
    console.log("error.message :>> ", error.message);
  }

  return `${errorMessage}. ${entity}`;
};
