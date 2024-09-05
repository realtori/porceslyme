let eye = document.querySelectorAll('.click')
let eye2 = document.querySelectorAll('.click2')
let view = document.querySelector('.view')

function showproduct(){
    eye.forEach(element => {
        element.addEventListener('click',()=>{
            let parent = element.parentElement.parentElement.parentElement
            let parentImg = parent.querySelectorAll('img')
            let name = parent.parentElement.querySelectorAll('.last-bottom p')
            
            
            view.classList.add('hide')
            if(element.parentElement.classList=='select-icon'){
                view.innerHTML = `
                <div class="view-con">
                <i class="fa-solid fa-xmark cancel"></i>
    
                <div class="all-img">
                    <div class="side-img-con">
                        <div class="side-img">
                            <img src="${parentImg[0].src}" alt="">
                        </div>
                        <div class="side-img">
                            <img src="${parentImg[1].src}" alt="">
                        </div>
                    </div>
                    <div class="big-img">
                        <img src="${parentImg[0].src}" alt="">
                    </div>
                </div>
                <div class="details">
                    <div class="text">
                        <p>${name[0].innerText}</p>
                        <p>${name[1].innerText}</p>
                        <p>${name[2].innerText}</p>
                    </div>
                    <div class="text">
                    <p>Availble Sizes:</p>
                    <div class="size">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                        <p>XL</p>
                        <p>XXL</p>
                       
                    </div>
                     <a href="http://wa.me/2348131903787?text=I%20want%20to%20place%20an%20order%20for%20" 
                            + encodeURIComponent(name[1].innerText) 
                            + "%20#" 
                            + encodeURIComponent(name[2].innerText) 
                            class="pa">
                            <p>Place order</p>
                            </a>
                    </div>
                </div>
            `
            document.querySelector('.cancel').addEventListener('click',()=>{
                view.classList.remove('hide')
                console.log('hi');
            })
            }
    
              
        })
        
    });
}
showproduct()


document.querySelector('.fa-xmark').addEventListener('click',()=>{
    view.classList.remove('hide')
    console.log('hi');
})
eye2.forEach(element=>{
    element.addEventListener('click',()=>{
        element.parentElement.parentElement.querySelector('.click').click();
    })
})


// sidebar
let removesidebar = document.querySelector('.fa-xmark')
let sidebar = document.querySelector('.sidebar')
let hamburg = document.querySelector('.hamburg')
let dropIcon = document.querySelector('.fa-caret-down')
removesidebar.addEventListener('click',()=>{
    sidebar.classList.toggle('hide')
})
hamburg.addEventListener('click',()=>{
    sidebar.classList.toggle('hide')
})

let drop = document.querySelector('.drop')
let dropclick = document.querySelector('.sidebar .textt')
drop.addEventListener('click',()=>{
    dropclick.classList.toggle('reduce')
    dropIcon.classList.toggle('rotee')
})
