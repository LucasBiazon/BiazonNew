const navBarBtNoticias = document.querySelector("#navBarBtNoticias")
const search = document.querySelector("#search")
const searchInput = document.querySelector("#inputSearch")
const headerPrincipal = document.querySelector("#headerPrincipal")

document.addEventListener("scroll", () => {
    let verticalScroll = document.documentElement.scrollTop
    if(verticalScroll >= 150){
        headerPrincipal.classList.add("sticky")
    }else(
        headerPrincipal.classList.remove("sticky")
    )
})

searchInput.addEventListener("focusin", () => document.querySelector("#search hr").style.opacity = "1" )
searchInput.addEventListener("blur", () => document.querySelector("#search hr").style.opacity = "0.5" )

navBarBtNoticias.addEventListener("click", () =>{
    let dropDown = document.querySelector("#dropDown")
    let maiorque = document.querySelector("#maiorque")

    dropDown.classList.toggle("desativado")
    maiorque.classList.toggle("btNoticiaAtivado")

    if(!dropDown.classList.contains("desativado")){
        navBarBtNoticias.classList.add("menu-ativo")
    }else{
        navBarBtNoticias.classList.remove("menu-ativo")
    }
})