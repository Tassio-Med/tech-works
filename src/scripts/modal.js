const btnLogin = document.querySelector(".modal-btn")
const modal = document.querySelector("dialog")
const btnClose = document.querySelector(".close")

btnLogin.onclick = function () {
  modal.showModal()
}

btnClose.onclick = function(){
  modal.close();
}

