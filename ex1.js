const bookReturn = [];

let totalBook = +prompt ("Bạn muốn trả bao nhiêu cuốn sách: ");

for (let i = 1; i <= totalBook; i++) {
    const bookName = prompt ("Nhập tên cuốn sách thứ " + i + ": ");
    bookReturn.push(bookName);
}

console.log("Tổng số sách được trả: ", totalBook);
console.log("Danh sách đã trả:");
for (let i = 0; i < bookReturn.length; i++) {
    console.log(`${i + 1}. ${bookReturn[i]}`);
}

