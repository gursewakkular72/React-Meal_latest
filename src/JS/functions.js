import { ERROR_MESSAGE } from "./config";
export const wait = (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
};

export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(ERROR_MESSAGE));
    }, s * 1000);
  });
};
