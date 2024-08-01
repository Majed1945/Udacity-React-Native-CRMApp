export const PENDING = "PENDING";
export const INPROGRESS = "INPROGRESS";
export const REQUESTING = "REQUESTING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const IsEmpty = (field) => {
  if (
    field === null ||
    field === "null" ||
    field === undefined ||
    field === "undefined" ||
    field === ""
  ) {
    return true;
  } else {
    return false;
  }
};
