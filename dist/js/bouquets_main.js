let itemsMain = document.getElementById("items-main");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let shopItemsDataMain = shopItemsData.filter((item, index) => index < 4);

let generateShop = () => {
    return (itemsMain.innerHTML = shopItemsDataMain
    .map((x) => {
        let { id, name, price, img, link } = x;
        let search = basket.find((x) => x.id === id) || [];
        return `
        <div class="item" id=${id}-item>
            <a href=${link}>
                <div class="product">
                    <button class="price">$${price}</button>
                    <div id=${id} class="quantity">
                        ${search.item === undefined ? 0 : search.item}
                    </div>
                    <img  src=${img} alt="">
                </div>
                <div class="item-name">
                    <p>${name}</p>
                </div>
                <a href="javascript:(void);" class="button" onclick="addToCart(${id})">
                    <i class="fas fa-cart-shopping fa2x"></i> Add to Cart 
                </a>  
            </a>
        </div>
    `;
    })
    .join(""));
};

generateShop();

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

    // console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

