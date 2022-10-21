var head =
  "https://qph.cf2.quoracdn.net/main-qimg-9c81a54813716fccd8e3608ab2f51dcf-lq";

var tail =
  "https://qph.cf2.quoracdn.net/main-qimg-25567bd0c231d270777d1dae31ae82f5.webp ";

document.querySelector("button").onclick = function () {
  var randomNumber = Math.round(Math.random());
  if (randomNumber == 1) {
    document.querySelector("img").setAttribute("src", head);
    document.querySelector("p").innerHTML = "congrats... you won";
  } else {
    document.querySelector("img").setAttribute("src", tail);
    document.querySelector("p").innerHTML = "sorry... you lost";
  }
};

function getTime() {
  document.querySelector("h2").innerHTML = new Date().toLocaleTimeString();
}

setInterval(() => {
  getTime();
}, 1000);
