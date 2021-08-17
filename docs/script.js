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

const iniText = document.getElementsByClassName('iniText')
const InitImg = document.getElementById('InitImg')

console.log(iniText)


function displayChange() {

    InitImg.addEventListener('mouseover',()=>{
        console.log('hola')
        iniText.style.display= 'flex'
        // iniText.style.display='flex'
    })
    
    InitImg.addEventListener('mouseout',()=>{
        InitImg.style.display= 'flex'
    })


}



