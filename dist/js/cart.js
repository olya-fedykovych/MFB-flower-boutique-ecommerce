let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");
let cartTitle = document.getElementById("cart-title-container");

let basket = JSON.parse(localStorage.getItem("data")) || [];


let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
    if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
    .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
    <div class="cart-item">
        <a href=${search.link} class="cart-img-div">
            <img  src=${search.img} alt="" />
        </a>
        <div class="details">
            <div class="title-X">
                <a href=${search.link}>
                    <h4 class="sm-heading">${search.name}</h4>
                </a>
                <a class="remove-item">
                    <i onclick="removeItem(${id})" class="fas fa-trash"></i>
                </a>
            </div>
            <div class="price-quantity-container">
                <h2 class="cart-item-price">$ ${search.price}</h2>
                <div class="buttons">
                    <a class="minus-btn">
                        <i onclick="decrement(${id})" class="fas fa-minus"></i>
                    </a>
                    <div id=${id} class="quantity">${item}</div>
                    <a class="plus-btn">
                        <i onclick="increment(${id})" class="fas fa-plus"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `;
    })
    .join(""));
    } else {
    ShoppingCart.innerHTML = ``;
    cartTitle.innerHTML = ``;
    label.innerHTML = `
    <div class="empty-cart-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="75" viewBox="0 0 129 63" fill="none">
        <path d="M38.7804 48.6057C36.7514 49.0892 34.6234 49.2645 32.3963 49.1316C30.1692 48.9987 27.9914 48.4484 25.8629 47.4809C23.7343 46.5134 21.7282 45.0593 19.8444 43.1186C17.9606 41.1779 16.3543 38.6445 15.0256 35.5185L14.4151 34.0661L15.8293 33.6332C17.2025 33.2153 18.9604 33.0072 21.1031 33.0092C23.2458 33.011 25.1115 33.2904 26.7004 33.8472C25.9294 31.3992 25.5376 28.6584 25.5249 25.625C25.5122 22.5915 25.9091 19.8772 26.7156 17.482C28.873 18.7984 30.9262 20.6346 32.8751 22.9906C34.824 25.3467 36.2899 27.7101 37.2729 30.081C38.1002 28.7703 39.2953 27.3946 40.8584 25.9539C42.4214 24.5131 43.9235 23.4896 45.3646 22.8833L46.7984 22.2795L47.2906 23.8568C48.1088 26.4047 48.5307 28.8438 48.5562 31.1744C48.5818 33.5049 48.2398 35.7045 47.5301 37.7733C46.8205 39.842 45.7308 41.779 44.2608 43.5842C42.7909 45.3894 40.9641 47.0632 38.7804 48.6057ZM38.4455 47.0781C36.1032 41.7148 32.9854 38.1455 29.0922 36.3703C25.199 34.5952 21.0017 34.1512 16.5004 35.0385C18.9194 40.5676 22.1254 44.1914 26.1184 45.9097C30.1114 47.628 34.2205 48.0175 38.4455 47.0781ZM34.2147 38.1194C34.2911 37.1148 34.5179 36.0117 34.8951 34.8102C35.2723 33.6088 35.7071 32.5637 36.1995 31.675C35.5262 29.5625 34.4307 27.5273 32.9131 25.5693C31.3955 23.6113 29.6418 21.7733 27.6522 20.0553C27.2323 22.6503 27.0704 25.1855 27.1665 27.6609C27.2625 30.1363 27.7315 32.3996 28.5736 34.4506C29.522 34.8149 30.5074 35.3499 31.5296 36.0556C32.5519 36.7614 33.4469 37.4493 34.2147 38.1194ZM39.6793 45.97C41.0848 44.8009 42.3479 43.5089 43.4688 42.0941C44.5896 40.6792 45.4557 39.0965 46.0669 37.346C46.6781 35.5955 46.9961 33.6427 47.0208 31.4876C47.0454 29.3326 46.6472 26.9583 45.826 24.3648C42.7696 25.9984 40.3228 28.2008 38.4854 30.9719C36.648 33.7432 35.6938 36.6205 35.6227 39.6039C36.4004 40.5709 37.0986 41.5223 37.7176 42.4581C38.3365 43.3938 38.9904 44.5645 39.6793 45.97Z" fill="black"/>
        <path d="M66.6924 48.9232C64.6204 48.6836 62.5607 48.1205 60.5134 47.2339C58.4661 46.3473 56.6078 45.0854 54.9385 43.4482C53.2693 41.811 51.8815 39.7584 50.7751 37.2905C49.6687 34.8225 49.0257 31.8926 48.8462 28.5006L48.7693 26.927L50.2462 27.004C51.6796 27.0808 53.4026 27.4866 55.4154 28.2212C57.4283 28.9558 59.086 29.8565 60.3885 30.9231C60.5014 28.359 61.0706 25.6496 62.0961 22.7947C63.1217 19.9399 64.423 17.525 66.0001 15.55C67.5772 17.525 68.8785 19.9527 69.9041 22.8332C70.9296 25.7137 71.4988 28.436 71.6116 31.0001C72.8373 30.0514 74.4309 29.1674 76.3924 28.3481C78.354 27.5289 80.1155 27.0808 81.677 27.004L83.2309 26.927L83.1539 28.5775C83.0514 31.2515 82.6136 33.6879 81.8405 35.8866C81.0674 38.0854 79.9937 40.0354 78.6193 41.7366C77.245 43.4379 75.5584 44.8854 73.5597 46.079C71.561 47.2726 69.2719 48.2206 66.6924 48.9232ZM66.9001 47.3732C66.5334 41.5322 64.8244 37.1118 61.7731 34.1121C58.7219 31.1125 54.9296 29.2598 50.3962 28.554C50.7783 34.577 52.5516 39.0788 55.7161 42.0592C58.8806 45.0396 62.6086 46.8109 66.9001 47.3732ZM65.9885 37.5078C66.4039 36.5898 66.9943 35.6308 67.7597 34.6308C68.5251 33.6308 69.2911 32.7975 70.0578 32.1308C70.1475 29.9155 69.8142 27.6283 69.0578 25.2693C68.3014 22.9103 67.2822 20.5834 66.0001 18.2885C64.718 20.5834 63.6988 22.9103 62.9424 25.2693C62.186 27.6283 61.8527 29.9155 61.9424 32.1308C62.7091 32.7975 63.452 33.6373 64.1712 34.6501C64.8905 35.6629 65.4962 36.6155 65.9885 37.5078ZM68.4385 46.754C70.1591 46.136 71.7879 45.354 73.3251 44.4078C74.8623 43.4616 76.2174 42.2706 77.3905 40.8347C78.5636 39.3988 79.5302 37.6725 80.2905 35.6558C81.0508 33.6392 81.4886 31.2719 81.6039 28.554C78.1732 29.0437 75.1206 30.2764 72.4462 32.252C69.7719 34.2277 67.8911 36.6051 66.8039 39.3843C67.2039 40.5589 67.5347 41.6918 67.7962 42.7828C68.0578 43.8738 68.2719 45.1976 68.4385 46.754Z" fill="black"/>
        <path d="M94.2817 48.8402C92.4166 47.9064 90.6737 46.6728 89.0531 45.1394C87.4325 43.606 86.1179 41.7847 85.1092 39.6753C84.1006 37.5659 83.4985 35.1625 83.3029 32.465C83.1073 29.7674 83.5052 26.7943 84.4967 23.5455L84.9626 22.0404L86.3242 22.6179C87.6448 23.1804 89.1251 24.151 90.7653 25.5298C92.4055 26.9085 93.6552 28.3218 94.5144 29.7696C95.4974 27.3987 96.9589 25.0473 98.899 22.7154C100.839 20.3835 102.888 18.5593 105.045 17.2429C105.852 19.6381 106.244 22.3645 106.223 25.4221C106.201 28.4796 105.805 31.2324 105.034 33.6805C106.511 33.2081 108.31 32.9225 110.434 32.8235C112.557 32.7246 114.366 32.9061 115.859 33.3679L117.346 33.827L116.709 35.3517C115.698 37.8294 114.453 39.9691 112.975 41.7708C111.497 43.5725 109.821 45.0377 107.947 46.1663C106.074 47.2949 103.994 48.0782 101.708 48.5162C99.4212 48.9542 96.9459 49.0622 94.2817 48.8402ZM95.007 47.4547C96.6602 41.8405 96.5661 37.1022 94.7248 33.2399C92.8835 29.3775 89.9535 26.3395 85.935 24.1257C84.234 29.9162 84.3606 34.753 86.315 38.636C88.2693 42.5189 91.1666 45.4585 95.007 47.4547ZM97.5246 37.8725C98.2289 37.1519 99.1117 36.4527 100.173 35.7748C101.234 35.0969 102.239 34.5758 103.187 34.2116C104.029 32.1605 104.498 29.8972 104.595 27.4218C104.691 24.9464 104.529 22.4112 104.109 19.8162C102.119 21.5342 100.366 23.3722 98.8479 25.3302C97.3303 27.2882 96.2348 29.3235 95.5615 31.4359C96.0539 32.3246 96.4648 33.3678 96.7943 34.5656C97.1237 35.7633 97.3672 36.8656 97.5246 37.8725ZM96.6644 47.399C98.4926 47.4068 100.291 47.229 102.059 46.8656C103.827 46.5022 105.508 45.8465 107.101 44.8984C108.694 43.9503 110.193 42.6588 111.597 41.0238C113.002 39.3887 114.223 37.314 115.261 34.7994C111.869 34.0862 108.579 34.2005 105.39 35.1423C102.202 36.0841 99.6211 37.6749 97.649 39.9147C97.6231 41.1553 97.5465 42.3329 97.4191 43.4476C97.2917 44.5623 97.0402 45.8794 96.6644 47.399Z" fill="black"/>
        </svg>
        <h2 class="lg-heading empty-cart-title"><span class="text-secondary">Cart</span> is Empty</h2>
        <a href="/dist/html/main/bouquets.html">
            <button class="continue-shopping button">Continue Shopping</button>
        </a>
    </div>
    `;
    
}
};

generateCartItems();

let increment = (id) => {
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

generateCartItems();
update(selectedItem.id);
localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
    search.item -= 1;
    }
update(selectedItem.id);
basket = basket.filter((x) => x.item !== 0);
generateCartItems();
localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
let search = basket.find((x) => x.id === id);
document.getElementById(id).innerHTML = search.item;
calculation();
TotalAmount();
};

let removeItem = (id) => {
let selectedItem = id;
    basket = basket.filter((x) => x.id !== selectedItem.id);
    generateCartItems();
    TotalAmount();
    localStorage.setItem("data", JSON.stringify(basket));
};

let clearCart = () => {
    basket = [];
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
};

let TotalAmount = () => {
    if (basket.length !== 0) {
    let amount = basket
    .map((x) => {
        let { item, id } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];

        return item * search.price;
    })
    .reduce((x, y) => x + y, 0);
    label.innerHTML = `
    <div class="total-container">
        <div class="total-prices">
            <h2 class="md-heading total">Total: <span class="text-secondary">$${amount}</span></h2>
            <p class="delivery-price">Delivery: $10.99</p>
        </div>
        <div class="cart-total-buttons">
            <a href="/dist/html/main/cart/checkout.html">
                <button class="checkout button">Checkout</button>
            </a>
            <button onclick="clearCart()" class="removeAll button">Clear Cart</button>
        </div>
    </div>
    `;
} else return;
};

TotalAmount();