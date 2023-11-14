const key = 'gCfOWGoFb8lbmdRP8BpDsJGGRwqIfpVv';
const articleNoticias = document.querySelector("#articleNoticias")
const navBarBtNoticias = document.querySelector("#navBarBtNoticias")
const search = document.querySelector("#search")
const searchInput = document.querySelector("#inputSearch")
const headerPrincipal = document.querySelector("#headerPrincipal")


document.addEventListener("DOMContentLoaded", async () => {
       newsRelevantes()
 })

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
})


//  Requisição de artigos relevantes para seção de mais relevantes
 const newsRelevantes = async () => {
    try{
        let response = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`, { 
            method: "GET"
        })  
        let news = await response.json()
        console.log(news)
        news = news.results
        console.log(news)
        NoticiaRelevantes(news)
    }catch{
        console.error(`Download error: ${error.message}`); 
    }
 }

function NoticiaRelevantes(news){
    for(let index in news)
        {
        if(index != 15)
        { 
            if(index == 0)
            {
                let noticia1 = document.querySelector("#newsFirst")
                let title1 = document.querySelector("#title1")
                noticia1.style.backgroundImage = `url(${news[0].multimedia[0].url})`
                title1.innerHTML = `${news[0].title}`
            }else if(index == 1)
             {
                let noticia2 = document.querySelector("#newsSecond")
                let title2 = document.querySelector("#title2")
                noticia2.style.backgroundImage = `url(${news[1].multimedia[0].url})`
                title2.innerHTML = `${news[1].title}`
             }else if(index == 2)
                {
                    let noticia3 = document.querySelector("#newsThird")
                    let title3 = document.querySelector("#title3")
                    noticia3.style.backgroundImage = `url(${news[2].multimedia[0].url})`
                    title3.innerHTML = `${news[2].title}`
            }

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
}

