const products = Array.from(document.getElementsByClassName("product"));
const cartProducts = document.querySelector(".cart__products");
const cart = document.querySelector(".cart");

let storedProducts = [];
if (JSON.parse(localStorage.getItem("storedProducts")) ) {
    storedProducts = Array.from(JSON.parse(localStorage.getItem("storedProducts")));
    cartProducts.insertAdjacentHTML("afterBegin", storedProducts.map((storedProduct) => `<div class="cart__product" data-id="${storedProduct.id}">
                                                        <img class="cart__product-image" src="${storedProduct.src}">
                                                        <div class="cart__product-count">${storedProduct.count}</div>
                                                        <div class="cart__product-remove">удалить</div>
                                                    </div>`).join("")); 
} 

products.forEach((product) => {
    const btnDecrementProduct = product.querySelector(".product__quantity-control_dec"); 
    const btnIncrementProduct = product.querySelector(".product__quantity-control_inc"); 
    const valueQuantityProduct = product.querySelector(".product__quantity-value"); 
    const btnAddProductInCart = product.querySelector(".product__add"); 
    let locationsProductInCart;


    btnDecrementProduct.addEventListener("click", () => {
        if(valueQuantityProduct.textContent > 1) {
            valueQuantityProduct.textContent--; 
        }
    });
    btnIncrementProduct.addEventListener("click", () => {
        valueQuantityProduct.textContent++;
    });
    btnAddProductInCart.addEventListener("click", () => {
        let id = btnAddProductInCart.closest(".product").dataset.id;
        let imageSrc = btnAddProductInCart.closest(".product").querySelector("img").getAttribute("src");
        let count = btnAddProductInCart.closest(".product").querySelector(".product__quantity-value").textContent;

        let products = [...cart.querySelectorAll(".cart__product")];
        let productHasCart = products.find(product => product.getAttribute("data-id") === id);
        let productInCart;
        productInCart = products.find((el) => el.dataset.id == id);
        if (productHasCart) {
            let cartCount = productInCart.querySelector(".cart__product-count");
            cartCount.textContent = Number(count) + Number(cartCount.textContent);

            const countElInCart = storedProducts.find((el) => el.id == id);
            countElInCart.count = Number(count) + Number(countElInCart.count);

            locationsProductInCart = productInCart.getBoundingClientRect();
        } else {
            let storedProduct = {
                id: id,
                src: imageSrc,
                count: count
            }    
            storedProducts.push(storedProduct);  
            cartProducts.innerHTML += `<div class="cart__product" data-id="${storedProduct.id}">
                                            <img class="cart__product-image" src="${storedProduct.src}">
                                            <div class="cart__product-count">${storedProduct.count}</div>
                                            <div class="cart__product-remove">удалить</div>
                                        </div>`         

            const arrayWithNewImg = Array.from(cartProducts.querySelectorAll(".cart__product-image"));
            const locationsNewProductImgInCart = arrayWithNewImg[arrayWithNewImg.length - 1];       
            locationsProductInCart = locationsNewProductImgInCart.getBoundingClientRect();          
        }
        localStorage.setItem("storedProducts", JSON.stringify(storedProducts));        
        
        const locationsProduct = product.querySelector("img").getBoundingClientRect();
  
        const copy = product.insertBefore(product.querySelector("img").cloneNode(false), product.querySelector("img"));
        let copyTopValue = locationsProduct.top;
        let copyLeftValue = locationsProduct.left;
        copy.style.position = "absolute";
        copy.style.top = `${copyTopValue}px`;
        copy.style.left = `${copyLeftValue}px`;

        const topDifference = (copyTopValue - Math.abs((locationsProductInCart.top))) / 100; 
        const leftDifference = (locationsProductInCart.left - copyLeftValue) / 100;

        const intervalId = setInterval(() => {
            setTimeout(() => {
                if ((copyTopValue > locationsProductInCart.top) && (locationsProductInCart.left > copyLeftValue)) {
                    copy.style.top = `${copyTopValue -= topDifference}px`;            
                    copy.style.left = `${copyLeftValue += leftDifference}px`;           
                }  else {
                    copy.remove();
                    clearInterval(intervalId);
                    return;
                }     
            });                
        }, 1);
    });
});

cart.onclick = function(event) {
    let target = event.target;
    if (target.classList.contains("cart__products")) return;

    const id = target.closest(".cart__product").dataset.id;
    if (target.classList.contains("cart__product-count") && target.textContent != 1) {
        target.textContent --;
        storedProducts.find((el) => el.id == id).count--;
    } else {
        storedProducts.splice(storedProducts.find((el) => el.id == id),1);
        target.closest(".cart__product").remove();
    }
    localStorage.setItem('storedProducts', JSON.stringify(storedProducts));
}