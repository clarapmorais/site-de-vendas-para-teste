import Card from "./cards.js";

class Paginas {
    constructor() {
        this.PaginaPrincipal = document.getElementById("pagina");
        this.Cards = new Card();
    }

    PaginaDeProduto() {
        this.InserirConteudo("<div id='VitrineProdutos'></div>");
        this.Cards.CriarCards("VitrineProdutos", "Tênis da Nike", "Produto novo da loja");
        document.getElementsByClassName("card")[0].addEventListener("click", this.PaginaProdutoNike.bind(this));
    }

    PaginaProdutoNike() {
        document.getElementsByClassName("localNav")[0].getElementsByTagName("h4")[0].innerHTML = "Produtos / Tênis Nike";
        document.getElementById("pagina").innerHTML = "";
        this.InserirConteudo("Tênis da Nike (novo)");
    }

    InserirConteudo(Conteudo) {
        this.PaginaPrincipal.innerHTML += Conteudo;
    }
}

export default Paginas;
