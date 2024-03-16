
class NavComponente {
    criarNovoMenu(idDoMenu, elementos) {
        let menuEscolhido = document.getElementById(idDoMenu);
        menuEscolhido.innerHTML += "<ul id='Menu_02'></ul>";
        let menuAcrescentar = document.getElementById("Menu_02");

        elementos.forEach(menuAdd => {
            menuAcrescentar.innerHTML += "<li><a href='#'>" + menuAdd + "</a></li>";
        });
    }

    criarBarraNavUsuario(idDoMenu, localizacao) {
        let menuEscolhido = document.getElementById(idDoMenu);
        menuEscolhido.innerHTML += "<div class='localNav'><h4>" + localizacao + "</h4></div>";
    }
}

export default NavComponente;
