const getSlider = () => {
  const age = document.getElementById("age").value;
  document.getElementById("rangeVal").innerHTML = age;
};
const getGender = () => {
  const btns = document.querySelector('input[name="gender"]');
  let ans;
  for (const btn of btns) {
    if (btn.checked) {
      ans = btn.value;
      break;
    }
  }
  document.getElementById("gender").innerHTML = ans;
};

const getName = () => {
  const val = document.querySelector('input[name="name"]').value;
  document.getElementById("nameVal").innerHTML = val;
  //alert(`Your name is ${val}`)
};
