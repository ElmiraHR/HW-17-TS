type ProductInfo = [string, number, number];

const productInfo: ProductInfo = ["Product A", 100, 5];

function updateStock(inventory: { [key: string]: number }, productInfo: ProductInfo): { [key: string]: number } {
    const [productName, price, quantity] = productInfo;
    inventory[productName] = (inventory[productName] || 0) + quantity;
    return inventory;
}

// Пример использования
const inventory = { "Product A": 10 };
const updatedInventory = updateStock(inventory, productInfo);
console.log(updatedInventory);
