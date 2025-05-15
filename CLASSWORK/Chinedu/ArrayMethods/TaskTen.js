const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 600 },
    { name: "Mouse", price: 25 },
    { name: "Monitor", price: 200 }
];

const getDiscountOnProducts = function (products) {
    const discount = 0.10;
    return products
        .filter(product => product.price > 50)
        .map(product => ({
            name: product.name,
            originalPrice: product.price,
            discountedPrice: product.price * (1 - discount)
        }));
}
console.log(getDiscountOnProducts(products));