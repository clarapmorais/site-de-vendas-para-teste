
class Banner {
    criarBanner(idAlvo, listaBanner) {
        let elemento = document.getElementById(idAlvo);
        elemento.innerHTML += "<article></article>";
        elemento.innerHTML += "<button id='btBannerAnterior'> < </button>";
        elemento.innerHTML += "<button id='btBannerProximo'> > </button>";
    }

    modificaBanner(idAlvo = "", listaBanner = [""], index = 0) {
        let banner = document.getElementById(idAlvo).getElementsByTagName("article")[0];
        banner.innerHTML = listaBanner[index];
    }
}

export default Banner;
