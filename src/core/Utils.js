import _isEmpty from "lodash/isEmpty.js";

export const isEmpty = (value) => {
  if (typeof value === "number") {
    return false;
  }
  return _isEmpty(value);
};
