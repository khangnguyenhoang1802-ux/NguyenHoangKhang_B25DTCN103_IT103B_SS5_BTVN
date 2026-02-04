let choice;
let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];

do {
    choice = +prompt (`
        --- THƯ VIỆN KHOA HỌC ---
        1. Xem danh sách
        2. Nhập sách mới
        3. Mượn sách (Xóa)
        4. Sửa tên sách
        5. Sắp xếp kệ
        0. Thoát
    `);
    switch (choice) {
        case 1:
            console.log("Số lượng sách trong kho: ", books.length);
            console.log("Danh sách các quyển sách trong kho: ");
            for (let i = 0; i < books.length; i++) {
                console.log(`${i + 1}. ${books[i]}`);
            }
            break;
        case 2:
            let addBookName = prompt ("Nhập tên sách cần thêm: ");
            books.push (addBookName);
            alert ("Thêm sách thành công");
            break;
        case 3:
            const borrowingBooks = prompt ("Nhập tên cuốn sách cần mượn: ");
            const resultSearch = books.indexOf (borrowingBooks);

            if (resultSearch !== -1) {
                alert (`Đã mượn cuốn sách ${borrowingBooks}`);

                books.splice (resultSearch, 1)
            } else {
                alert ("Không có sách trong kho");
            }
            break;
        case 4:
            const oldBook = prompt ("Vui lòng nhập tên sách cần cập nhật: ");
            const searchOldBook = books.indexOf (oldBook);
            
            if (searchOldBook !== -1) {
                const newBook = prompt ("Vui lòng nhập tên sách mới: ");
                books[searchOldBook] = newBook;

                alert ("Cập nhật sách thành công");
            } else {
                alert ("Không tìm thấy sách");
            }
            break;
        case 5:
                books.sort();
                
                console.log("Danh sách sau khi sắp xếp", books);

                for (let i = 0; i < books.length; i++) {
                   console.log(`${i+1}. ${books[i]}`); 
                }
            break;
        case 0:
            alert ("Đã thoát chương trình")
            break;    
        default:
            break;
    }
} while (choice !== 0);