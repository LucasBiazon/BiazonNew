

const key = 'gCfOWGoFb8lbmdRP8BpDsJGGRwqIfpVv';
const articleNoticias = document.querySelector("#articleNoticias")

 document.addEventListener("DOMContentLoaded",  () => {
    noticiasRelevantes()
 })
 
 async function noticiasRelevantes(){
    try{
        let response = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`, { 
            method: "GET"
        })  
        let news = await response.json()
        news = news.results
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

            
            }else{
                break
            }
        }
           
      
    }catch{
        console.error(`Download error: ${error.message}`); 
    }
 }

