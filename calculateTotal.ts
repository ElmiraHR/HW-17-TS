function calculateTotal(price: number, quantity: number, discount: number = 0): number {
    const total = price * quantity;
    const discountedTotal = total - (total * discount / 100);
    return discountedTotal;
}

// Пример использования
const total = calculateTotal(100, 2, 10); // 180
console.log(total);
