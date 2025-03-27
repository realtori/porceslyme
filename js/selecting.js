// DOM Elements
const homeshop = document.querySelector('.home ul');
const men = document.querySelector('.men ul');
const women = document.querySelector('.women ul');
const shop = document.querySelector('.shop ul');
const cap = document.querySelector('.cap ul');
const socks = document.querySelector('.socks ul');
const close = document.querySelector('.close svg');
const viewcon = document.querySelector('.views-con');
const cartProducts = document.querySelector('.cart-products');
const numberofitemsincart = document.querySelector('.add-to-cart .items p');
const exclusiveHome = document.querySelector('.exclusive-items');
const proceedCon = document.querySelector('.proceed-con');

// Data
let products = [];
let carts = JSON.parse(localStorage.getItem('carts')) || [];

// Helper Functions
function getProductIndex(key, value) {
    return products.findIndex(product => product[key] === value);
}

function saveCartToLocalStorage() {
    localStorage.setItem('carts', JSON.stringify(carts));
}

function ItemLength() {
    const totalItems = carts.reduce((sum, item) => sum + (item.quantity || 1), 0);
    numberofitemsincart.innerText = totalItems;
}

function showaddcart() {
    const itemInfo = document.querySelector('.item-info');
    itemInfo.style.display = 'block';
    setTimeout(() => {
        itemInfo.style.display = 'none';
    }, 1500);
}

function updatepriceincart() {
    const cartItems = document.querySelectorAll('.cart-products .price2');
    const totalPrice = document.querySelector('.totalprice .price');
    let newPrice = 0;

    for (let i = 0; i < cartItems.length; i++) {
        newPrice += parseInt(cartItems[i].innerText);
    }
    totalPrice.innerText = `NGN ${newPrice || 0}`;
}

