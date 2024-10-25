let id: string | number;

function displayId(id: string | number): void {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else if (typeof id === 'number') {
        console.log(id * 10);
    }
}

// Пример использования
id = "abc123";
displayId(id); // ABC123

id = 5;
displayId(id); // 50
