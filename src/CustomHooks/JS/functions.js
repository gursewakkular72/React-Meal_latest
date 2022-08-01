const sendRequest = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.status} Something went wrong`);
    }
    const items = await response.json();
    return items;
  } catch (err) {
    throw err;
  }
};

export const wait = (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
};

// export const navigation = document.getElementById("navigationSection");
