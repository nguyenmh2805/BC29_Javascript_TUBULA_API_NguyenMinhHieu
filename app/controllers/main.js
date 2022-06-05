var service = new Services();

function getEle(id) {
    return document.getElementById(id);
}

function getListUsers(){
    service
        .getListUserApi()
        .then(function (result) {
            renderListUsers(result.data);
        })
        .catch(function (error){
            console.log(error);
        });
}

getListUsers();

function renderListUsers(data){
    var contentHTML = "";
    data.forEach(function(user, index){
        contentHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${user.taiKhoan}</td>
                <td>${user.matKhau}</td>
                <td>${user.hoTen}</td>
                <td>${user.email}</td>
                <td>${user.ngonNgu}</td>
                <td>${user.loaiND}</td>
                <td>
                    <button class="btn btn-info" data-toggle="modal"
                    data-target="#myModal" onclick="editUser(${user.id})">Sửa</button>
                    <button class="btn btn-danger" onclick="deleteUser(${user.id})">Xóa</button>
                </td>
            </tr>
        `;
    });

    getEle("tblDanhSachNguoiDung").innerHTML = contentHTML;
}

/**
 * Xóa người dùng
 */
function deleteUser(id){
    console.log(id);
    service
        .deleteUserApi(id)
        .then(function(result){
            //render table
            getListUsers();
        })
        .catch(function(error){
            console.log(error);
        });
}

getEle("btnThemNguoiDung").onclick = function (){
    //Sửa lại title modal
    document.getElementsByClassName("modal-title")[0].innerHTML = "Thêm người dùng";

    //Thêm nút "Add" vào footer modal
    var footer = `<button class="btn btn-success" onclick="addUser()">Add</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
}

/**
 * Add User
 */
function addUser(){
    var taiKhoan = getEle("TaiKhoan").value;
    var hoTen = getEle("HoTen").value;
    var matKhau = getEle("MatKhau").value;
    var email = getEle("Email").value;
    var hinhAnh = getEle("HinhAnh").value;
    var loaiNguoiDung = getEle("loaiNguoiDung").value;
    var loaiNgonNgu = getEle("loaiNgonNgu").value;
    var moTa = getEle("MoTa").value;

    //đối tượng user
    var user = new User("", taiKhoan, hoTen, matKhau, email, hinhAnh,loaiNguoiDung, loaiNgonNgu, moTa);
    
    service
        .addUserApi(user)
        .then(function(){
            //render table
            getListUsers();
            //close modal
            document.getElementsByClassName("close")[0].click();
        })
        .catch(function(error){
            console.log(error);
        });
}

/**
 * Edit User
 */
function editUser(id){
     //Sửa lại title modal
     document.getElementsByClassName("modal-title")[0].innerHTML = "Sửa người dùng";

     //Thêm nút "Update" vào footer modal
     var footer = `<button class="btn btn-success" onclick="updateUser(${id})">Update</button>`;
     document.getElementsByClassName("modal-footer")[0].innerHTML = footer;

     //getUserById
     service
        .getUserById(id)
        .then(function(result){
            console.log(result.data);
            //show thông tin ra các thẻ input
            getEle("TaiKhoan").value = result.data.taiKhoan;
            getEle("HoTen").value = result.data.hoTen;
            getEle("MatKhau").value = result.data.matKhau;
            getEle("Email").value = result.data.email;
            getEle("HinhAnh").value = result.data.hinhAnh;
            getEle("loaiNguoiDung").value = result.data.loaiND;
            getEle("loaiNgonNgu").value = result.data.ngonNgu;
            getEle("MoTa").value = result.data.moTa;
        })
        .catch(function(error){
            console.log(error);
        });
}

/**
 * Update user
 */
function updateUser(id) {
    var taiKhoan = getEle("TaiKhoan").value;
    var hoTen = getEle("HoTen").value;
    var matKhau = getEle("MatKhau").value;
    var email = getEle("Email").value;
    var hinhAnh = getEle("HinhAnh").value;
    var loaiNguoiDung = getEle("loaiNguoiDung").value;
    var loaiNgonNgu = getEle("loaiNgonNgu").value;
    var moTa = getEle("MoTa").value;

    var user = new User(id,taiKhoan, hoTen, matKhau, email, hinhAnh, loaiNguoiDung, loaiNgonNgu, moTa)
    
    service
        .updateUserApi(user)
        .then(function(){
            //render table
            getListUsers();
            //close modal
            document.getElementsByClassName("close")[0].click();
        })
        .catch(function(error){
            console.log(error);
        });
}