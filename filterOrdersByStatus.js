var orders = [
    { orderId: "1", amount: 100, status: "pending" },
    { orderId: "2", amount: 200, status: "shipped" },
    { orderId: "3", amount: 150, status: "delivered" },
];
function filterOrdersByStatus(orders, status) {
    return orders.filter(function (order) { return order.status === status; });
}
// Пример использования
var pendingOrders = filterOrdersByStatus(orders, "pending");
console.log(pendingOrders);
