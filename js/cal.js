// console.log("sobg kis u tik ahoa");
document.getElementById("buttons").addEventListener("click", function (event) {
  const btnValues = event.target.innerText;
  const inputeValues = document.getElementById("mainInput").value;

  if (btnValues == "c") {
    document.getElementById("mainInput").value = "";
  } else if (btnValues == "<") {
    document.getElementById("mainInput").value = inputeValues.slice(0, inputeValues.length - 1);
  } else if (btnValues == "=") {
    //document.getElementById("secoundaryInpute").value = inputeValues;
    document.getElementById("mainInput").value = eval(inputeValues);
  } else {
    document.getElementById("mainInput").value = inputeValues + btnValues;
  }
});
