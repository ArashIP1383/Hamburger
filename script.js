const hamburger = document.getElementById('ham-btn')
const sidebar = document.getElementById('side')
let isclick = false

hamburger.addEventListener('click',() => {
    if(isclick == false){
        hamburger.classList.add('open')
        sidebar.classList.add('sidebar')
        sidebar.classList.remove('sidebarclose')
        isclick = true
    }else{
        hamburger.classList.remove('open')
        sidebar.classList.remove('sidebar')
        sidebar.classList.add('sidebarclose')
        isclick = false
    }

    
    
})