// Product Display Functions
function createProductElement(product) {
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="li-con">
            <img src="${product.images[0]}" alt="">
            <img src="${product.images[1]}" alt="">
            <div class="text"><p>Sale</p></div>
        </div>
        <div class="text-li">
            <p>${product.type}</p>
            <p id="name">${product.name}</p>
            <div>
                <button class="item-display">View Item</button>
                <button class="addtocart" style='margin-left: 5px;'>
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        </div>
    `;
    return li;
}

function setupProductEvents(li, product) {
    li.querySelector('.item-display').addEventListener('click', () => {
        viewcon.classList.add('show');
        displayProductDetails(product);
    });

    li.querySelector('.addtocart').addEventListener('click', () => {
        addToCart(product);
        showaddcart();
    });
}

function displayProductDetails(product) {
    document.querySelector('.view-item-name').textContent = product.name;
    document.querySelector('.view-item-type').textContent = product.type;
    document.querySelector('.view-item-price').textContent = `NGN ${product.price.toLocaleString()}`;
    document.querySelector('.view-item-description').textContent = product.description;
    
    const itemImages = document.querySelector('.view-item-images');
    itemImages.innerHTML = '';
    
    product.images.forEach(image => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img');
        const img = document.createElement('img');
        img.src = image;
        img.alt = "";
        imgDiv.appendChild(img);
        itemImages.append(imgDiv);
    });

    const addToCartBtn = document.querySelector('.views-con .addtocart');
    const viewCartBtn = document.querySelector('.views-con .view-cart-add-button');

    addToCartBtn.onclick = () => {
        addToCart(product);
        showaddcart();
    };

    viewCartBtn.onclick = () => {
        viewcon.classList.remove('show');
    };
}

// Cart Functions
function addToCart(product) {
    const existingItem = carts.find(item => item.name === product.name);
    
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        carts.push({ ...product, quantity: 1 });
    }
    
    showcart();
}

function showcart() {
    cartProducts.innerHTML = '';

    carts.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-items';
        cartItem.innerHTML = `
            <div class="img">
                <img src="${item.images[0]}" alt="">
            </div>
            <div class="item-details">
                <p>${item.name}</p>
                <div class="control">
                    <p class="decrease">-</p>
                    <p class="quantity">${item.quantity || 1}</p>
                    <p class="price2">${item.price * (item.quantity || 1)}</p>
                    <p class="increase">+</p>
                </div>
            </div>
            <div class="delete-cart-item">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                </svg>                          
            </div>
        `;
        cartProducts.appendChild(cartItem);
    });

    updateControls();
    ItemLength();
    updatepriceincart();
    saveCartToLocalStorage();
}

function updateControls() {
    document.querySelectorAll('.cart-items').forEach((cartItem, index) => {
        const decrease = cartItem.querySelector('.decrease');
        const increase = cartItem.querySelector('.increase');
        const quantity = cartItem.querySelector('.quantity');
        const price = cartItem.querySelector('.price2');
        const deleteItem = cartItem.querySelector('.delete-cart-item');
        const priceValue = parseInt(carts[index].price);
        let quantityValue = parseInt(quantity.textContent);

        function updatePrice() {
            const updatedPrice = quantityValue * priceValue;
            price.textContent = updatedPrice;
            carts[index].quantity = quantityValue;
            updatepriceincart();
            saveCartToLocalStorage();
        }

        function updateQuantity(change) {
            quantityValue = Math.max(1, quantityValue + change);
            quantity.textContent = quantityValue;
            updatePrice();
        }

        decrease.addEventListener('click', () => updateQuantity(-1));
        increase.addEventListener('click', () => updateQuantity(1));
        
        deleteItem.addEventListener('click', () => {
            carts.splice(index, 1);
            showcart();
        });
    });
}

// Order Form Functions
function setupOrderForm() {
    const placeOrderBtn = document.querySelector('.place-order');
    const closeProceed = document.querySelector('.close-proceed');
    const backBtn = document.querySelector('.back');
    
    
    
    if (closeProceed) {
        closeProceed.addEventListener('click', () => {
            proceedCon.classList.remove('show');
        });
    }
    
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            proceedCon.classList.remove('show');
        });
    }
}

function sendOrderViaWhatsApp() {
    if (carts.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Get form values
    const receiver = document.querySelector('input[name="receive"]:checked')?.parentElement?.textContent.trim() || 'Not specified';
    const name = document.querySelector('input[name="name"]').value;
    const number = document.querySelector('input[name="number"]').value;
    const email = document.querySelector('input[name="emai"]').value;
    const state = document.querySelector('input[name="state"]').value;
    const address = document.querySelectorAll('textarea[name="address"]')[0].value;
    const otherInfo = document.querySelectorAll('textarea[name="address"]')[1].value;

    if (!name || !state || !address) {
        alert("Please fill in all required fields (Name, WhatsApp Number, State, and Address)");
        return;
    }

    // Calculate total price
    const totalPrice = carts.reduce((sum, item) => {
        return sum + (item.price * (item.quantity || 1));
    }, 0);

    // Format cart items as text
    let itemsText = carts.map(item => {
        return `- ${item.name} (${item.quantity || 1} × NGN ${item.price.toLocaleString()}) = NGN ${(item.price * (item.quantity || 1)).toLocaleString()}`;
    }).join('\n');

    // Create the WhatsApp message
    const message = `🛒 *NEW ORDER* 🛒\n\n` +
                   `👤 *Customer Information*\n` +
                   `Name: ${name}\n` +
                   `WhatsApp: ${number}\n` +
                   `Email: ${email || 'Not provided'}\n` +
                   `Receiving: ${receiver}\n\n` +
                   `🚚 *Delivery Information*\n` +
                   `State: ${state}\n` +
                   `Address: ${address}\n` +
                   `Additional Info: ${otherInfo || 'None'}\n\n` +
                   `🛍️ *Order Items*\n${itemsText}\n\n` +
                   `💰 *Total Amount*: NGN ${totalPrice.toLocaleString()}\n\n` +
                   `Please confirm this order and provide payment details.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp share link (replace 1234567890 with your business number)
    const whatsappUrl = `https://wa.me/+2348109776202?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    alert('i was clicked')
}



function sendOrderViaInstagram() {
    const orderDetails = prepareOrderDetails();
    if (!orderDetails) return;

    const message = `NEW ORDER REQUEST\n\n` +
                   `CUSTOMER INFORMATION\n` +
                   `Name: ${orderDetails.name}\n` +
                   `Contact: ${orderDetails.number}\n` +
                   `Email: ${orderDetails.email || 'Not provided'}\n\n` +
                   `DELIVERY INFORMATION\n` +
                   `State: ${orderDetails.state}\n` +
                   `Address: ${orderDetails.address}\n\n` +
                   `ORDER ITEMS\n${orderDetails.itemsText}\n\n` +
                   `TOTAL: NGN ${orderDetails.totalPrice.toLocaleString()}`;

    // Instagram doesn't support direct message links like WhatsApp, so we'll:
    // 1. Open Instagram profile (replace 'yourusername' with your Instagram handle)
    // 2. User can then click "Message" to send the order
    const instagramUrl = `https://www.instagram.com/porceslyme_afrofits/`;
    
    // Alternative: Copy to clipboard and prompt user to paste in Instagram
    navigator.clipboard.writeText(message).then(() => {
        alert("Order details copied to clipboard! Please paste this into an Instagram message to our account.");
        window.open(instagramUrl, '_blank');
    });
}

