const apiUrl="http://api.quotable.io/random";

const quote=document.getElementById("quote");
const author=document.getElementById("author");

async function getquote(url) {
    const response = await fetch(url);
    let data =await response.json();
    console.log(data);
    quote.innerHTML = data.content;
     author.innerHTML = data.author;
}
getquote(apiUrl)