class Card {
    _TipoDeCard = "card";

    criarCards(idAlvo, titulo, conteudo) {
        let elemento = document.getElementById(idAlvo);
        elemento.innerHTML += "<div class='" + this._TipoDeCard + "'>" +
            "<h1>" + titulo + "</h1><h4>" + conteudo + "</h4> </div>";
    }

    escolherTipo(tipo) {
        this._TipoDeCard = tipo;
    }
}

export default Card;
