const button = document.querySelector(".btn");
button.addEventListener("click", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector(".height input").value);
  const weight = parseInt(document.querySelector(".weight input").value);
  const result = document.querySelector(".results");

  if (height === "" || height < 0 || isNaN(height))
    result.innerHTML = "Please enter a valid Height";
  else if (weight === "" || weight < 0 || isNaN(weight))
    result.innerHTML = "Please enter a valid Weight";
  else {
    const BMI = weight / ((height * height) / 10000).toFixed(2);
    if (BMI < 18.6) {
      result.innerHTML = `<span>${BMI.toFixed(2)} </span> (Under Weight)`;
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      result.innerHTML = `<span>${BMI.toFixed(2)}</span> (Normal Range)`;
    } else {
      result.innerHTML = `<span>${BMI.toFixed(2)}</span> (Over Weight) </span>`;
    }
  }
});
