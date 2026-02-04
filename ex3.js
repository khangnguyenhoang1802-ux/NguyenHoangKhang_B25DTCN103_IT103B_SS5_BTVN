const booksId = [];
const booksName = [];
const inventoryQuantity = [];

let booksChecking = +prompt ("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?");

for (let i = 0; i < booksChecking; i++) {
    let id = prompt ("Nhập mã sách: ");

    while (id === null || id === " ") {
        alert ("Không được để trống!");
        id = prompt ("Nhập mã sách: ");
    }
    booksId.push (id);

    let name = prompt ("Nhập tên sách: ");

    while (name === null || name === " ") {
        alert ("Không được để trống!");
        name = prompt ("Nhập tên sách: ");
    }
    booksName.push (name);

    let inventory = +prompt ("Nhập số lượng tồn kho hiện tại (số nguyên ≥ 0): ");

    while (inventory === null || inventory === " " || inventory < 0) {
        alert ("Cú pháp không hợp lệ, vui lòng nhập lại");
        inventory = +prompt ("Nhập số lượng tồn kho hiện tại (số nguyên ≥ 0): ")
    }
    inventoryQuantity.push (inventory);
}

let countLowStock = 0;
let outOfStockBooks = "";

for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] <= 5) {
        countLowStock++;
    }

    if (inventoryQuantity[i] === 0) {
        outOfStockBooks += booksId[i] + " ";
    }
}

console.log("Tổng số sách đang kiểm tra: ", booksId.length);
for (let i = 0; i < booksId.length; i++) {
    console.log((i + 1) + ". Mã: " + booksId[i] + " - Tên: " + booksName[i] + "- Còn: " + inventoryQuantity[i] + " bản"); 
}

