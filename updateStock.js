var productInfo = ["Product A", 100, 5];
function updateStock(inventory, productInfo) {
    var productName = productInfo[0], price = productInfo[1], quantity = productInfo[2];
    inventory[productName] = (inventory[productName] || 0) + quantity;
    return inventory;
}
// Пример использования
var inventory = { "Product A": 10 };
var updatedInventory = updateStock(inventory, productInfo);
console.log(updatedInventory);
