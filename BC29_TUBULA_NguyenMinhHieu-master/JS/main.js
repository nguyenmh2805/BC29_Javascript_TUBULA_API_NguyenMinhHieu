var service = new Service();

window.onscroll = function() {
    if(window.scrollY > 100){
        document.getElementById('navbar').classList.add('header-scroll');
    }else {
        document.getElementById('navbar').classList.remove('header-scroll');
    }
};

function getEle(id) {
    return document.getElementById(id);
}

function getListUsers() {
    // lấy học viên từ sever
    //pending
    getEle("loader").style.display = "block";
    var promise = service.getListUserApi();
    promise
        .then(function (result){
           renderListUsers(result.data);
           getEle("loader").style.display = "none";
        })
        .catch(function (error){
            console.log(error);
        });
}

getListUsers();

function renderListUsers(data){
    var contentHTML = "";

    data.forEach(function(user){
        contentHTML += `
                <div class="card-container col-lg-3 col-sm-6 col-12">
                    <div class="card card-item wow animate__animated animate__fadeIn animate__delay-1s">
                        <img class="card-img-top" src="./Image/${user.hinhAnh}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${user.ngonNgu}</h5>
                            <h3 class="card-text">${user.hoTen}</h3>
                            <p class="card-desc">
                                ${user.moTa}
                            </p>
                        </div>
                    </div>
                </div>
        `
    });

    getEle("listUsers").innerHTML = contentHTML;
}


