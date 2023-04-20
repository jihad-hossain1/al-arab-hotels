// import { getShoppingCart } from "../utilities/fakedb";

import { getShoppingCart } from "./db";


const cartProductsLoader = async () => {
    const loadedProducts = await fetch('hotelsData.json');
    const products = await loadedProducts.json();

    // if cart data is in database, you have to use async await
    const storedCart = getShoppingCart();

    let savedCart = [];

    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    // if you need to send two things
    // return [products, savedCart]
    // another options
    // return { products, cart: savedCart }

    return { savedCart, products };

}

export default cartProductsLoader;