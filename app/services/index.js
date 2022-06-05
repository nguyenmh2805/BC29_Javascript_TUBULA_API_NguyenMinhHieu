function Services(){
    this.getListUserApi = function () {
        return axios({
            url:"https://62973de08d77ad6f75fdf00d.mockapi.io/users",
            method: "GET",
        })
    }

    this.deleteUserApi = function (id) {
        return axios({
            url:`https://62973de08d77ad6f75fdf00d.mockapi.io/users/${id}`,
            method: "DELETE",
        })
    }

    this.addUserApi = function (user) {
        return axios({
            url:"https://62973de08d77ad6f75fdf00d.mockapi.io/users",
            method: "POST",
            data: user,
        });
    };

    this.getUserById = function (id) {
        return axios({
            url:`https://62973de08d77ad6f75fdf00d.mockapi.io/users/${id}`,
            method: "GET",
        });
    };

    this.updateUserApi = function (user) {
        return axios({
            url:`https://62973de08d77ad6f75fdf00d.mockapi.io/users/${user.id}`,
            method: "PUT",
            data: user,
        });
    };
}