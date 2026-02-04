const booksId = [];
const booksName = [];
const booksCategory = [];
const inventoryQuantity = [];

let updateBooks = +prompt ("Có bao nhiêu loại sách cần nhập thông tin hôm nay?");

for (let i = 0; i < updateBooks; i++) {
    let id = prompt ("Nhập mã sách: ");

    while (id === null || id === " " || booksId.indexOf (id) !== -1) {
        alert ("Mã sách không hợp lệ hoặc đã bị trùng");
        id = prompt ("Nhập mã sách: ");
    }
    booksId.push (id);

    let name = prompt ("Nhập tên sách: ");

    while (name === null || name === " " ) {
        alert ("Không được để trống!");
        name = prompt ("Nhập tên sách: ");
    }
    booksName.push (name);

    let category = prompt ("Nhập các thể loại: ");

    while (category === null || category === " " ) {
        alert ("Không được để trống!");
        category = prompt ("Nhập các thể loại: ");
    }
    booksCategory.push (category);

    let inventory = +prompt ("Nhập số lượng tồn kho: ");

    while (inventory === null || inventory === " " || inventory < 0) {
        alert ("Số lượng không hợp lệ!");
        inventory = +prompt ("Nhập số lượng tồn kho: ");
    }
    inventoryQuantity.push (inventory);
}

let countLapTrinh = 0;
for (let i = 0; i < booksCategory.length; i++) {
    if (booksCategory[i].toLowerCase().includes("lập trình")) {
        countLapTrinh++;
    }
}

let jsWebCodes = "";

for (let i = 0; i < booksCategory.length; i++) {
    let catLower = booksCategory[i].toLowerCase();

    if (catLower.includes("javascript") && catLower.includes("web")) {
        jsWebCodes += booksId[i] + " ";
    }
}

let minQuantity = inventoryQuantity[0];
let minIndex = 0;

for (let i = 1; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] < minQuantity) {
        minQuantity = inventoryQuantity[i];
        minIndex = i;
    }
}

console.log(`
    Tổng số sách thuộc thể loại 'Lập trình': ${countLapTrinh}
    Danh sách mã sách thuộc cả hai thể loại "JavaScript" và "Web": ${jsWebCodes || "Không có"}
    Loại sách có số lượng tồn kho thấp nhất:
    Mã sách: ${booksId[minIndex]}, Tên sách: ${booksName[minIndex]}, Tồn kho: ${inventoryQuantity[minIndex]}
    `);


    