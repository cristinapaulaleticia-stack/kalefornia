const botao = document.querySelector("button")
   botao.addEventListener('click', curtir)

   function curtir(){
    let curdidas = document.querySelector("span")
    curdidas.textContent++;
   }