function prepareOrderDetails() {
    // Check if cart is empty
    if (carts.length === 0) {
        alert("Your cart is empty!");
        return null;
    }

    // Get form values
    const receiver = document.querySelector('input[name="receive"]:checked')?.parentElement?.textContent.trim() || 'Not specified';
    const name = document.querySelector('input[name="name"]').value;
    const number = document.querySelector('input[name="number"]').value;
    const email = document.querySelector('input[name="emai"]').value;
    const state = document.querySelector('input[name="state"]').value;
    const address = document.querySelectorAll('textarea[name="address"]')[0].value;
    const otherInfo = document.querySelectorAll('textarea[name="address"]')[1].value;

    // Validate required fields
    if (!name || !state || !address) {
        alert("Please fill in all required fields (Name, WhatsApp Number, State, and Address)");
        return null;
    }

    // Calculate total price
    const totalPrice = carts.reduce((sum, item) => {
        return sum + (item.price * (item.quantity || 1));
    }, 0);

    // Format cart items as text
    let itemsText = carts.map(item => {
        return `➤ ${item.name} (${item.quantity || 1} × NGN ${item.price.toLocaleString()}) = NGN ${(item.price * (item.quantity || 1)).toLocaleString()}`;
    }).join('\n');

    return {
        receiver,
        name,
        number,
        email,
        state,
        address,
        otherInfo,
        totalPrice,
        itemsText
    };
}

// Main Display Function
function addhomeshop() {
    const containers = {
        home: homeshop,
        shop: shop,
        men: men,
        women: women,
        cap: cap,
        socks: socks
    };

    // Clear all containers first
    Object.values(containers).forEach(container => {
        if (container) container.innerHTML = '';
    });

    // Determine which container to fill
    const activeClass = Array.from(exclusiveHome.classList).find(cls => 
        ['home', 'shop', 'men', 'women', 'cap', 'socks'].includes(cls)
    ) || 'home';

    let productsToShow = [];
    
    if (activeClass === 'home') {
        productsToShow = products.slice(0, 5);
    } else if (activeClass === 'shop') {
        productsToShow = products;
    } else {
        const filterMap = {
            'men': 'Men wears',
            'women': 'Women Wear',
            'cap': 'Head Gear',
            'socks': 'Socks'
        };
        productsToShow = products.filter(p => p.type === filterMap[activeClass]);
    }

    productsToShow.forEach(product => {
        const li = createProductElement(product);
        containers[activeClass].appendChild(li);
        setupProductEvents(li, product);
    });
}

// Initialize
function init() {
    fetch('js/products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            if (carts.length > 0) showcart();
            addhomeshop();
        });

    close.addEventListener('click', () => {
        viewcon.classList.remove('show');
    });

    setupOrderForm();
    
    // Show order form when clicking "View Cart" button
    document.querySelector('.view-cart-add-button')?.addEventListener('click', () => {
        // proceedCon.classList.add('show');
    });
}

init();
