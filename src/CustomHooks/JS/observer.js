const navigation = document.getElementById("navigationSection");
console.log(navigation);
const callBackOberserver = (entries, observer) => {
  console.log("observerAPi");
  console.log(entries);
};

const objOptions = {
  root: null,
};

const observer = new IntersectionObserver(callBackOberserver, objOptions);
observer.observe(navigation);
