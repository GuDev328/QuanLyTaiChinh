const callApi = (url, method, data) =>
    new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: method,
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function (response) {
                resolve(response.result);
            },
            error: function (err) {
                reject(err.responseJSON.message);
            },
        });
    });

// $("#av").click(() => {
//     callApi("http://localhost:3030/users/login", "POST", {
//         email: "datminiphi@gmail.com",
//         password: "5rZd6IQ8eG",
//     })
//         .then(alert)
//         .catch(alert);
// });

    $(document).ready(function () {
        $(".item1").click(function () {
            $(".main-content").load("./pages/menu1.html");
        });

        $(".item2").click(function () {
            $(".main-content").load("./pages/menu2.html");
        });
    });
