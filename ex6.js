let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];

let n = parseInt(prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn? "));

while (isNaN(n) || n <= 0) {
    alert("Vui lòng nhập một số nguyên dương!");
    n = parseInt(prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn? "));
}

for (let i = 0; i < n; i++) {
    console.log(`\n=== Nhập thông tin bạn đọc thứ ${i + 1} ===`);
    
    let cardId;
    let isDuplicate = true;
    while (isDuplicate) {
        cardId = prompt(`Nhập mã thẻ bạn đọc thứ ${i + 1}:`);
        
        if (cardId === null || cardId.trim() === "") {
            alert("Mã thẻ không được để trống!");
            continue;
        }
        
        isDuplicate = false;
        for (let j = 0; j < readerCardIds.length; j++) {
            if (readerCardIds[j].toUpperCase() === cardId.toUpperCase()) {
                alert("Mã thẻ này đã tồn tại! Vui lòng nhập mã thẻ khác.");
                isDuplicate = true;
                break;
            }
        }
        
        if (!isDuplicate) {
            readerCardIds.push(cardId);
        }
    }
    
    let name;
    do {
        name = prompt(`Nhập tên bạn đọc thứ ${i + 1}:`);
        if (name === null || name.trim() === "") {
            alert("Tên bạn đọc không được để trống!");
        }
    } while (name === null || name.trim() === "");
    readerNames.push(name);
    
    let bookCodes = prompt(`Nhập mã sách đang mượn (cách nhau bởi dấu phẩy) cho bạn đọc thứ ${i + 1}:`);
    if (bookCodes === null) {
        bookCodes = "";
    }
    borrowedBookCodes.push(bookCodes);
    
    let days;
    let isValidDays = false;
    while (!isValidDays) {
        days = parseInt(prompt(`Nhập số ngày quá hạn cho bạn đọc thứ ${i + 1}:`));
        
        if (isNaN(days) || days < 0) {
            alert("Vui lòng nhập một số nguyên không âm!");
        } else {
            isValidDays = true;
            overdueDays.push(days);
        }
    }
}

console.log("\n========== KẾT QUẢ THỐNG KÊ ==========");

let countOver10Days = 0;
for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 10) {
        countOver10Days++;
    }
}
console.log(`\na) Tổng số bạn đọc có quá hạn ≥ 10 ngày: ${countOver10Days}`);
alert(`a) Tổng số bạn đọc có quá hạn ≥ 10 ngày: ${countOver10Days}`);

let readersWithBothJSandPYT = [];
for (let i = 0; i < borrowedBookCodes.length; i++) {
    let books = borrowedBookCodes[i].split(",");
    let hasJS = false;
    let hasPYT = false;
    
    for (let j = 0; j < books.length; j++) {
        let bookCode = books[j].trim().toUpperCase();
        if (bookCode.startsWith("JS")) {
            hasJS = true;
        }
        if (bookCode.startsWith("PYT")) {
            hasPYT = true;
        }
    }
    
    if (hasJS && hasPYT) {
        readersWithBothJSandPYT.push(readerCardIds[i]);
    }
}

let resultB = readersWithBothJSandPYT.length > 0 
    ? readersWithBothJSandPYT.join(", ") 
    : "Không có bạn đọc nào";
console.log(`\nb) Mã thẻ bạn đọc mượn cả sách JS và PYT: ${resultB}`);
alert(`b) Mã thẻ bạn đọc mượn cả sách JS và PYT:\n${resultB}`);

let maxOverdueDays = -1;
let readerWithMaxDays = "";
for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] > maxOverdueDays) {
        maxOverdueDays = overdueDays[i];
        readerWithMaxDays = readerNames[i];
    }
}
console.log(`\nc) Bạn đọc có số ngày quá hạn cao nhất: ${readerWithMaxDays} (${maxOverdueDays} ngày)`);
alert(`c) Bạn đọc có số ngày quá hạn cao nhất:\n${readerWithMaxDays} (${maxOverdueDays} ngày)`);

let countOver7Days = 0;
for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 7) {
        countOver7Days++;
    }
}

let warning = "";
if (countOver7Days === 0) {
    warning = "Tình hình trả sách hôm nay khá tốt!";
} else if (countOver7Days >= 1 && countOver7Days <= 4) {
    warning = "Cần gửi nhắc nhở cho một số bạn đọc!";
} else {
    warning = "Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!";
}

console.log(`\nd) Cảnh báo: ${warning}`);
alert(`d) Cảnh báo:\n${warning}`);

console.log("\n========== DỮ LIỆU ĐẦU VÀO ==========");
for (let i = 0; i < readerCardIds.length; i++) {
    console.log(`
Bạn đọc ${i + 1}:
  - Mã thẻ: ${readerCardIds[i]}
  - Tên: ${readerNames[i]}
  - Sách mượn: ${borrowedBookCodes[i]}
  - Quá hạn: ${overdueDays[i]} ngày
    `);
}
