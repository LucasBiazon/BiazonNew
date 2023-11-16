const key = 'gCfOWGoFb8lbmdRP8BpDsJGGRwqIfpVv'

const articleNoticias = document.querySelector("#articleNoticias")
const pArticle = document.querySelector("#PArticle")
const tArticle = document.querySelector("#TArticle")
const scienceArticle = document.querySelector("#scienceArticle")


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

//  Requisição de artigos Aside
const newsPopular = async () => {
    try{
        let response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${key}`, { method: "Get" })
        let newsPopular = await response.json()
        newsPopular = newsPopular.results
        CreationNewsAside(10, newsPopular, pArticle)
    }catch{

    }
} 

const newsRealTime = async () =>{
    try{
        let response = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${key}`)
        let newsRealTime = await response.json()
        newsRealTime  = newsRealTime.results
       CreationNewsAside(10, newsRealTime, tArticle)
    }catch{
    }
}

const newsScience = async () =>{
    try{
        let response = await fetch(`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${key}`)
        let newsScience = await response.json()
        newsScience = newsScience.results
        CreationNewsAside(5, newsScience, scienceArticle)
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
            let link = document.createElement("a")
            noticia.classList.add("noticia")
            noticiaTexto.classList.add("noticiaTexto")
            
       
            link.setAttribute('href', `../page/article.html?uri=${news[index].uri}`)
            noticiaTitle.innerHTML = `${news[index].title}`
            noticiaDesc.innerHTML = `${news[index].abstract}`
            noticiaImg.setAttribute('src',`${news[index].multimedia[0].url}`)

            console.log(link)
            noticia.appendChild(noticiaImg)
            noticiaTexto.appendChild(noticiaTitle)
            noticiaTexto.appendChild(noticiaDesc)
            noticia.appendChild(noticiaTexto)
            link.appendChild(noticia)
            articleNoticias.appendChild(link)
            
        }else{ break }
    }
}

function CreationNewsAside(limite, typeArticle, variavelLocal){
    let list = document.createElement("ul")

    for(let index in typeArticle){
        if(index != limite){
                let listPosition = document.createElement("h2")
                let listItem = document.createElement("li")
                let indexText = parseInt(index) + 1 
                let link = document.createElement("a")
                list.classList.add("asideNotice")
                listPosition.classList.add("asideNoticeItemH2")
                listItem.classList.add("asideNoticeItem")
            
                link.setAttribute('href', `../page/article.html?uri=${typeArticle[index].uri}`)
                listPosition.innerHTML= indexText.toString()
                listItem.innerHTML = `${typeArticle[index].title}`
                listItem.appendChild(listPosition)
                link.appendChild(listItem)
                list.appendChild(link)
                variavelLocal.appendChild(list)
        }else{
            break
        }
    }       
}

window.document.addEventListener('DOMContentLoaded', () =>{
    Promise.all([
        newsPopular(), newsRealTime(), newsScience(), newsRelevancy()    
    ])
})