

// sidebar
let sidebar = document.querySelector('.sidebar')
let hamburg = document.querySelector('.hamburg')
let dropIcon = document.querySelector('.fa-caret-down')
sidebar.innerHTML = `
    <div class="sidebar-con">
            <div class="flexs logo">
                <img src="images/icons/logo-black.png" alt="">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <ul>
                <a href="index.html"><li>Home</li></a>
                <li class="drop">
                    <div class="flexs">
                        <p>Shop</p>
                        <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <div class="textt">
                        <a href="shop.html?click=6"><p>Tops</p></a>
                        <a href="shop.html?click=4"><p>Shirt</p></a>
                        <a href="shop.html?click=1"><p>Pants</p></a>
                        <a href="shop.html?click=2"><p>Shorts</p></a>
                    </div>
                </li>
                <a href="men.html"><li>Men</li></a>
                <a href="women.html"><li>Women</li></a>
                <a href="contact.html"><li>Contact us</li></a>
            </ul>
            <div class="sidebar-bottom">
                <form action="https://formsubmit.co/9741008c1db46a878b78e553840268f6" method="POST">
                    <input type="hidden" name="_captcha" value="false">
                <input type="hidden" name="_template" value="box">
                <input type="hidden" name="_cc" value="Porceslymeafrofit@gmail.com">
                    <div class="newsletter-con">
                    <p>Newsletter</p>
                    <p>Join our newsletter and get to know about discounts, drops, offers and much more</p>
                    <div class="newsletter">
                        <input type="text" placeholder="Email"><br>
                        <button type="submit">Subscribe</button>
                    </div>
                </div>
                </form>
            </div>
            <div class="locate loc">
                <i class="fa-solid fa-location-dot"></i>
                <p>10, atunrashe street, ishaga road, surulere</p>
                
            </div>
            <div class="locate">
                <i class="fa-solid fa-envelope"></i>
               <p>Porceslymeafrofit@gmail.com</p> 
            </div>
            <div class="flexc ee">
                <p>Quick Links</p>
                
                    <div class="flexc">
                        <a href=""><i class="fa-brands fa-whatsapp"></i></a>
                        <a href="https://www.instagram.com/porceslyme_afrofits?igsh=MW9oOW1mbTRxYzZocw%3D%3D&utm_source=qr"><i class="fa-brands fa-instagram"></i></a>
                        <a href=""><i class="fa-solid fa-phone"></i></a>
                    </div>
            </div>
        </div>
`
let removesidebar = document.querySelector('.fa-xmark')

removesidebar.addEventListener('click',()=>{
    sidebar.classList.toggle('hide')
})
hamburg.addEventListener('click',()=>{
    sidebar.classList.toggle('hide')
    console.log('hi');
    
})

let drop = document.querySelector('.drop')
let dropclick = document.querySelector('.sidebar .textt')
drop.addEventListener('click',()=>{
    dropclick.classList.toggle('reduce')
    dropIcon.classList.toggle('rotee')
})


// cart 
let cart = document.querySelector('.cart-con')
let displacart = document.querySelector('.add-to-cart')
displacart.addEventListener('click', ()=>{
    cart.classList.add('show')
    console.log('clicked');
    
})






// close cart
let closeCart = document.querySelector('.cart-con .close-cart')

closeCart.addEventListener('click',()=>{
    cart.classList.remove('show')
    
})

// view-cart-add-button
let viewAddButton = document.querySelector('.view-cart-add-button')

viewAddButton.addEventListener('click',()=>{
    cart.classList.add('show')
})

// close proceed
// let closeProceed = document.querySelector('.close-proceed')
// let proceedCon = document.querySelector('.proceed-con')
let proceed = document.querySelector('.proceed')

// closeProceed.addEventListener('click',()=>{
//     proceedCon.classList.remove('show')
// })
proceed.addEventListener('click',()=>{
    proceedCon.classList.add('show')
})

// submit Controls

let closCart = document.querySelector('.submit-control .back')
closCart.addEventListener('click', ()=>{
    proceedCon.classList.remove('show')

})

// let cancel order 
let finalise = document.querySelector('.finalise-con')
let goback = document.querySelector('.goback')
let placeOrder = document.querySelector('.place-order') 
placeOrder.addEventListener('click', ()=>{
    finalise.classList.add('show')
})
goback.addEventListener('click',()=>{
    finalise.classList.remove('show')
})




