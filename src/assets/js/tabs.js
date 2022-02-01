[...document.querySelectorAll(".tabs")].forEach(tabs_wrap=>{
    if(!tabs_wrap.classList.contains("tabs--nojs")){
        tabs_w = [...tabs_wrap.querySelectorAll(".tabs__link")].reduce((tab, tw)=>tab+tw.offsetWidth, 0);
        tabs_wrap.dataset.width = tabs_w
        if(tabs_w>tabs_wrap.offsetWidth-50){
            tabs_wrap.classList.add("tabs--accord")
        }
    }
})

document.addEventListener('click', function(e){
    if(e.target.classList.contains("tabs__link") || e.target.parentElement.classList.contains("tabs__link")){
        e.preventDefault()
        const tab = e.target.classList.contains("tabs__link")?e.target:e.target.parentElement
        const wrap = tab.parentElement
        if(!tab.classList.contains("active")){
            wrap.querySelector(".tabs__link.active").classList.remove("active")
            tab.classList.add("active")
            wrap.querySelector(".tabs__content.active").classList.remove("active")
            tab.nextElementSibling.classList.add("active")
        }
    }
})

window.addEventListener('resize', function(){
    const w = window.innerWidth
    let tabs_w = 0;
    [...document.querySelectorAll(".tabs")].forEach(tabs_wrap=>{
        if(!tabs_wrap.classList.contains("tabs--nojs")){
            tabs_w = [...tabs_wrap.querySelectorAll(".tabs__link")].reduce((tab, tw)=>tab+tw.offsetWidth, 0)
            if(tabs_w>tabs_wrap.offsetWidth-50){
                if(!tabs_wrap.classList.contains("tabs--accord")){
                    tabs_wrap.dataset.width = tabs_w
                    tabs_wrap.classList.add("tabs--accord")
                }
            }
            if(tabs_wrap.offsetWidth-50 > tabs_wrap.dataset.width){
                tabs_wrap.classList.remove("tabs--accord")
            }
        }
    })
})

