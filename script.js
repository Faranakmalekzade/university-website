document.querySelector("#comment").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("submitted");
  Swal.fire("your message has been submitted successfully😀");
  document.querySelector(
    "#comment > div:nth-child(2) > input[type=text]"
  ).value = "";

  document.querySelector(
    "#comment > div:nth-child(3) > input[type=email]"
  ).value = "";
  document.querySelector("#comment > div:nth-child(4) > textarea").value = "";
});
