const btnLogin = document.querySelector(".modal-btn")
const modal = document.querySelector("dialog")
const btnClose = document.querySelector(".close")

btnLogin.onclick = function () {
  modal.showModal()
}

btnClose.onclick = function(){
  modal.close();
}

Toastify({
  text: "Sua mensagem foi enviada com sucesso!",
  offset: {
    x: 700, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
    y: 80 // vertical axis - can be a number or a string indicating unity. eg: '2em'
  },
}).showToast();