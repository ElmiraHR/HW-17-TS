function calculateTotal(price, quantity, discount) {
    if (discount === void 0) { discount = 0; }
    var total = price * quantity;
    var discountedTotal = total - (total * discount / 100);
    return discountedTotal;
}
// Пример использования
var total = calculateTotal(100, 2, 10); // 180
console.log(total);
