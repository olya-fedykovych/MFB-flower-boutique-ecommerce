let basket = JSON.parse(localStorage.getItem("data")) || [];


const productPage = document.querySelector('[data-page]');

switch (productPage.dataset.page) {

    case ('ailes') : [
        document.getElementById('product-content-ailes').innerHTML = 
        `   
        <h1 class="lg-heading product-name text-secondary">${shopItemsData[0].name}</h1>
            <p id="description">${shopItemsData[0].description}</p>
            <div class="purchase-container">
                <h2 class="pricing">$${shopItemsData[0].price}</h2>
                <div id="add-to-cart-belle-btn">
                    <a href="javascript:(void);" class="product-btn button" id=${shopItemsData[0].id} onclick="addToCart(${shopItemsData[0].id})">
                        <i class="fas fa-cart-shopping fa2x"></i> Add to Cart 
                    </a>
                </div>
            </div>  `
    ]; 
    break;

    case ('belle') : [
        document.getElementById('product-content-belle').innerHTML = 
        `   
        <h1 class="lg-heading product-name text-secondary">${shopItemsData[1].name}</h1>
            <p id="description">${shopItemsData[1].description}</p>
            <div class="purchase-container">
                <h2 class="pricing">$${shopItemsData[1].price}</h2>
                <div id="add-to-cart-belle-btn">
                    <a href="javascript:(void);" class="product-btn button" id=${shopItemsData[1].id} onclick="addToCart(${shopItemsData[1].id})">
                        <i class="fas fa-cart-shopping fa2x"></i> Add to Cart 
                    </a>
                </div>
            </div>  `
    ]; 
    break;

    case ('fantaisie') : [
        document.getElementById('product-content-fantaisie').innerHTML = 
        `   
        <h1 class="lg-heading product-name text-secondary">${shopItemsData[2].name}</h1>
            <p id="description">${shopItemsData[2].description}</p>
            <div class="purchase-container">
                <h2 class="pricing">$${shopItemsData[2].price}</h2>
                <div id="add-to-cart-belle-btn">
                    <a href="javascript:(void);" class="product-btn button" id=${shopItemsData[2].id} onclick="addToCart(${shopItemsData[2].id})">
                        <i class="fas fa-cart-shopping fa2x"></i> Add to Cart 
                    </a>
                </div>
            </div>  `
    ]; 
    break;

    case ('jardin') : [
        document.getElementById('product-content-jardin').innerHTML = 
        `   
        <h1 class="lg-heading product-name text-secondary">${shopItemsData[3].name}</h1>
            <p id="description">${shopItemsData[3].description}</p>
            <div class="purchase-container">
                <h2 class="pricing">$${shopItemsData[3].price}</h2>
                <div id="add-to-cart-belle-btn">
                    <a href="javascript:(void);" class="product-btn button" id=${shopItemsData[3].id} onclick="addToCart(${shopItemsData[3].id})">
                        <i class="fas fa-cart-shopping fa2x"></i> Add to Cart 
                    </a>
                </div>
            </div>  `
    ]; 
    break;

    case ('phenomene') : [
        document.getElementById('product-content-phenomene').innerHTML = 
        `   
        <h1 class="lg-heading product-name text-secondary">${shopItemsData[4].name}</h1>
            <p id="description">${shopItemsData[4].description}</p>
            <div class="purchase-container">
                <h2 class="pricing">$${shopItemsData[4].price}</h2>
                <div id="add-to-cart-belle-btn">
                    <a href="javascript:(void);" class="product-btn button" id=${shopItemsData[4].id} onclick="addToCart(${shopItemsData[4].id})">
                        <i class="fas fa-cart-shopping fa2x"></i> Add to Cart 
                    </a>
                </div>
            </div>  `
    ]; 
    break;

    case ('tranquillite') : [
        document.getElementById('product-content-tranquillite').innerHTML = 
        `   
        <h1 class="lg-heading product-name text-secondary">${shopItemsData[5].name}</h1>
            <p id="description">${shopItemsData[5].description}</p>
            <div class="purchase-container">
                <h2 class="pricing">$${shopItemsData[5].price}</h2>
                <div id="add-to-cart-belle-btn">
                    <a href="javascript:(void);" class="product-btn button" id=${shopItemsData[5].id} onclick="addToCart(${shopItemsData[5].id})">
                        <i class="fas fa-cart-shopping fa2x"></i> Add to Cart 
                    </a>
                </div>
            </div>  `
    ]; 
    break;

    case ('sympathie') : [
        document.getElementById('product-content-sympathie').innerHTML = 
        `   
        <h1 class="lg-heading product-name text-secondary">${shopItemsData[6].name}</h1>
            <p id="description">${shopItemsData[6].description}</p>
            <div class="purchase-container">
                <h2 class="pricing">$${shopItemsData[6].price}</h2>
                <div id="add-to-cart-belle-btn">
                    <a href="javascript:(void);" class="product-btn button" id=${shopItemsData[6].id} onclick="addToCart(${shopItemsData[6].id})">
                        <i class="fas fa-cart-shopping fa2x"></i> Add to Cart 
                    </a>
                </div>
            </div>  `
    ]; 
    break;

    case ('amoureux') : [
        document.getElementById('product-content-amoureux').innerHTML = 
        `   
        <h1 class="lg-heading product-name text-secondary">${shopItemsData[7].name}</h1>
            <p id="description">${shopItemsData[7].description}</p>
            <div class="purchase-container">
                <h2 class="pricing">$${shopItemsData[7].price}</h2>
                <div id="add-to-cart-belle-btn">
                    <a href="javascript:(void);" class="product-btn button" id=${shopItemsData[7].id} onclick="addToCart(${shopItemsData[7].id})">
                        <i class="fas fa-cart-shopping fa2x"></i> Add to Cart 
                    </a>
                </div>
            </div>  `
    ]; 
    break;

    case ('blancs') : [
        document.getElementById('product-content-blancs').innerHTML = 
        `   
        <h1 class="lg-heading product-name text-secondary">${shopItemsData[8].name}</h1>
            <p id="description">${shopItemsData[8].description}</p>
            <div class="purchase-container">
                <h2 class="pricing">$${shopItemsData[8].price}</h2>
                <div id="add-to-cart-belle-btn">
                    <a href="javascript:(void);" class="product-btn button" id=${shopItemsData[8].id} onclick="addToCart(${shopItemsData[8].id})">
                        <i class="fas fa-cart-shopping fa2x"></i> Add to Cart 
                    </a>
                </div>
            </div>  `
    ]; 
    break;

    case ('premier') : [
        document.getElementById('product-content-premier').innerHTML = 
        `   
        <h1 class="lg-heading product-name text-secondary">${shopItemsData[9].name}</h1>
            <p id="description">${shopItemsData[9].description}</p>
            <div class="purchase-container">
                <h2 class="pricing">$${shopItemsData[9].price}</h2>
                <div id="add-to-cart-belle-btn">
                    <a href="javascript:(void);" class="product-btn button" id=${shopItemsData[9].id} onclick="addToCart(${shopItemsData[9].id})">
                        <i class="fas fa-cart-shopping fa2x"></i> Add to Cart 
                    </a>
                </div>
            </div>  `
    ]; 
    break;

    case ('luxure') : [
        document.getElementById('product-content-luxure').innerHTML = 
        `   
        <h1 class="lg-heading product-name text-secondary">${shopItemsData[10].name}</h1>
            <p id="description">${shopItemsData[10].description}</p>
            <div class="purchase-container">
                <h2 class="pricing">$${shopItemsData[10].price}</h2>
                <div id="add-to-cart-belle-btn">
                    <a href="javascript:(void);" class="product-btn button" id=${shopItemsData[10].id} onclick="addToCart(${shopItemsData[10].id})">
                        <i class="fas fa-cart-shopping fa2x"></i> Add to Cart 
                    </a>
                </div>
            </div>  `
    ]; 
    break;

    case ('parfums') : [
        document.getElementById('product-content-parfums').innerHTML = 
        `   
        <h1 class="lg-heading product-name text-secondary">${shopItemsData[11].name}</h1>
            <p id="description">${shopItemsData[11].description}</p>
            <div class="purchase-container">
                <h2 class="pricing">$${shopItemsData[11].price}</h2>
                <div id="add-to-cart-belle-btn">
                    <a href="javascript:(void);" class="product-btn button" id=${shopItemsData[11].id} onclick="addToCart(${shopItemsData[11].id})">
                        <i class="fas fa-cart-shopping fa2x"></i> Add to Cart 
                    </a>
                </div>
            </div>  `
    ]; 
    break;

    case ('petits') : [
        document.getElementById('product-content-petits').innerHTML = 
        `   
        <h1 class="lg-heading product-name text-secondary">${shopItemsData[12].name}</h1>
            <p id="description">${shopItemsData[12].description}</p>
            <div class="purchase-container">
                <h2 class="pricing">$${shopItemsData[12].price}</h2>
                <div id="add-to-cart-belle-btn">
                    <a href="javascript:(void);" class="product-btn button" id=${shopItemsData[12].id} onclick="addToCart(${shopItemsData[12].id})">
                        <i class="fas fa-cart-shopping fa2x"></i> Add to Cart 
                    </a>
                </div>
            </div>  `
    ]; 
    break;

    case ('cloches') : [
        document.getElementById('product-content-cloches').innerHTML = 
        `   
        <h1 class="lg-heading product-name text-secondary">${shopItemsData[13].name}</h1>
            <p id="description">${shopItemsData[13].description}</p>
            <div class="purchase-container">
                <h2 class="pricing">$${shopItemsData[13].price}</h2>
                <div id="add-to-cart-belle-btn">
                    <a href="javascript:(void);" class="product-btn button" id=${shopItemsData[13].id} onclick="addToCart(${shopItemsData[13].id})">
                        <i class="fas fa-cart-shopping fa2x"></i> Add to Cart 
                    </a>
                </div>
            </div>  `
    ]; 
    break;

    case ('serenite') : [
        document.getElementById('product-content-serenite').innerHTML = 
        `   
        <h1 class="lg-heading product-name">${shopItemsData[14].name}</h1>
            <p id="description">${shopItemsData[14].description}</p>
            <div class="purchase-container">
                <h2 class="pricing">$${shopItemsData[14].price}</h2>
                <div id="add-to-cart-belle-btn">
                    <a href="javascript:(void);" class="product-btn button" id=${shopItemsData[14].id} onclick="addToCart(${shopItemsData[14].id})">
                        <i class="fas fa-cart-shopping fa2x"></i> Add to Cart 
                    </a>
                </div>
            </div>  `
    ]; 
    break;
}

let addToCart = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
        id: selectedItem.id,
        item: 1,
        });
    } else {
        search.item += 1;
    }

    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    //document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
