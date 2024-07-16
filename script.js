let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function openModal() {
  document.getElementById("myModals").style.display = "block";
}

function closeModal() {
  document.getElementById("myModals").style.display = "none";
}

let p1 = document.getElementById("quantity");
let h2 = document.getElementById("price");
let button = document.getElementById("add");

// button.addEventListener("click", () => {
//   document.getElementById("myModals").style.display = "block  ";
// });

let total = 0;
let coquantityl = document.getElementById("quantity");
let price = document.getElementById("price");

function totalPrice(num) {
  document.getElementById("myModals").style.display = "block  ";
  total += num;
  quantity.innerHTML++;
  convertionTotal();
}
function totalBtn(num) {
  if (total > 0) {
    total -= num;
    quantity.innerHTML--;
    convertionTotal();
  } else {
    alert("error");
  }
}
function convertionTotal() {
  price.innerHTML = total;
}

document.querySelector(".coment");

let inputs = document.getElementById("i-1");
let text = document.querySelector(".text");

function add() {
  if (inputs.value == "") {
    alert("plase enter task");
  } else {
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${inputs.value}  <span>&times;</span>`;
    text.appendChild(newEle);
    inputs.value = "";
    newEle.querySelector("span").addEventListener("click", remove);
    function remove() {
      newEle.remove();
    }
  }
}


