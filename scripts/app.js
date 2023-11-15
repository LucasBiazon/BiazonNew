const key = 'gCfOWGoFb8lbmdRP8BpDsJGGRwqIfpVv';
const articleNoticias = document.querySelector("#articleNoticias")
const pArticle = document.querySelector("#PArticle")
const tArticle = document.querySelector("#TArticle")
const scienceArticle = document.querySelector("#scienceArticle")

document.addEventListener("DOMContentLoaded", async () => {
        await Promise.all([
        newsPopular(), newsRelevancy(), newsRealTime(), newsScience()
       ])
 })

//  Requisição de artigos relevantes para seção de mais relevantes
const newsRelevancy = async () => {
    try{
        let response = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`, { 
            method: "GET"
        })  
        let newsRelevancy = await response.json()
        newsRelevancy = newsRelevancy.results
        CreationNewsRelevancy(newsRelevancy)
    }catch{
    }
}

const newsPopular = async () => {
    try{
        let reponse = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${key}`, { method: "Get" })
        let newsPopular = await reponse.json()
        newsPopular = newsPopular.results
        
        for(let index in newsPopular){
            if(index != 5){
                let list = document.createElement("ul")
                let listPosition = document.createElement("h2")
                let listItem = document.createElement("li")
                let indexText = parseInt(index) + 1 
                list.classList.add("asideNotice")
                listPosition.classList.add("asideNoticeItemH2")
                listItem.classList.add("asideNoticeItem")

                listPosition.innerHTML= indexText.toString()
                listItem.innerHTML = `${newsPopular[index].title}`
                listItem.appendChild(listPosition)
                list.appendChild(listItem)
                pArticle.appendChild(list)
            }else{break}
        }
    }catch{

    }
} 

const newsRealTime = async () =>{
    try{
        let response = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${key}`)
        let newsRealTime = await response.json()
        newsRealTime  = newsRealTime.results
        for(let index in newsRealTime){
            if(index != 10){
                let list = document.createElement("ul")
                let listPosition = document.createElement("h2")
                let listItem = document.createElement("li")
                let indexText = parseInt(index) + 1 
                list.classList.add("asideNotice")
                listPosition.classList.add("asideNoticeItemH2")
                listItem.classList.add("asideNoticeItem")

                listPosition.innerHTML= indexText.toString()
                listItem.innerHTML = `${newsRealTime[index].title}`
                listItem.appendChild(listPosition)
                list.appendChild(listItem)
                tArticle.appendChild(list)
            }else{break}
        }
    }catch{
    }
}

const newsScience = async () =>{
    try{
        let response = await fetch(`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${key}`)
        let newsScience = await response.json()
        newsScience = newsScience.results
        console.log(newsScience)
        for(let index in newsScience){
            if(index != 5){
                let list = document.createElement("ul")
                let listPosition = document.createElement("h2")
                let listItem = document.createElement("li")
                let indexText = parseInt(index) + 1 
                list.classList.add("asideNotice")
                listPosition.classList.add("asideNoticeItemH2")
                listItem.classList.add("asideNoticeItem")

                listPosition.innerHTML= indexText.toString()
                listItem.innerHTML = `${newsScience[index].title}`
                listItem.appendChild(listPosition)
                list.appendChild(listItem)
                scienceArticle.appendChild(list)
            }else{break}
        }
    }catch{
    }
}


function CreationNewsRelevancy(news){
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
                continue
            }else if(index == 1)
             {
                let noticia2 = document.querySelector("#newsSecond1")
                let title2 = document.querySelector("#title2")
                noticia2.style.backgroundImage = `url(${news[1].multimedia[0].url})`
                title2.innerHTML = `${news[1].title}`
                continue
             }else if(index == 2)
                {
                    let noticia3 = document.querySelector("#newsSecond2")
                    let title3 = document.querySelector("#title3")
                    noticia3.style.backgroundImage = `url(${news[2].multimedia[0].url})`
                    title3.innerHTML = `${news[2].title}`
                    continue
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

