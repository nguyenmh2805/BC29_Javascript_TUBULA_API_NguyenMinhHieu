function Service() {

    this.getListUserApi = function () {
        return axios({
            url: "https://62973de08d77ad6f75fdf00d.mockapi.io/users",
            method: "GET",
        });
    };
}