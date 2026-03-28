
    function abrirMenu() {
      document.getElementById("menuLateral").style.left = "0";
    }

    function fecharMenu() {
      document.getElementById("menuLateral").style.left = "-250px";
    }

    function alternarModo() {
      document.body.classList.toggle("dark-mode");
    }
    
    // Fecha o menu ao clicar fora dele
window.onclick = function(event) {
  const menu = document.getElementById("menuLateral");
  const botaoAbrir = document.getElementById("openBtn");

  // Verifica se o menu está aberto
  if (menu.style.left === "0px") {
    
    // Se o clique NÃO foi no menu E NÃO foi no botão de abrir
    if (!menu.contains(event.target) && !botaoAbrir.contains(event.target)) {
      fecharMenu();
    }
  }
};

  


