const hamburger = document.getElementById('ham-btn')
const sidebar = document.getElementById('side')
const themeBtn = document.getElementById('theme-btn')
const texttheme = document.querySelector('#theme-btn p')
const i = document.getElementById('i')
const style = document.getElementById('style')


let clicked = false
let clickedtheme = false


hamburger.addEventListener('click',() => {
    if(clicked == false){
        hamburger.classList.add('open')
        sidebar.classList.add('sidebar')
        sidebar.classList.remove('sidebarclose')
        clicked = true
    }else{
        hamburger.classList.remove('open')
        sidebar.classList.remove('sidebar')
        sidebar.classList.add('sidebarclose')
        clicked = false
    }
})

i.classList.add('fas')
i.classList.add('fa-moon')

themeBtn.addEventListener('click',() => {
    if(clickedtheme == false){
        themeBtn.classList.remove('btn-dark')
        themeBtn.classList.add('btn-light')
        i.classList.replace('fa-sun','fa-moon')
        texttheme.textContent = "Light mood"
        style.setAttribute('href','style-dark.css')
        clickedtheme = true
    }else{
        themeBtn.classList.add('btn-dark')
        themeBtn.classList.remove('btn-light')
        i.classList.replace('fa-moon','fa-sun')
        texttheme.textContent = "Dark mood"
        style.setAttribute('href','style-light.css')
        clickedtheme = false
    }
})
