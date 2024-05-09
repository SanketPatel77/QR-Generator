const text = document.getElementById("qrText");
const img = document.getElementById("qrImage");
const imgBox = document.querySelector(".imgBox");
function generateQR(params) {
  if (text.value.length > 0) {
    img.src =
      " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      text.value;
    imgBox.style.display = "block";
  } else {
    text.classList.add("error");
    setTimeout(() => {
      text.classList.remove("error");
    }, 1000);
  }
}
