const booksId = [];
const booksName = [];
const bookStatus = [];

let booksChecking = +prompt ("Có bao nhiêu loại sách cần kiểm tra tình trạng hôm nay?");

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

    let status = +prompt (`
        Nhập tình trạng sách: 
        1 → "Hỏng nhẹ" 
        2 → "Hỏng nặng" 
        3 → "Cần sửa gấp"`
    );
    while (status !== 1 && status !== 2 && status !== 3){
        alert ("Chỉ được nhập 1, 2 hoặc 3");
        status = +prompt (`
            Nhập tình trạng sách: 
            1 → "Hỏng nhẹ" 
            2 → "Hỏng nặng" 
            3 → "Cần sửa gấp"`
        );
    }
    if (status === 1) {
        bookStatus.push("Hỏng nhẹ");
    } else if (status === 2) {
        bookStatus.push("Hỏng nặng");
    } else {
        bookStatus.push("Cần sửa gấp");
    }
}

console.log(`Danh sách hiện tại (${booksId.length} cuốn):`);
for (let i = 0; i < booksId.length; i++) {
    console.log(`${i + 1}. ${booksId[i]} - ${booksName[i]} - ${bookStatus[i]}`); 
}

let choice;

do {
    choice = +prompt (`
        Bạn muốn làm gì?
        1: Sửa tình trạng một cuốn sách
        2: Loại bỏ (xóa) một cuốn sách khỏi danh sách
        0: Kết thúc và in báo cáo cuối
        `);

    switch (choice) {
        case 1:
            let fixId = prompt ("Nhập mã sách cần sửa: ");

            while (fixId === null || fixId === " ") {
                alert ("Không được để trống!");
                fixId = prompt ("Nhập mã sách cần sửa: ");
            }

            let searchBook = booksId.indexOf(fixId);

            if (searchBook !== -1) {
                let newStatus = "";
                let status = +prompt (`
                    Chọn tình trạng: 
                    1: Hỏng nhẹ 
                    2: Hỏng nặng 
                    3: Cần sửa gấp 
                    4: Đã sửa xong 
                    5: Loại bỏ
                    `)
                    while (status < 1 || status > 5) {
                        alert("Chỉ được nhập từ 1 đến 5!");
                        status = +prompt("Nhập lại tình trạng:");
                    }
                    if (status === 1) {
                        newStatus = ("Hỏng nhẹ")
                    } else if (status === 2) {
                        newStatus = ("Hỏng nặng")
                    } else if (status === 3) {
                        newStatus = ("Cần sửa gấp")
                    } else if (status === 4) {
                        newStatus = ("Đã sửa xong")
                    } else {
                        newStatus = ("Loại bỏ")
                    }
                    bookStatus[searchBook] = newStatus;
                    alert ("Cập nhật sách thành công tình trạng mới");
            } else {
                alert ("Không tìm thấy sách");
            }
            break;
        case 2:
            let deleteId = prompt ("Nhập mã sách cần xóa: ");

            while (deleteId === null || deleteId === " ") {
                alert ("Không được để trống!");
                deleteId = prompt ("Nhập mã sách cần xóa: ");
            }

            let searchBookNeedToDelete = booksId.indexOf(deleteId);

            if (searchBookNeedToDelete !== -1) {
                for (let i = 0; i < booksId.length; i++) {
                    if (booksId[i] === deleteId) {
                        booksId.splice(i, 1);
                        booksName.splice(i, 1);
                        bookStatus.splice(i, 1);
                        break;
                    }
                }
                alert ("Đã xóa thành công");
            }else {
                alert ("Không tìm thấy sách cần xóa");
            }
            break;    
        case 0:
            alert("Kết thúc chỉnh sửa!");
            break;
        default:
            break;
    }
} while (choice !== 0);

let countFix = 0;
let countDelete = 0;

for (let i = 0; i < bookStatus.length; i++) {
    if (bookStatus[i] === "Đã sửa xong") {
        countFix++;
    }
    if (bookStatus[i] === "Loại bỏ") {
        countDelete++;
    }
}
console.log(`
    BÁO CÁO CUỐI:
    Tổng số sách còn lại: ${booksId.length}
    Số sách đã "Đã sửa xong": ${countFix}
    Số sách "Loại bỏ": ${countDelete}
    `);

