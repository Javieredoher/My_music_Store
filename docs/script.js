//Side menu
const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll ('.nav')

open_btn.addEventListener('click',()=>{
    nav.forEach(nav_elem => nav_elem.classList.add('visible'))
})

close_btn.addEventListener('click', ()=>{
    nav.forEach(nav_elem => nav_elem.classList.remove('visible'))
})

// Init

/*for(let i = 0; i < SQUARES; i++ ) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
    container.appendChild(square)
}*/


function api (){

const xhr = new XMLHttpRequest()
$first =document.getElementById('first'),
$second =document.getElementById('second'),
$third =document.getElementById('third'),
$fourth =document.getElementById('fourth'),
$fiveth =document.getElementById('fiveth');

xhr.addEventListener('readystatechange', (e)=>{
    if(xhr.readyState!==4){
        return
    } else{
    console.log(xhr) 
    }

    if(xhr.status>=200){
        console.log('Sucess')
        let json = JSON.parse(xhr.responseText)
        console.log(json)
        console.log(json.data)

        const datos = json.data.map(data=>data.images.downsized.url)
        console.log(datos)

        $first.style.backgroundImage= `url(${datos[0]})`
        $second.style.backgroundImage= `url(${datos[1]})`
        $third.style.backgroundImage= `url(${datos[2]})`
        $fourth.style.backgroundImage= `url(${datos[3]})`
        $fiveth.style.backgroundImage= `url(${datos[4]})`
    }
    else{
        console.log('error')
    }

})


xhr.open("GET","https://api.giphy.com/v1/gifs?api_key=s9OSU4zj9wrxyfw9O5MolrviOKYVujbR&ids=voHUEbyWiHe5a+%2C1rSioV1UX6ZWZv9n4q+%2Cl0HlvGByFLvFJreYE+%2Cl2a8oapqbUhlanPK0m+%2CqVDkVk4xo0q0U")
xhr.send();

}

api();