const key = 'gCfOWGoFb8lbmdRP8BpDsJGGRwqIfpVv';
const articleNoticias = document.querySelector("#articleNoticias")
const navBarBtNoticias = document.querySelector("#navBarBtNoticias")
const search = document.querySelector("#search")
const searchInput = document.querySelector("#inputSearch")
let verticalScroll = document.documentElement.scrollTop

document.addEventListener("scroll", () => {
    let verticalScroll = document.documentElement.scrollTop
    console.log(verticalScroll)
    const headerPrincipal = document.querySelector("#headerPrincipal")
    if(verticalScroll >= 150){
        headerPrincipal.classList.add("sticky")
    }else(
        headerPrincipal.classList.remove("sticky")
    )
})


searchInput.addEventListener("focusin", () => {
   document.querySelector("#search hr").style.opacity = "1"
}) 
searchInput.addEventListener("blur", () => {
    document.querySelector("#search hr").style.opacity = "0.5"
 })
 

document.addEventListener("DOMContentLoaded", async () => {
       newsRelevantes()
 })

// Menu DropDown
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



search.addEventListener("submit", (event) =>{ 
    event.preventDefault()
    let busca = searchInput.value
    console.log(busca)
    // history.pushState(null, null, busca);
    window.location.href = busca
})


//  Requisição de artigos relevantes para seção de mais relevantes
 const newsRelevantes = async () => {
    try{
        let response = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`, { 
            method: "GET"
        })  
        let news = await response.json()
        news = news.results

        let noticia1 = document.querySelector("#newsFirst")
        noticia1.style.backgroundImage = `url(${news[0].multimedia[0].url})`
        let title1 = document.querySelector("#title1")
        title1.innerHTML = `${news[0].title}`
        for(let index in news){
            if(index != 10){ 
                let noticia = document.createElement("div")
                let noticiaTexto = document.createElement("div")
                let noticiaTitle = document.createElement("h2")
                let noticiaDesc = document.createElement("p")
                let noticiaImg = document.createElement("img")

                noticia.classList.add("noticia")
                noticiaTexto.classList.add("noticiaTexto")

                noticiaTitle.innerHTML = `${news[index].title}`
                noticiaDesc.innerHTML = `${news[index].abstract}`
                noticiaImg.setAttribute('src',`${news[index].multimedia[0].url}`)

                noticia.appendChild(noticiaImg)
                noticiaTexto.appendChild(noticiaTitle)
                noticiaTexto.appendChild(noticiaDesc)
                noticia.appendChild(noticiaTexto)
                articleNoticias.appendChild(noticia)
            }else{ break }
        }
    }catch{
        console.error(`Download error: ${error.message}`); 
    }
 }

