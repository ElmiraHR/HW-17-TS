interface Order {
    orderId: string;
    amount: number;
    status: 'pending' | 'shipped' | 'delivered';
}

const orders: Order[] = [
    { orderId: "1", amount: 100, status: "pending" },
    { orderId: "2", amount: 200, status: "shipped" },
    { orderId: "3", amount: 150, status: "delivered" },
];

function filterOrdersByStatus(orders: Order[], status: 'pending' | 'shipped' | 'delivered'): Order[] {
    return orders.filter(order => order.status === status);
}

// Пример использования
const pendingOrders = filterOrdersByStatus(orders, "pending");
console.log(pendingOrders);
