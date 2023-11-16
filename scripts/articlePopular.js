const articleNoticias = document.querySelector("#articleNoticias")
const key = 'gCfOWGoFb8lbmdRP8BpDsJGGRwqIfpVv'

const newsPopular = async () => {
    try{
        let response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${key}`, { method: "Get" })
        let newsPopular = await response.json()
        newsPopular = newsPopular.results
        console.log(newsPopular)
        newsPopular.map((article) => {
        
            let noticia = document.createElement("div")
            let noticiaTexto = document.createElement("div")
            let noticiaTitle = document.createElement("h2")
            let noticiaDesc = document.createElement("p")
            let noticiaImg = document.createElement("img")
            let link = document.createElement("a")

            noticia.classList.add("noticia")
            noticiaTexto.classList.add("noticiaTexto")
            
       
            link.setAttribute('href', `../page/article.html?url=${article.url}`)
             noticiaTitle.innerHTML = article.title
             noticiaDesc.innerHTML = article.abstract
    

       
            noticiaTexto.appendChild(noticiaTitle)
            noticiaTexto.appendChild(noticiaDesc)
            noticia.appendChild(noticiaTexto)
            link.appendChild(noticia)
            articleNoticias.appendChild(link)
})
    }catch{
        console.log()
    }
} 

document.addEventListener("DOMContentLoaded" , () => newsPopular())



   