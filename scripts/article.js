const urlSearch = new URLSearchParams(window.location.search)
const articleId = urlSearch.get('uri')
const key = 'gCfOWGoFb8lbmdRP8BpDsJGGRwqIfpVv'

async function getArticle(uri){
    const reponse = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?&query=${uri}&api-key=${key}`)
    const data = await reponse.json()
    console.log(data)
}

getArticle(articleId)