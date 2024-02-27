const btn = document.getElementById("formBtn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const form = document.getElementById("contactUs");
  const formData = new FormData(form);
  const obj = {};
  formData.forEach((val, key) => {
    obj[key] = val;
  });
  console.log({1:obj});
});

const getForm = () => {
  //console.log("hello");
  const form = document.getElementById("contactUs");
  const formData = new FormData(form);
  const obj = {};
  formData.forEach((val, key) => {
    obj[key] = val;
  });
  console.log({2:obj});
};
