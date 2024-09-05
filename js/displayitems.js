
// select button
let quickNav = document.querySelectorAll('.quick-nav button')
let items = document.querySelectorAll('.items li')

function displayall(){
    items.forEach(element => {
        element.classList.remove('hideobject')
    })
    quickNav.forEach(element =>{

    })
}
function displayshort(){
    items.forEach(element => {
        element.classList.remove('hideobject')
        if(!element.classList.contains('short')){
            element.classList.add('hideobject')
            
        }
        
    })
    quickNav.forEach(element =>{
        element.classList.remove('blck')
        element.addEventListener('click',()=>{
            element.add('blck')
        })
    })
}
function displaypants(){
    items.forEach(element => {
        element.classList.remove('hideobject')
        if(!element.classList.contains('pant')){
            element.classList.add('hideobject')
            
        }
        })
}
function displayshirt(){
    items.forEach(element => {
        element.classList.remove('hideobject')
        if(!element.classList.contains('shirt')){
            element.classList.add('hideobject')
            
        }
        })
}
function displayround(){
    items.forEach(element => {
        element.classList.remove('hideobject')
        if(!element.classList.contains('round')){
            element.classList.add('hideobject')
            
        }
    })
}
function displayjacket(){
    items.forEach(element => {
        element.classList.remove('hideobject')
        if(!element.classList.contains('jacket')){
            element.classList.add('hideobject')
            
        }
        })
}
function displaytop(){
    items.forEach(element => {
        element.classList.remove('hideobject')
        if(element.classList.contains('pant') || element.classList.contains('short')){
            element.classList.add('hideobject')
            
        }
        })
}
function displaytank(){
    items.forEach(element => {
        element.classList.remove('hideobject')
        if(!element.classList.contains('white')){
            element.classList.add('hideobject')
            
        }
        })
}

function removeback(){
    quickNav.forEach(element=>{
        element.classList.remove('blck')
    })
}
quickNav.forEach(element=>{
    element.addEventListener('click',()=>{
        removeback()
        element.classList.add('blck')
    })
})
